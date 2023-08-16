//Promise(프로미스)
//-비동기 함수를 동기처리하기 위해 만든 객체
//-미래에 실패/성공에 대한 결과 값을 "약속"한다는 의미
//-성공, 실패 분리해서 반환
//  -성공, 실패에 대한 경과는 then, catch 메서드로 이어 받아서 처리 가능
//=>성공이든 실패든 무언가의 "최종 결과"
//resolved:성공
//rejected:실패
//콜백함수(함수에 대한 정의가 필요했음)와 달리 promise는 그냥 호출하면 된다.
/*
//1.promise를 생성하는 코드
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `promise 상태는 fulfilled!!! then으로 연결됩니다.\n 이때의 flag가 ${flag}입니다.`
      );
    } else {
      reject(
        `promise 상태는 rejected!!! catch로 연결됩니다. \n 이때의 flag값은 ${flag}입니다.`
      );
    }
  });
}
//2.promise를 사용(소비)하는 코드
promise1(false)
  //   .then(function (result) {
  //promise는 then이나 catch로 연결된다.
  //여기에서 result는  resolve와 연결됨
  // console.log(result);
  //화살표 함수 사용 가능
  .then((result) => console.log(result))

  .catch(function (error) {
    console.log(error);
    //여기에서 error은 reject와 연결됨
  });
*/
///////////////////////////////////
//2.promise예제
//index.js에서 "콜백함수"를 이용해 동기처리 한 것을 "promise"를 이용해 동기처리
/*
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

      if (price <= 2000) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명:${product},가격:${price}`);
}
function nopay() {
  console.log('금액부족');
}

let product;
let price;
goMart();
pickDrink().then(pay).catch(nopay);
*/
////////////////////////////////////
//3.프로미스 체이닝(chaining)
//함수를 이용해 (4+3)*2-1=13을 연산해보자!
//sub(mul(add(4,3),2),1):add->mul->sub

//case1. 콜백함수로 처리한다면?
/*
function add(n1, n2, callback) {
  setTimeout(function () {
    const result = n1 + n2;
    callback(result);
  }, 1000);
}
function mul(n3, callback) {
  setTimeout(function () {
    const result = n3 * 2;
    callback(result);
  }, 700);
}
function sub(n4, callback) {
  setTimeout(function () {
    const result = n4 - 1;
    callback(result);
  }, 500);
}

add(4, 3, function (x) {
  console.log('1: ', x);
  mul(x, function (y) {
    console.log('2: ', y);
    sub(y, function (z) {
      console.log('3: ', z);
    });
  });
});
*/
//case2. 프로미스 체이닝 적용!
//promise 생성
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}
function mul(n3) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n3 * 2;
      //의도적 error만들기
      reject(new Error('의도적으로 발생시킨 에러!!!'));
    });
  }, 700);
}
function sub(n4) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n4 - 1;
      resolve(result);
    });
  }, 500);
}
//promise사용
add(4, 3)
  .then(function (result) {
    console.log('1: ', result); //7
    return mul(result); //메서드 체이닝 할때는 반드시 return!!!!!
    //mul에서 만든 에러가 여기서 사용되어서
  })
  .then(function (result) {
    console.log('2: ', result); //14
    return sub(result);
  })
  .then(function (result) {
    console.log('3: ', result); //1
  })
  .catch(function (err) {
    //그 에러가 여기로 바로 받아줌
    console.log('실패!');
    console.log(err);
  });
