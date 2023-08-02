console.log(document); //js
console.log($(document)); //jquery

//1. Load Event
// in js
document.addEventListener('DOMContentLoaded', function () {
  console.log('문서의 dom 트리가 완성되면 실행되는 이벤트!');
});

//in jquery
$(document).ready(function () {
  console.log('ready-문서 dom 트리가 완성되면 실행되는 이벤트!');
});
$(function () {
  console.log('안녕?');
});

//2.Mouse Event
// click이벤트
$('.p-msg').click(function () {
  $('.p-msg').css('color', 'red');
});

//클릭이벤트 첫번째 방법
/*$('.num').click(function () {
  //   $('.num').css('color', 'blue');//li목록들 전체 다 파란색으로 변함
  // 클릭한 애만 바뀌게 하려면?
  $(this).css('color', 'blue');
  //$(this):자기자신=이번트가 적용된 요소
});*/
//==클릭 이벤트 두번째 방법
/*$('.num').on('click', function () {
  $(this).css('color', 'blue');
});*/

// click in js
const nums = document.querySelectorAll('.num'); //nums는 유사배열
//console.log('nums', nums);
for (let num of nums) {
  //console.log('num', num);
  num.addEventListener('click', function () {
    console.log(this); //자기자신=현재 클릭된 요소
    this.style.color = 'blue';
  });
}

//mouseover();요소에 마우스를 올렸을 떄
/*
$('.numbers').on('mouseover', function () {
  $(this).css('background-color', 'skyblue');
  $(this).append('<div>handler for .on() called!!</div>');
});
*/
//위에꺼랑 같은거
/*
$('.numbers').mouseover(function () {
  $(this).css('background-color', 'skyblue');
  $(this).append('<div>handler for .on() called!!</div>');
});
*/

//hover():마우스 올리고 /땠을 때

/*
$('.div-hover').hover(
  //올렸을 때
  function () {
    $(this).addClass('hover');
  },
  //땠을 떄
  function () {
    $(this).removeClass('hover');
  }
);
*/
//toggle을 이용할 수도 있음(moseover+moseout합친형태)
$('.div-hover').hover(
  //올렸을 때
  function () {
    $(this).toggleClass('hover');
  }
);
//========================

//scroll():윈도우 창을 스코롤 할때

//in jquery
/*
$(window).scroll(function () {
  console.log('scrolling!!'); //scroll할떄마다 콘솔창에 찍힘
});
*/
/*
$(window).on('scroll', function () {
    console.log('scrolling!!'); //scroll할떄마다 콘솔창에 찍힘
  });
  */

//in js
window.addEventListener('scroll', function () {
  console.log('scrolling with js!!');
});

//=================
// 3. Key Event
$('.input-key').on('keydown', function (e) {
  // e: 이벤트 객체
  console.log(e);
  console.log(e.code); // 눌려진 키의 고유 코드
  console.log(e.key); // input에 입력된 값

  if (e.code === 'ArrowUp') {
    console.log('⬆');
  } else if (e.code === 'ArrowDown') {
    console.log('⬇');
  } else {
    console.log('others');
  }
});

//============================
//4.Form Event
$('#todo-form').on('submit', function (e) {
  console.log(e); //input창에 뭐를 누르고 add버튼을 누르면(지금 이게 form태그 안에 있어서) submit 이벤트가 일어나면 그 기본동작인 새로고침이 일어나게 됨
  e.preventDefault(); //이벤트의 기본동작을 막는 메서드
  //지금 발생한 이벤트가 "submit"이기 때문에 submit이벤트의 기본 동작인 "새로고침"을 막음

  //퀴즈
  const todo = $('[name="todo"]').val();
  //console.log(todo);
  /*
  $('.todos').append('<li></li>');
  $('li').append(todo);
  */
  //위의 코드를 줄일 수 있다
  $('.todos').append(`<li>${todo}`);

  $('[name="todo"]').val('');
  //이걸 todo.val("");로 쓰면 에러뜸 todo가 함수가 아니라 typeof(todo)는 string이기 때문
});

//============
//e.preventDefault() 또 다른 예제
$('a#inactive').on('click', function (e) {
  e.preventDefault(); //a 태그 의 기본 동작을 막음
  //a 태그의 클릭이벤트에 대해서 기본동작은 href에 연결된 링크로의 이동
  $('#text').append(alert('이 링크는 동작하지 않음!'));
});

//this
//그 함수가 속해 있던 객체를 참조
//-뭔가를 클릭할 떄 불러오는 함수(콜백함수)에서 this는 그 "뭔가"를 의미

//in js
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

function setBgColor() {
  this.style.backgroundColor = 'royalblue';
} //이 함수는 색을 정할 수는 없음
//그래서 색을 정할 수 있는 함수를 만들어 보겠다~
function setBgColor2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
  /*
    btn.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'royalblue';
  });
  */
  /*btn.addEventListener('click', setBgColor);*/
  //위의 주석처리된 부분을 setBGcolor함수를 정의함으로써 이렇게 간단하게 가능!
  //두번째 함수를 써보자
  btn.addEventListener('click', function () {
    setBgColor2(this, 'yellow');
  });
}

for (let span of spans) {
  /*
  span.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'royalblue';
  });
  */
  /*span.addEventListener('click', setBgColor);*/
  //두번째 함수를 써보자
  span.addEventListener('click', function () {
    setBgColor2(this, 'yellow');
  });
}
