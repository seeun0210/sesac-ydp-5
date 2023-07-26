//조건문

//if문
/*if (5 > 3) {
  console.log('얍!');
} //조건이 참이기때문에 얍!이 출력됨

let number = Number(prompt('숫자를 입력해 주세요!')); //prompt로 사용자로 부터 입력받은 값은 문자열로 저장됨->Number를 사용해서 형변환 시켜줌

/*if (number > 10) {
  console.log('입력한 수는 10보다 크군요!');
} else {
  console.log('입력한 수는 10보다 작거나 같군요!');
}*/

/*if (number > 10) {
  console.log('입력한 수는 10보다 크군요!');
} else if (number === 10) {
  console.log('입력한 수는 10이군요!');
} else {
  console.log('입력한 수는 10보다 작군요!');
}

if (number % 2 == 0) {
  console.log('짝수입니다!');
} else {
  console.log('홀수입니다!');
}

if (number > 100 || number < 0) {
  console.log('입력값이 잘못되었습니다. 숫자의 범위는 0~100까지 입니다');
} else if (number >= 90) {
  console.log('A');
} else if (number >= 80) {
  console.log('B');
} else if (number >= 70) {
  console.log('C');
} else if (number >= 60) {
  console.log('D');
} else {
  console.log('F');
}

//if문 실습
/*let age = Number(prompt('나이를 입력해주세요'));
if (age >= 20) {
  console.log('성인');
} else if (age >= 17) {
  console.log('고등학생');
} else if (age >= 14) {
  console.log('중학생');
} else if (age >= 8) {
  console.log('초등학생');
} else if (age >= 0) {
  console.log('유아');
} else {
  console.log('나이를 다시 입력하세요.');
}*/

//중첩 if문
/*
let userId = 'user01';
let userPw = '1234';

//아이디,비밀번호를 겁사하는 함수
function loginUser() {
  let inputId = prompt('아아디 입력');
  let inputPw = prompt('비밀번호 입력');

  //userId와 inputId가 같다면 inputPw와 userPw를 비교
  //inputId에 빈 값을 입력했다면 '아이디 입력 안함'문구 반환
  //두 경우가 아니라면 (input아이다가 틀릴경우) '아이디 틀림'문구 반환
  if (inputId === userId) {

    if (inputPw === userPw) {
      return '로그인 성공';
    } else {
      return '비밀번호를 다시 입력하세요!';
    }
  } else if (inputId === '') {
    return '아이디 입력 안함';
  } else {
    return '입력하신 아이디가 존재하지 않습니다';
  }
}
const result = loginUser(); //함수의 반환값을 result변수에 저장하고
alert(result); //result변수에 저장된 값을 창을 통해서 뜨게 함
*/

//switch-case문
//-하나 이상의 case문으로 구성
//-default가 필수는 아니지만, 쓰길 권장한다.
//break: 조건을 빠져나갈 때 사용하는 키워드

/*
let a = 3;

switch (a) {
  case 1:
  case 2:
  case 3: //if(a===3)자료형까지 일치해야함!!
    console.log('a가 1~3이군요!'); //if (a===1||a===2||a===3)일 떄 실행됨
    break;
  case 4:
    console.log('a가 4이군요!');
    break;
  case 5:
    console.log('a가 5이군요!');
    break;
  default:
    console.log('a가 무슨 값인지 모르겠습니다!');
    break;
}
*/

//학점 계산기를 switch-case문으로 바꿔보자
/*
let score = parseInt(Number(prompt('점수를 입력하세요!')) / 10);
switch (score) {
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
    case 6: 
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}
*/

//삼항연산자
let num = 4;
num % 2 === 0 ? console.log('짝수') : console.log('홀수');
if (num % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}

//실습 지금은 오전? 오후?
let now = new Date().getHours();
console.log(now);

now >= 12 ? console.log('오후') : console.log('오전');
