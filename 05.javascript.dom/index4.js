// js Event(이벤트)
// 어떤 사건을 의미
// ex. 버튼 클릭, 웹페이지 로드, 키가 눌렸을 때, ...

// 이벤트에 "함수" 등록 방법 2가지
// - HTML 상에서 onXXX 속성으로 등록
// - js 에서 listener 를 사용해 등록

// 1. onXX 속성으로 등록
function clickH1() {
  alert('제목 클릭!');
}

// 2. addEventListener
const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
const container = document.getElementById('container');

// addEventListener(이벤트 종류, 이벤트가 발생했을 때 일어날 일 함수로 작성)
btn1.addEventListener('click', function () {
  alert('버튼 1을 클릭하셨네요!');
});

btn1.addEventListener('mouseover', function () {
  btn1.style.backgroundColor = 'aqua';
});

btn1.addEventListener('mouseout', function () {
  btn1.style.backgroundColor = 'rgb(44, 44, 44)';
});

btn2.addEventListener('click', () => {
  const div = document.createElement('div'); //새로운 요소인 div가 추가되고
  div.style.backgroundColor = 'pink'; //그 배경색은 핑크
  div.innerHTML = 'HI!!!!!!'; //hi라는 문자가 찍힘
  container.append(div);
});

btn3.addEventListener('click', changeColor);
function changeColor() {
  const divs = document.querySelectorAll('#container div');
  for (let div of divs) {
    div.style.backgroundColor = 'skyblue'; //버튼 3을 누르면 그 div가 하늘색을 바뀐다
  }
}

btn4.addEventListener('click', changeBtnColor); //클릭하면 changeBtnColor이라는 함수를 실행시키겠다
function changeBtnColor() {
  //changeBtnColor함수 선언
  console.log(this); //자기자신=> btn4
  this.style.backgroundColor = 'yellow'; //클릭하면 btn4의 그러니까 this 자기자신의 배경색을 노란색을로
  this.style.color = 'black'; //글자는 검정색으로 하겠다.(btn4로 할 수 있는 건 다 this로 처리할 수 있고 this로 처리하는건 다 btn4로 처리할 수 있다.,this 로 처리하면 다른 요소에 복붙할때 좋겠지)
}

const btn = document.querySelector('button');
const input = document.querySelector('input');

// [이벤트 객체]
// 이벤트 발생 -> 브라우저는 발생한 이벤트에 대한 정보를 담은 "이벤트 객체(event object)"를 이벤트 리스터에 전달
// ex. mousedown 이벤트 발생 -> 이벤트 객체는 (마우스 좌표, 버튼 번호) 정보를 가짐
// ex. keydown 이벤트 발생 -> 이벤트 객체는 (키 코드값, 어떤 키가 눌렸는지에 대한 정보) 정보를 가짐
btn.addEventListener('click', function (event) {
  //event객체
  console.log(event); //event 객체에 대한 정보 출력됨
});

input.addEventListener('keydown', function (e) {
  //function(e)=function(event)
  console.log(e.code); //a를 입력하면 콘솔 창에 KeyA(키에대한 고유번호)
  console.log(e.key); //콘솔 창에 a(입력된 문자)

  if (e.code === 'ArrowUP') {
    console.log('😁');
  } else if (e.code === 'ArrowDown') {
    console.log('🤔');
  } else {
    console.log('⚠️');
  }
});

//폼이벤트
const todoForm = document.getElementById('todo-form');
const todos = document.querySelector('.todos');

todoForm.addEventListener('submit', (e) => {
  console.log('submit'); //이렇게 해서 todolist에 입력하고 add누르면 폼이 제출이 됨(backend로 정보를 넘겨준다)근데 지금은 back이 없어서 깜빡거리고 아무것도 못함
  e.preventDefault(); //폼 submit이벤트가 새로고침되는 것을 막음.(=폼 제출을 막음)
  const todoInput = document.querySelector('input[name="todo"]');
  /*
  console.log(todoInput);
  console.dir(todoInput); //dir로 console을 하면 todoInput의 정보들을 보여줌
  console.log(todoInput.value); //input에 입력된 값
  */
  const newTodo = todoInput.value.trim(); //여기에서 trim은 양끝 공백 없앰->그래서 스페이스바눌러도 목록에 추가가 안됨

  if (newTodo !== '') {
    const newTodoLi = document.createElement('li'); // <li></li>
    newTodoLi.append(newTodo); // <li>input입력값</li>
    todos.append(newTodoLi);
  }

  //input창 초기화
  todoInput.value = ''; //빈 문자열로 재할당을 해주면 input창 깨끗하게 지워짐
});

// change: input요소에 변경이 일어나고, 다른 요소를 클릭해서
// input이 포커스 아웃(blur)처리되었을 때 일어나는 이벤트
const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change', function (e) {
  console.log('change!!!', e);
});
//input의 값이 입력될 떄 마다 이벤트 발생
chgInput.addEventListener('input', function () {
  console.log('change!!');
  const div = document.querySelector('.intro');
  div.textContent = this.value; //실시간으로 텍스트 동기화
});
