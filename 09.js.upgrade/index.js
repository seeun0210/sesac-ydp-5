//구조 분해 할당
//1.배열구조분해할당
//-배열 구조분해 할당시 "순서"중요

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1; //여기에서 변수 이름은 자유롭게! 중요한건 순서임!!
console.log(one, two, three, four, five);
const [A, B, C, D, E, F] = arr1;
console.log(A, B, C, D, E, F); //F에는 아무것도 할당되지않아서 undefined가 됨

let x = 1;
let y = 3;
console.log('swap전', x, y);
//x와 y의 값을 서로 바꾸고 싶을 떄(swap)
[x, y] = [y, x];
console.log('swap후', x, y);

const list = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = list; //여기에서 f3에는 list원소가 2개뿐이라 아무것도 원래 들어가지 않지만 바로 orange를 할당해서 넣어줄 수도 있음
console.log(f1, f2, f3);

//2. 객체 구조분해할당
//-변수를 선언하는 순서는 중요하지 않음
//-키 이름과 변수명이 일치해야한다
const obj = {
  title: 'elemental',
  content: 'fun',
  num: 5,
};
console.log(obj.title, obj.content, obj.num);
//대괄호를 통해서도 객체의 keyvalue에 접근 가능
console.log(obj['title'], obj['content'], obj['num']);

const { title, num, content, star = '⭐' } = obj; //key가 존재하지 않을 때를 대비하여 =연산자를 이용하면 default값을 할당가능
console.log(title, content, num);

const { n1, n2, n3 } = obj;
console.log(n1, n2, n3); //=>셋 다 undefined가 뜸 왜냐면 obj에 n1,n2,n3라는 keyname이 없기 떄문

//t1,t2,t3라는 객체에 정의되어 있는 keyname이 아닌 새로운 변수명을 쓰고 싶다면
const { title: t1, content: t2, num: t3 } = obj;
console.log(t1, t2, t3);

function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture; //lecture가 이 함수의 매개변수임

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part}개발을 공부합니다. 수업의 리더는 ${leader}입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

console.clear();

/////////////
//...연산자
//반복 가능한 객체에 대해서 단일 요소로 압출을 해제하는 역할 (==객체의 값을 펼친다!!)

//spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b]; //[ 1, 2, 3, 4, 5 ]=>a배열과 b배열의 원소를 풀어서 spread배열에 저장함
console.log(spread);

//spread in string
const c = [...'HELLO']; //[ 'H', 'E', 'L', 'L', 'O' ]찢어준다..
//문자열 내장 메서드와 비교
const d = 'HELLO'.split('');
console.log('c', c);
console.log('d', d);

//spread in object
const chip = {
  base: 'chip',
  company: 'lotte',
};
const potatoChip = {
  base: 'chip',
  company: 'lotte',
  flavor: 'potato',
};
const sweetpotatoChip = {
  //base:'chip',
  //company:'lotte',
  ...chip, //지금 base와 company가 계속 반복되고 있음 base와 company는 지금  chip이라는 객체에 저장되어있는거임 그래서 chip객체를 스프레드 연산자를 통해서 펼치면 됨
  flavor: 'sweet potato',
};
console.log(sweetpotatoChip);

//실습 두개의 문자열을 합쳐서 배열로 만들기
const word1 = 'abc';
const word2 = 'xyz';
const word3 = [...word1, ...word2];
console.log(word3);

//rest 파라미터
//1.함수에서 rest를 사용할 때 함수의 매개변수들 중 가장 마지막에 와야함
const values = [10, 20, 30];

function get(a, ...rest) {
  //rest는 a에 할당되고 남은 배열의 원소들을 하나의 배열로 다시 묶어버림 그래서 20,30이 배열로 찍힘
  console.log('a>>', a); //10
  console.log('rest>>', rest); //[ 20, 30 ]
}
get(...values); //values를 펼쳐서 10,20,30넣음

//2. 객체에서 rest
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor, rest); //choco { company: 'lotte', price: 1000 }
//초코를 flavor의 keyvalue로 꺼내오고 ,rest파라미터가 남은 company와 price는 다시 객체로 묶어버림

//3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1);
console.log(two1);
console.log(rest2);
