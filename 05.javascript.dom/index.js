// pass by value
//: 원시 타입은 값이 복사되어 전달
let num = 1;
let num2 = num;
console.log(num, num2); //1 1
console.log(num === num2); //true

num = 5;
console.log(num, num2); //5 1
console.log(num === num2); //false

//pass by reference
// : 참조 타입은 주소값이 복사되어 전달
const arr = [1, 2];
arr.push(3);
console.log(arr); //const는 상수인데 왜 추가가 되지? 배열은 주소값을 참조하는 것이기 떄문

const obj = { one: 1, two: 2 };
//obj = { hi: 'hi' }; //주소값을 재할당 하게 되므로 const문법에서 어긋남
const obj2 = obj;
console.log(obj, obj2);
console.log(obj === obj2);

obj.five = 5; //obj={one:1, two:2, five:5}이렇게 five:5가 추가됨
console.log(obj, obj2);
console.log(obj === obj2); //obj와 obj2는 같은 데이터&참조값(주소)도 같음

///
const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4);
console.log(obj3 === obj4); //false
//why? obj3와 obj4는 현재 같은 데이터를 갖지만, 서로 다른 별도의 객체
//즉, 참조값(address,주소)가 다르다!!

obj3.five = 5; //obj에 five:5가 추가되지만 obj4에는 추가되지 않는다
console.log(obj3, obj4);
console.log(obj3 === obj4); //false

//////
const arr1 = [1, 2];
const arr2 = arr1; //arr2는 arr1과 같은 주소값
console.log(arr1 === arr2);
arr1.push(3);
console.log(arr2);
console.log(arr1 === arr2);

//object literal(객체 리터럴),(=파이썬 dictionary)
//key-value쌍으로 이루어진 데이터구조

//js에서 객체는 여러가지 의미를 가짐

//typeof[]->object, typeof{}->object
//이때의 객체는 광범위한 의미의 "객체"

//=======================================
console.clear(); //위에뜨는 콘솔창 클리어!

//js 표준 내장 객체
//1. Date 객체: 시간, 날짜
//날짜를 생성하여 저장
let now = new Date(); //현재 일시
console.log(now); //코드가 실행된 순간이 콘솔창에 찍힘

//타임스탬프(timestamp)
//: 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
//일자와 일자간의 차이를 계산
//new Date(timestamp)
let jan_01_01 = new Date(0);
console.log(jan_01_01);
let jan_02_01 = new Date(24 * 3600 * 1000);
console.log(jan_02_01);

let date1 = new Date('2023-7-17');
console.log(date1); //Mon Jul 17 2023 00:00:00 GMT+0900 (한국 표준시)
let date2 = new Date('2023', '06', '17'); //1월이 0부터 시작함 따라서 7월을 의미하고 싶다면 '06'으로!
console.log(date2); //Mon Jul 17 2023 00:00:00 GMT+0900 (한국 표준시)

//관련 매서드
console.table(date1.getFullYear());
console.table(date1.getMonth()); //⚠️0~11주의
console.table(date1.getDate());
console.table(date1.getHours());
console.table(date1.getMinutes());
console.table(date1.getSeconds());
console.table(date1.getMilliseconds());
console.table(date1.getDay()); //⚠️0(sun)~6(sat)

//퀴즈
let today = new Date();
today.getDay();

switch (today.getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('평일입니다');
    break;
  case 0:
  case 6:
    console.log('주말입니다');
    break;
}

console.clear();
//=================
//math 객체
//수학적인 상수와 함수

//속성
console.log(Math.E); //자연로그
console.log(Math.PI); //파이
console.log(Math.SQRT2); //2의 제곱근

//매서드
console.log(Math.min(100, -2, 0, 5)); //최솟값
console.log(Math.max(100, -2, 0, 5)); //최댓값
console.log(Math.round(5.12345)); //반올림
console.log(Math.ceil(5.12345)); //올림
console.log(Math.floor(5.12345)); //내림
console.log(Math.random()); //0<=x<1의 난수

//Math.random()응용 예시
//0~9
console.log(Math.floor(Math.random() * 10)); //0에서 9사이의 랜덤한 숫자 출력

//0~11
console.log(Math.floor(Math.random() * 11));

//퀴즈
//1~100
console.log(Math.ceil(Math.random() * 100));

//20~22
console.log(Math.floor(Math.random() * 3 + 20)); //숫자 3개가 나와야하니까 3을 먼저 곱하고 시작하는 수를 더해줌
