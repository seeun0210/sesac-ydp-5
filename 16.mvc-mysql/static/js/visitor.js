//front js

//tbody 요소, button-group 요소를 선택
const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

//(사용자) 폼의 [동록]버튼 클릭시 테이블에 방문 데이터 추가
//=(개발자) 버튼 클릭시  axios로 POST /visitor 요청 날려서 db에 데치터 insert하기
function createVisitor() {
  const form = document.forms['visitor-form'];
  axios({
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log('post/visitor요청에 대한 응답', res.data);
    const { id, name, comment } = res.data;
    //방금 추가한 방명록 정보를 보이기
    //:newVisitor 변수에 tr 요소를 생성하고, tbody의 맨 마지막 요소로 추가
    const newVisitor = `
    <tr id="tr_${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td>
            <button type="button">수정</button>
          </td>
          <td>
            <button type="button">삭제</button>
          </td>
        </tr>
    `;
    //jquery
    //$('tbody').append(newVisitor); //
    //==js
    tbody.insertAdjacentHTML('beforeend', newVisitor);
    //근데 jquery가 훨씬 간단함...
  });
  //res:id,name,comment
}
