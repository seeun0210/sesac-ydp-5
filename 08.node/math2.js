//math2 module(모듈은 파일 단위로-> 이 파일 하나가 하나의 모듈이 되는거임)
//자주 사용할 함수와 변수를 정의한 파일
//add 더하기 함수를 정의한 파일

const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    console.log('b는 0이 될 수 없다!');
  }
};
//add라는 함수를 다른 js파일에서 쓸 수 있도록 내보내기
//exports는 하나만 할 수 있어서 객체로 묶어서 내보낸 것!

//case1. 객체로 감싸서 내보내기
/*
module.exports = {
  add, //add:add,
  PI, //PI:PI,
  E, //E:E,
  sub,
  mul,
  div,
  //obj에서 key와 value가 동일할 때 생략 가능(효율성!)
};
*/
//case2. 하나씩 내보내기(똑같이 모듈이 객체로 출력됨)
module.exports.add = add;
module.exports.E = E;
module.exports.PI = PI;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;

//case3.case2를 더 간단히!!
exports.add = add;
exports.E = E;
exports.PI = PI;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
