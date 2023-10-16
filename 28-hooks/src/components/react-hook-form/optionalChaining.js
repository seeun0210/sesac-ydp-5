// optional chaining(옵셔널 체이닝)
const user = {};
const user2 = { name: 'sean' };
console.log(user); //{}
console.log(user && user.name); //undefined
console.log(user?.name); //undefined
console.log(user2?.name); //sean =>user2가 빈값이 아니면 name을 출력하라는 말
// 옵셔널 체이닝은 존재하지 않아도 되는 대상에게만 적용(남용금지)
