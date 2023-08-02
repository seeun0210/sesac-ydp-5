//val()-value
function getValue() {
  //js
  const inputVal = document.querySelector('input').value;
  alert(inputVal); //getvalue는 입력창에 입력한 값을 가져오는 것을

  //jquery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  //js
  document.querySelector('input').value = '하이하이~'; //setvalue는 설정한 값(여기에서는 하이하이~)로 바뀜

  //jquery
  $('input').val('안녕안녕~');
}

//css():스타일을 변경하는 함수
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size:20px;color:red';
} //js로 할 경우 querySelector로 하나만 선택했기 때문에 '안녕1'span에만 적용이 되고
function changeCssJquery() {
  //case1: 한번에 하나씩
  $('span').css('font-size', '40px');
  $('span').css('color', 'blue');

  //case2: 한번에 여러개의 스타일
  $('span').css({
    fontSize: '40px', //모든 span에 대해 폰트 크기 변경
    color: 'blue', //모든 span에 대해 폰트 색상 변경
  });
} //jquery에서는 자동으로 유사배열 선택이 되었기 때문에 안녕 1,2에 모두 스타일이 적용된다.
function getCssJS() {
  //console.log($('span').css.('color'))
  //=(js에서는)
  console.log(document.querySelector('span').style.color);
}

// attr()
function changeAttrJS() {
  // 퀴즈: a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const a = document.querySelector('a');
  //   a.setAttribute('href', 'https://www.naver.com');
  a.href = 'https://www.naver.com';
}
function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net');
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const p = document.querySelector('.p-text');
  //   p.textContent = 'js로 텍스트 변경!!'
  p.innerText = 'js로 텍스트 변경!!';
  //   p.innerHTML = 'js로 텍스트 변경!!';
}
function changeTextJquery() {
  $('.p-text').text('jquery로 텍스트 변경~');
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const p = document.querySelector('.p-html');
  p.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
}

//========================================

// 요소 추가하기
// append()
function appendJS() {
  // 1. color 클래스 갖는 요소 선택하고
  const color = document.querySelector('.colors');
  // 2. li 태그 요소를 생성한 후
  const color1 = document.createElement('li');
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  color1.innerText = '마지막 자식으로 추가된 js';
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  color.append(color1);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
}

function appendJquery() {
  $('.colors ').append('<li>마지막 자식으로 추가된 jquery</li>');
  //Jquery에서 append()사용법
  //()안에 HTML구조로 작성!!
  //여기에서 <li></li>를 붙이지 않으면 목록 앞에 점 안생김 ㅋㅋ
}

// prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
  const color = document.querySelector('.colors');
  const color2 = document.createElement('li');
  color2.innerText = '첫 자식으로 추가된 js';
  color.prepend(color2);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
}

//어떤 요소를 선택(green을 기준)한 다음 이전 형재요소를 선택할것인가 이후 형제요소를 선택할 것인가
// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  li.innerText = '이전 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  green.before(li);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
}

function beforeJquery() {
  $('.green').before('<li>이전 형제 요소로 추가(jquery)</li>');
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  li.innerText = '다음 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  green.after(li);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
}

function afterJquery() {
  $('.green').after('<li>다음 형제 요소로 추가(jquery)</li>');
}

//=========================
// 요소 삭제하기
// remove()
function removeJS() {
  // li2 아이디를 갖는 요소를 선택하여 그 요소를 삭제
  const li2 = document.querySelector('#li2');
  li2.remove(); //여기는 인자로 받을 값이 딱히 없음
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
}

function removeJquery() {
  $('#li2').remove();
}

// empty()
function emptyJS() {
  // 참고! js에는 empty 메서드가 없습니다~ 따라서 아래와 같이 코드를 적용해주세요
  // ul 태그이자 num 클래스를 갖는 요소를 선택후
  // 해당 요소의 HTML을 빈 문자열 '' 로 설정 (innerHTML)
  const num = document.querySelector('ul.nums');
  num.innerHTML = '';
  num.append(); //여기에서는 인자로 받을 값이 딱히 없음??
}

function emptyJquery() {
  $('ul.nums').empty();
}

//======================
// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  const child2 = document.querySelector('.child2');
  console.log(child2.parentElement);
  //jquery
  console.log($('.child2').parent());
}

function findParents() {
  // JS 없습니다! 패스~~
  console.log($('.child2').parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  const child2 = document.querySelector('.child2');
  console.log(child2.nextElementSibling);

  console.log($('.child2').next());
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  const child2 = document.querySelector('.child2');
  console.log(child2.previousElementSibling);

  console.log($('.child2').prev());
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  const parent = document.querySelector('.parent');
  console.log(parent.children);

  console.log($('.parent').children());
}
//====================
// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  //   document.querySelector('#hi').classList.add('fs-50');
  $('#hi').addClass('fs-50');
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  //   document.querySelector('#hi').classList.remove('fs-50');
  $('#hi').removeClass('fs-50');
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  //   document.querySelector('#hi').classList.contains('fs-50');
  console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "bg-pink" 클래스 토글 (있으면 삭제, 없으면 추가)
  //   document.querySelector('#hi').classList.toggle('bg-pink');
  $('$hi').toggleClass('bg-pink');
}
