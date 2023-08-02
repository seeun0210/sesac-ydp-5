//jQuery
//$(선택자).동작함수()->여기에서 선택자는 CSS규칙을 따름
//$():HTML요소를 선택하는 함수
//동작함수: 선택된 요소에 대해 원하는 동작 수행

console.log($('#div1'));

function submitJs() {
  const div1 = document.getElementById('div1');

  //div내용을 변경
  div1.innerText = '반갑습니다!';

  //div border style 추가
  div1.setAttribute('style', 'border: 2px solid red;'); //div1의 스타일을 경계선 바꿈
}

function submitJquery() {
  //$('#div1').text('안녕히계세요!');
  //$('#div1').css('border', '2px dotted blue'); //css style변경: border를 2px, 점선, 블루로 바꾸겠다

  //선택자요소가 반복되니까 변수로 바꿔서 해보자
  const div1 = $('#div1');

  div1.text('안녕히계세요~');

  div1.css('border', '2px dotted blue');
}

const colorsJs = document.querySelectorAll('.color');
const colorsJquery = $('.color');

//유사배열 형태로 출력
console.log(colorsJs); //nodelist
console.log(colorsJquery); //jquery객체

//js li요소 클릭시 글씨 색상 빨간색
/*colorsJs.addEventListener('click', () => {
  colorsJs.style.color = 'red';//오류가 뜨게됨(nodelist(유사객체)에는 addEventListner를 할 수 없다=>요소 하나하나를 선택해서 반복문을 돌아야 한다)
});*/
//nodelist는 foreach사용 가능
colorsJs.forEach((item) => {
  item.addEventListener('click', function () {
    this.style.color = 'red';
    this.style.fontSize = '20px';
  });
});

//jquery li요소 클릭시 색상 하늘색
colorsJquery.on('click', function () {
  //여기에서 on이 addeventlistener역할임
  //console.log($(this));
  $(this).css('background-color', 'skyblue');
});
