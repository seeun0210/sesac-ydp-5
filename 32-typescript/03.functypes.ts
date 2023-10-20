function print(a: number, b: number, c?: number): void {
  //return값이 없으므로 void
  //   선택적 매개변수("?:")의 경우 매개변수들 중 가장 뒤에 위치해야한다
  console.log('print()출력 결과');
  console.log(a);
  console.log(b);
  console.log(c);
}
print(2, 4, 6);
print(2, 4);

function print2(a: number, b: number, c = 100): void {
  // c 값에 default값으로 100을 넣으면 type추론으로 number가 들어감
  // c의 값이 지정되지 않으면 100이 들어감
  console.log('print2()출력 결과');
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(2, 4, 6);
print2(2, 4);

// 매개변수가 없는 함수
function sayHello(): void {
  console.log('Hello~');
}
sayHello();

function sayHello2(): string {
  return 'Hello~~';
}
console.log(sayHello2());

function concatString(x: string, y: string): string {
  return x + y;
}
console.log(concatString('안녕', '하세요'));

function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(5));

// 화살표 함수
const squareArea = (x: number, y: number): number => {
  return x * y;
};
console.log(squareArea(3, 5));
// 화살표 함수&return 구문 생략
const triangleArea = (w: string, h: string): number =>
  (parseInt(w, 10) * parseInt(h, 10)) / 2;
console.log(triangleArea('3', '4'));

// interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}
const sesac: Greet = {
  name: 'sesac',
  hi() {
    return '여기는' + this.name + '영등포 캠퍼스';
  },
  bye(a: number) {
    return `작별인사를 ${a}번 했습니다`;
  },
};
console.log(sesac.hi());
console.log(sesac.bye(5));

// never
// :함수의 끝에 절대 도달하지 않는 경우에 사용하는 타입
function goingOn(): never {
  while (true) {
    console.log('go!');
  }
}
// goingOn(); //무한 루프에 빠져 함수의 끝에 도달할 수 없음!

// 오버라이딩(JS) vs 오버로딩(TS)
// 1.오버라이딩(overriding.js참고)
// -class에서 "상속"할때 쓰이는 개념 > 하위 클래스가 상위 클래스를 메소드를 상속받을 때 같은 이름의 함수(메서드)를 재정의하는 방법
// 2.오버로딩(overloading)
// -함수의 이름은 같지만, 매개변수 or 반환타입이 다른 여러 함수들을 가질 수 있음.

// typescript 오버로딩
// -선언부:매개변수의 타입과 반환타입만 지정
// -구현부:실제 함수의 구현(function body)
// =>"함수 이름 동일"
function sum(a: string | number, b: string): string; //선언부
function sum(a: number, b: number): number; //선언부
// function sum(a: number, b: string): string;
// 이렇게 타입이 다르지만 역할은 같은 경우 함수 이름을 따로 따로 써야하는데 (sumString, sumNumber)이런식으로
// overloading을 하면 그렇게 하지 않아도 됨
function sum(a: any, b: any): any {
  return a + b;
}
console.log(sum(1, '1'));
console.log(sum(1, 1)); //2
console.log(sum('1', '1')); //11
