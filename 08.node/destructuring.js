//구조 분해 할당: 구주를 분해해서 할당(=연산자)하겠다!
//1. 객체 ({})를 구조분해
const cookie = {
  choco: '초코맛 쿠키',
  vanilla: '바닐라맛 쿠키',
  orange: '오렌지맛 쿠키',
};
console.log(cookie.choco);
console.log(cookie.vanilla);
console.log(cookie.orange);
//계속 cookie.~~해줘야함 귀찮음

//객체 구조분해 해보자!
//const { chocolate, vanilla, orange } = cookie;
//const { choco, vanilla, orange } = cookie;//key값으로 객체의 keyvalue에 접근(순서가 바뀌어도 상관 없음. key값만 일치하면 됨)
const { vanilla, choco, orange } = cookie; //(순서가 바뀌어도 상관 없음. key값만 일치하면 됨)
console.log(choco);
//console.log(chocolate); //이름이 달라지면 구조분해 할당이 되지 않아 undefined가 된다.
console.log(vanilla);
console.log(orange);

//2. 배열([])을 구조분해
