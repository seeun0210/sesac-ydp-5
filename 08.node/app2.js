/*
const math = require('./math2'); //math2모듈 불러오기-> 불러와서 math로 객체 선언을 함
//여기서 선언한 math는 객체임
//그래서 math안의 keyvalue를 뺴오려면 math.~~이런식으로 뺴와야함!!!!



console.log(math, typeof math);
/*
{
    add: [Function: add],
    PI: 3.141592,
    E: 2.718,
    sub: [Function: sub],
    mul: [Function: mul],
    div: [Function: div]
  } 
  object
  */
/*
console.log(math.PI); //3.141592
console.log(math.E); //2.718
console.log(math.div(math.add(5, 4), 3)); //math.~~해줘야함..
*/
//매번 math.~~하기 귀찮으니까 구조분해
const { add, PI, E, sub, div, mul } = require('./math2');

console.log(add(5, 4)); //math.add(,)안해도 됨

const helloadd = require('./math'); //math모듈은 하나만 내보낸 모듈이라서 이름이 달려져도 됨
console.log(helloadd(5, 4)); //잘 실행되는 것을 볼 수 있음
