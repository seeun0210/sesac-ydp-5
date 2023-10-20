// only typescript type

import { isTypeOnlyImportDeclaration } from 'typescript';

// Tuple
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';
console.log(drink);
// tuple은 배열의 length를 정해놓고 시작한거임
// tuple 쓸거면 drink.push('얏호') 이런거 하지말것!!(언어적으로 동작은 함)=>튜플을 쓰는 의미가 없어짐

// readonly: 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push('얏호') //error: readonly로 고정하면 push 못함

// 튜플은 언제쓰는가? 배열을 명확하고 엄격하게 관리해야 할 떄
// ex)

type productInfo = [number, string, number]; //type 별칭으로 type 선언
let product1: productInfo = [1, '로지텍 MX master3', 1300000];
let product2: productInfo = [2, '로지텍 K380', 52000];
// let product2: [number, string, number] = [2, '로지텍 K380', 'Apple']; //type error

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}
enum Cafe {
  americano = '아메리카노',
  latte = '라뗴',
}
console.log(Auth.admin);
console.log(Cafe.americano);

enum Cake {
  choco,
  vanilla,
  kiwi = '키위케이크',
}
console.log(Cake.choco); //0
console.log(Cake.kiwi); //키위케이크

//////////////////////////////////
// any
// 명시적으로
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sesac' };
// 암묵적으로
let val2;
val2 = false;
val2 = '바이';
//객체 안의 value도 자료형을 선언할 수 있나요? => 네 지금은 그냥 object로 자료를 선언하는데 type 별칭을 이용하면 key, value도 명확하게 지정할 수 있어용
// [practice]
type gametype = { name: string; type: string };
type Info = readonly [gametype, boolean];
let olympic_newgame: Info = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];
// olympic_newgame[1] = false; //error
// olympic_newgame[0].name = 1; //error

//////////////////////////////
// type & interface
// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
  // addr: string;
}
const student1: Student = {
  name: 'jinheyong',
  isPassed: true,
  // addr: 'seoul', // Student라는 인터페이스에는 addr이라는 키값이 없기 때문에 error=>interface Student에서 addr:string을 넣어줘야 함
};
const student2: object = {
  name: 'jinheyong',
  isPassed: true,
  addr: 'seoul',
};

// interface 상속
// A+,A,B,C,D,F:grade의 value를 제한하고 싶다...
// type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; //backNumber라는 키는 있어도 되고 없어도 됨!! '?:'
  // backNumber는 변경 불가능한 값이 됨
  [grade: number]: Score;
}
const ontani: BaseballClub = {
  name: 'ontani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  backNumber: 17,
  // 1: 'A+', // 학년:점수
  1: Score.A,
  // Score를 Enum으로 정의했다면 Score에 대해서 키값으로 접근해야함
  // 2: 'NP', //error
};
console.log(ontani);
ontani.position = '투수';
ontani['height'] = 200;
console.log(ontani);
// ontani.backNumber = 16;
//error : backNumber는 아까전에 BaseballClub interface 만들때 변경할 수 없게 key 값 앞에 readonly 속성을 붙여주었기 때문

///////////////////////
// type vs Enum
type BreakPoint = 500 | 700 | 1000;

enum BreakPoint2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}
const width1: BreakPoint = 500;
const width2: BreakPoint2 = BreakPoint2.SM;
// type:간단하게 정의할 때
// enum: 키값들 사이에 관계가 있을 때

// 교차타입: 두개 이상의 타입을 합치는 것

interface Toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
}
type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발~~');
  },
  color: 'blue',
  price: 5000,
};
console.log(toyCar);

// type
type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[]; // 원소가 문자열인 배열, like는 있어도 되고 없어도 됨(?:)
  gender: Gender;
};
let daniel: Person = {
  name: 'daniel',
  age: 20,
  gender: 'F', //Gender 타입에 선언된 F나 M만 넣을 수 있음
  like: ['minji', 'hani'],
};
// console.log(daniel.like[0]);

// [practice]
type Category = '액션' | '롤플레잉';
type Platform = '모바일' | '웹';
interface Game {
  title: string;
  price: number;
  desc?: string;
  platform: Platform;
  category: Category;
}
