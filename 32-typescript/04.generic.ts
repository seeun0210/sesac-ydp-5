// generic
// 선언할 때 타입을 지정하기 어려운 케이스가 존재
// =데이터 타입을 외부에서 지정
// =생성 시점에 타입을 명시
// =>"재사용성 증가"
// ==>타입을 변수처럽 사용한다!!
// <T> 형태로 주로 사용

function numArrLen(arr: number[]): number {
  return arr.length;
}
function strArrLen(arr: string[]): number {
  return arr.length;
}
console.log(numArrLen([1, 2, 3])); //3
console.log(strArrLen(['1', '2', '3', '4'])); //4

// generic을 사용해보자!
// <T>를 애용해서 매개변수를 선언하는 공간을 하나 더 만듦!
// ->type만 올 수 있음.
function arrLen<T>(arr: T[]): number {
  return arr.length;
}
console.log(arrLen<string>(['1', '2', '3', '4'])); //4
console.log(arrLen<number>([1, 2, 3])); //3
console.log(arrLen<string | number>(['원', 2])); //2

/////////////////////////////////////////////
function printSome<T>(a: T, b: T): void {
  console.log(a, b);
}
printSome<string>('hi', 'hello');
printSome<number>(100, 200);
printSome<boolean[]>([true, false], [false, false]);
// T:type
// U:usually
function printSome2<T, U>(x: T | U, y: T | U) {
  console.log(x, y);
}
printSome2<string, number>('1', 1);
/////////////////////
// interface와 generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}
type iphoneOption = {
  color: string;
  storage: number;
};
const iphone15: Phone<iphoneOption> = {
  company: 'apple',
  createAt: new Date('2023-10-05'),
  option: {
    color: 'black',
    storage: 128,
  },
};
console.log(iphone15);

type galaxyOption = {
  color: string;
  isBuz: boolean;
};
const galaxy23: Phone<galaxyOption> = {
  company: 'samsung',
  createAt: new Date('2023-10-05'),
  option: {
    color: 'blue',
    isBuz: true,
  },
};
console.log(galaxy23);
