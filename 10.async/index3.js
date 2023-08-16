/*
async function f1() {
  return 1;
}
async function f2() {
  return Promise.resolve(1);
}
console.log(f1()); //Promise { 1 }: async가 붙은 함수(f1())는 Promise를 반환
/*
console.log(
  f1().then(function (result) {
    console.log(result);
  })
);
*/
//Promise { <pending> }
//1
/*
console.log(f2());
//Promise { <pending> }: 여기에서 <pending>은 promise의 반환상태 3가지 중에서 대기상태를 의미함
f2().then(function (result) {
  console.log(result);
});
*/

//////////////////////////
//async-await
//async: 함수 앞에 붙이는 키워드
//-함수만 보고도 비동기 함수임을 유츄하고자 함
//-프로미스 객체를 반환

//await:기다리다
//-성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
//-await 뒤에는 프로미스가 오게 됨
//-**async키워드를 사용한 함수 안에서만 await 키워드를 사용가능

/*
//async/await는 세트->같이 써야 함!!!
// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ['사과', '레몬', '수박'];
      //resolve(fruits);
      reject(new Error('알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!'));
    }, 1000);
  });
}

//1)promise then() 메서드 사용
fetchFruits()
  .then(function (f) {
    console.log(f);
  })
  .catch(function (err) {
    console.log(err);
  });

//2)async-await키워드 사용시
//에러 처리는 try-catch구문으로 하게 됨
async function printItems() {
  try {
    const fruits = await fetchFruits(); //fetchfruits함수의 실행을 기다려서 fruits에 저장해서
    console.log(fruits); //출력
  } catch (error) {
    console.log(error);
  }
}
printItems();
*/

function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다');
}
function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝!');
      product = '제로콜라';
      price = 3000;
      //resolve();
      //resolve안에 아무것도 없으면

      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명:${product},가격:${price}`);
}

async function exec() {
  goMart();
  await pickDrink();
  pay();
}

let product;
let price;
exec();
