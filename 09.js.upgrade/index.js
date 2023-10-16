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
  //->얘가 모으는 역할
  //rest는 a에 할당되고 남은 배열의 원소들을 하나의 배열로 다시 묶어버림 그래서 20,30이 배열로 찍힘
  console.log('a>>', a); //10
  console.log('rest>>', rest); //[ 20, 30 ]
}
get(...values); //values를 펼쳐서 10,20,30넣음 ->얘가 펼치는 역할

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
console.log(one1); //1
console.log(two1); //2
console.log(rest2); //[ 3, 4, 5, 6, 7, 8 ]구조분해 할당되고 남은 배열의 원소들은 rest2가 새로운 배열로 다시 묶음

console.clear();

/////////////////////
//클래스
//:객체 생성 템플릿=> 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체를 만들어보자!

/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/

//클래스 정의(틀을 만듦)
class House {
  //생성자 함수: 클래스를 이용해 객체를 만들떄마다 객체들이 갖고 있는 기본 속성들을 초기화시키는 역할
  constructor(year, name, window) {
    //이 constructor()라는 생성자 함수는 이름을 바꿀 수 없다..하우스라는 객체를 만들떄마다 year, name, window라는 속성을 이용해 만들겠다는거임
    this.year = year; //여기에서 this는 House라는 클래스에서 year가 필요한데 construct의 매개변수에서 year를 받아오겠다는 거임
    this.name = name;
    this.window = window;
  }
  //메서드 1:집의 나이 출력
  getAge() {
    console.log(`${this.name}는 건축한지 ${2023 - this.year}년 되었습니다.`);
  }
  //메서드2: 집의 창문 개수 출력
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
  }
}

//위에서 만든 클래스를 이용해 객체를 만들어보자
const house1 = new House(2021, 'ipark', 1);
console.log(house1, typeof house1); //House { year: 2021, name: 'ipark', window: 1 } object
//객체니까 keyvalue접근 가능
console.log(house1.year);
console.log(house1.name);
console.log(house1.window);

//House객체는 매서드도 갖고 있음
house1.getAge();
house1.getWindow();

const house2 = new House(2007, 'Xi', 10);
console.log(house2);
house2.getAge();

class Shape {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  getArea() {
    return this.row * this.col;
  }
}
let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

//클래스 상속
//부모 클래스가 House
//자식 클래스가 Apartments
class Apartments extends House {
  constructor(year, name, window, floor, windowMaker) {
    //부모 객체에서 상속 받아옴=상속한 부모 클래스의 생성자를 호출
    //year,name,window는 부모클래스에 있던건데 그대로 쓰고싶음
    super(year, name, window);
    //floor,windowMaker는 Apartments에만 있는 속성
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo() {
    return `${this.year}에 지어진 ${this.name}아파트의 총 층수는 ${this.floor}이며, 창문의 개수는 ${this.window}`; //문자열로 return
  }
  //오버라이딩(overriding)
  //부모클래스에 정의 되어 있는 메서드의 이름을 동일하게 사용하되, 다른 내용
  //=>이떄 자식클래스에서 새롭게 정의한 내용대로 메서드가 실행됨,즉 부모클래스의 메서드가 아니라 자식클래스의 매서드가 실해되는 거임
  getWindow() {
    return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker}회사에서 생산되었습니다.`;
  }
}

const apt1 = new Apartments(2022, '래미안', 3, 20, 'kcc');
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());
apt1.getAge(); //부모클래스에서 정의한것 매서드도 따로 자식클래스에서 정의하지 않아도 사용할 수 있음.

//실습.클래스 상속(선택)
class Rectangle extends Shape {
  constructor(row, col) {
    super(row, col);
  }
  getArea() {
    return this.row * this.col;
  }
  getCrossLength() {
    return Math.sqrt(this.getArea());
  }
}
class Triangle extends Shape {
  constructor(row, col) {
    super(row, col);
  }
  getAreaTriangle() {
    return (this.row * this.col) / 2;
  }
}
class Circle extends Shape {
  constructor(row, col, radius) {
    super(row, col);
    this.radius = radius;
  }
  getArea() {
    return (this.radius * this.radius * 3.14) / 2;
  }
}
const rec2 = new Rectangle(3, 4);
console.log(rec2.getArea()); //12
console.log(rec2.getCrossLength()); //3.4641016151377544
const tri1 = new Triangle(3, 4);
console.log(tri1.getAreaTriangle()); //6
const r1 = new Circle(3, 4, 3);
console.log(r1.getArea()); //14.13

///////////////////////////////
// 단축 평가
// &&, ||

// A && B: 두개의 피연산자 모두 True이면 True반환
// A || B : 두개의 피연산자 중에서 하나만 True여도 True를 반환

console.log(true && true); //true
console.log(true && false); //false

console.log(true || false); //true
console.log(false || false); //false

const xx = 5;
const yy = 7;

//삼항연산자 예시
const result1 = xx > yy ? 'xx가 큼' : 'yy가 큼';
console.log(result1); //xx가 큼

//단축평가 (&&,논리곱)
const result2 = xx > yy && 'xx가 큼'; // xx > yy의 결과가 false니까 뒤에껀 볼 것도 없이 false임
console.log(result2);
const result3 = xx < yy && 'yy가 큼'; //yy가 큼
console.log(result3);

// 단축평가(||,논리 합)->default value를 설정할 때 많이 사용함
const result4 = xx || 100; //xx가 true니까 바로 5를 출력함
console.log(result4);

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름없음'); //홍길동
console.log(nameEx2 || '이름없음'); //nameEx2는 null이니까 뒤에 '이름없음'까지 봄
