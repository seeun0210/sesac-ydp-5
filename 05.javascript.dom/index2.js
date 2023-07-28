console.log(document); //콘솔창에 html에 작성한것이 #document라고 듬
console.log(document.head); //콘솔창에 html의 Head태그부분이 뜸
console.log(document.body); //콘솔창에 html의 body부분이 뜸
console.log(document.title);
console.log(document.URL);
//console.log(document.domain);//⭐도메인과 URL 구분하기!!
//domain에 취소선 되어있는것: 쓰지 않는 것이 바람직하다

//document 객체를 이용해 HTML 요소 선택
//document객체를 이용해서 html문서를 선택하는 방법

//1. getElementById
//ById만 element고 나머지는 elements임(id는 고유하기때문)
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

//2. get ElementsByClassName
console.log(document.getElementsByClassName('pink')); //유사배열
console.log(document.getElementsByClassName('pink'[1])); //유사배열이기 때문에 인덱싱으로 접근 가능

//forEach(document.getElementsByClassName('pink')); //에러뜸!(유사배열이지 배열은 아니기때문에) ForEach사용할 수 없다

//3. getElementsTagName
console.log(document.getElementsByTagName('div'));

//4. getElementsByName
console.log(document.getElementsByName('id'));

//5. querySelector(css selector): css 선택자가 들어감
//처음 발견한 HTML의 요소 하나만 가져옴
//처음 발견한 요소 하나만 쓰고 싶을 때 사용하면 된다.
console.log(document.querySelector('.pink')); //pink라는 클래스를 갖는 요소가 4개인데 첫번째꺼 하나만 나옴
console.log(document.querySelector('.others')); //others라는 클래스를 갖는 요소는 2개이지만 첫번쨰 others클래스 하나만 가져옴
console.log(document.querySelector('#green')); //배열에 담겨있지 않고 그냥 가져옴
console.log(document.querySelector('div'));
console.log(document.querySelector("[name='id']"));

//6. querySelectorAll(css selector)
//:선택자에 해당되는 모든 요소 선택
console.log(document.querySelectorAll('.pink')); //pink라는 클래스를 갖는 요소 4개 모두 가져옴
//하나씩 가져오고 싶다면
console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);
//이렇게 인덱싱해서 하나씩 요소를 선택할 수 있음!!

console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green')); //하나 인것도 배열에 담아서 가져옴
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll("[name='id']"));
