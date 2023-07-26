//함수
//:특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합

//용어정리
//-함수 정의:함수를 생성하겠다
//-함수 호출:함수를 사용하겠다(단, 함수 호출은 함수가 정의 되어 있어야 가능하다)

//1.명시적 함수 선언방식
function helloWorld() {
  //return 키워드 생략 가능
  console.log('Hello World!');
}
helloWorld(); //함수 호출-> 9번줄->10번줄의 함수body로 가서 출력됨
function helloWorld2() {
  return 'Hello World!2';
}
//return(반환값):함수 내부(body,block,scope)코드의 "최종 결과값"
//최종 결과값을 저장하고 보관하기 위한 키워드
//return 키워드를 만나면 함수 실행 중단(return 다음에 코드 더이상 작성해도 의미 없다)
console.log(helloWorld()); //Hello World!//🤔undefined(??):console.log()의 return값이 없어서?oo()
console.log(helloWorld2());

//2. 함수 표현식(Function Expression)
//함수를 변수에 저장하는 형태
const helloWorld3 = function () {
  console.log('Hello World!3');
}; //function이름이 없음(익명함수라고함)-> 이 익명함수를 helloWorld3라는 변수에 저장한다.
helloWorld3();
helloWorld3();
helloWorld3();
helloWorld3();
helloWorld3();
//함수는 여러번 호출 가능하다!!
const helloWorld4 = function () {
  return 'hello World!4';
};
helloWorld4(); //콘솔창에 출려되지 않음 그냥 반환값만 나올 뿐임.

//-------------------------------------------
//매개변수가 있는 함수는?
//매개변수가 하나 있는 함수
function hello1(text) {
  return text;
}
console.log(hello1('안녕!!!'));
const apple = '사과는 맛있군';
console.log(hello1(apple));
const myNumber = 8;
console.log(hello1(myNumber));

//매개변수 여러개
function hello2(text, name) {
  //return text+''+name;
  return `${text} ${name}`; //여기서 `(백틱) 주의
}
console.log(hello2('안녕!!', '세은!!'));

function hello3(text, name) {
  //return text+''+name;
  console.log(`${text} ${name}`); //여기서 `(백틱) 주의
}
hello3('안녕!!', '세은!!');

//3.화살표 함수(arrow function)
//함수 선언 문법이 간결함!
//body({})내에서 return 구문만 있을 때 생략이 가능
//코드가 길어진다면 return을 명시해야함
const myFunc1 = (x) => x;
/*
function myFunc1(x){
    return x;
}
*/
const mySum = (a, b) => a + b;
/*
function mySum(a,b){
    return a+b;
}
*/
console.log(mySum(5, 2));

const myMulti = (a, b) => {
  let result = a * b;
  return result;
};
console.log(myMulti(5, 2));

//호이스팅(hosting):"끌어올리다" 사전적 의미->함수와 변수에서
//함수에서는 "함수선언(생성)문"이 호이스팅 대상이 됨
//코드가 실행되기 전에 함수선언을 최상단으로 끌어올리는 현상
//참고)변수에서는 "var"가 호이스팅의 대상임(let,const는 호이스팅 되지 않음 먼저 선언되지 않으면 쓸 수 없다는 거??)
myHello(); //함수 호출을 함수정의보다 먼저 했음 그런데도 컴파일 오류없이 잘 실행된다??-> 함수선언문이 자동으로 호이스팅 되었기 때문
function myHello() {
  console.log('hello~~~');
}

//함수 표현식(변수에 함수가 할당되는 형태)
//-호이스팅의 대상이 될 수 없음
//-함수 선언부보다 호출부가 먼저 나올 수 없음
/*myHello2();//error
const myHello2()=function(){
    console.log('hello~~~~~~2');
}*/

//javascript 함수 실습(1)
function multifly(n1, n2) {
  return n1 * n2;
}
console.log(multifly(3, 7));
console.log(multifly(2, 2));

//javascript 함수 실습(2)
function square(num) {
  console.log(num ** 2);
}
square(4);
square(11);
square(5);
