//bcrypt
// :비밀번호 암호화 하는 알고리즘 중 하나
//  : 주로 강력한 보안 필요할 때 사용
//  :blowfish암호를 기반으로 설계된 단방향 암호화 함수
//  (보안 강화하기 위해 해쉬하는 것으로 원본 데이터를 복원하는 기능은 없음)

const bcrypt = require('bcrypt');
const originalPassword = '1234'; //원본 비번

const saltRounds = 10; //솔트라운드 수를 정의

//1. 비밀번호 해싱 함수
function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

//2. 원본 비밀번호와 해시된 비밀번호과 일치하는지 확인하는 함수
function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword); //같다면 true, 다르다면 false를반환해주는 함수를 정의
}
//사용 예제
//원본 비번을 해싱한 결과
const hashedPassword = hashPassword(originalPassword);
console.log(`hashed password:${hashedPassword}`);
// hashed password:$2b$10$h0a7jEEaUfwzEg9UnWN/SOQLubWsGUz6e8fNvnfZlnMsWzSBPOnI.

//원본 비번과 해시된 비번이 일치하는지
const isMatch = comparePassword(originalPassword, hashedPassword);
console.log('originalPassword===hashedPassword', isMatch);
// originalPassword===hashedPassword true

const isMatch2 = comparePassword('123456', hashedPassword);
console.log('originalPassword===hashedPassword', isMatch2);
// originalPassword===hashedPassword false

// 암호한 데이터를 db에 넣고
// 사용자가 로그인 요청을 할 때
// db에 저장된 비밀번호는 암호화된 비밀번호니까
// 사용자가 입력한 비밀번호도 암호회해서
// db에 저장된 암호화된 비밀번호와 사용자가 입력한 비밀번호를 입력한 비밀번호를 입력한 암호화된 비밀번호를 비교해서 일치하는지 확인해서 로그인 성공/실패를 알려준다.
