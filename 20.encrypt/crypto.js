//crypto
// node 내장 모듈

const crypto = require('crypto');

// crypto "단방향"암호화 구현
//createHash()
//: 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

const createHashedPassword = (password) => {
  //createHash(알고리즘).update(암호화 할 값).digest(인코딩방식) 메서드 체이닝 사용
  return crypto.createHash('sha512').update(password).digest('base64');
};

const pw = createHashedPassword('1234');
console.log(pw); //1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==
console.log(pw); //1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==(이거 다른 컴에서 콘솔 찍어도 똑같음)
const pw2 = createHashedPassword('12345');
console.log(pw2); //NieQminDE4Ggcewn98nKl3Jhgq7Smn3dLlQ1MyLPswq7njpt8qwsIP4jQ2MR1nhWTQyNMFkwV19g4tPQSBhNeQ==
//해시 함수의 한계
// 레인보우테이블? 해시함수를 사용해 만들어 낼 수 있는 값들을 대량으로 저장해놓은 표
//  해시 함수를 사용하여 암호화된 비밀번호를 레인보우테이블을 사용해서 원문데이터를 역추적하기도 한다
// => 암호화된 비번을 빠르게 역추적해서 원본 비번을 찾아낼 수 있음

//암호 보완법1)salt 2) 해시함수 반복

// /////////////////
// pbkf2(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
//  -비밀번호 기반 키 도출 함수, 주로 비번 저장시 사용
//  -buffer 형식의 데이터를 반환 ->toString()이용해 문저열로 반환

// 단방향 암호화 생성함수
function saltAndHashPassword(password) {
  //여기서 함수의 인자인 password는 사용자에게 입력받은 비번임
  const salt = crypto.randomBytes(16).toString('base64'); //임의의 salt생성
  const iterations = 100; //반복횟수
  const keylen = 64; //키의 길이
  const digest = 'sha512'; //해시 알고리즘
  //   hash=>salt랑 password를 결합해서 해시(암호화된 비번)을 생성
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    //여기까지는 반환되는 값이 buffer형태
    .toString('base64');
  //buffer->string변환
  return { salt, hash };
}
//2. 암호 비교 함수
// : inputPassword:사용자가 제공한 비번
// : salt와 hash를 기반으로 새로운 해시를 생성하고,
//  savedHash랑 비교
// 제공된 비번이랑 원래 비번이 같으면 두 해시값도 일치

function checkPassword(inputPassword, savedSalt, savedHash) {
  const iterations = 100; //반복횟수
  const keylen = 64; //키의 길이
  const digest = 'sha512'; //해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(inputPassword, savedSalt, iterations, keylen, digest)
    .toString('base64');
  return savedHash === hash; //같다면 true, 다르면 false
}

// 사용 예제
const password = '1234!';
//비번 암호화
const { salt, hash } = saltAndHashPassword(password); //구주본해 할당으로 salt:솔트값, hash:해시값으로 꺼내옴
console.log(
  `비번 암호화에 쓰인 Salt:${salt},비번이 암호화된 결과 Hash:${hash}`
);
// 비밀번호 확인
const inputPassword = '12345!';
const isMatch = checkPassword(inputPassword, salt, hash); //같다면 true, 아니면 false를 반환
console.log(`비밀전호 일치"${isMatch}`);
