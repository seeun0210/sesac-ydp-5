/*
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}
function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('callback hell');
    }, 1000);
  });
}

async function exec() {
  let user = await call('kim');
  console.log(user + '님 환영합니다.');
  let ba = await back();
  console.log(ba + '을 실행했구나');
  let hello = await hell();
  console.log('여기는 ' + hello);
}

exec();
*/
setTimeout(function () {
  const bodyColor = document.body;
  bodyColor.style.background = 'red';
  setTimeout(function () {
    bodyColor.style.background = 'orange';
    setTimeout(function () {
      bodyColor.style.background = 'yellow';
      setTimeout(function () {
        bodyColor.style.background = 'green';
        setTimeout(function () {
          bodyColor.style.background = 'blue';
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
