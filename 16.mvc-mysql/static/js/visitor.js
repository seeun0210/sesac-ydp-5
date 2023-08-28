// front js

// tbody 요소, button-group 요소를 선택
const tbody = document.querySelector('tbody'); // $('tbody')
const buttonGroup = document.querySelector('#button-group'); // $('#button-group')

// 폼의 [등록] 버튼 클릭시 테이블에 방문데이터 추가
// = 버튼 클릭시 axios로 POST /visitor 요청 날려서 db에 데이터 insert 하기
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
    console.log('post /visitor 요청에 대한 응답', res.data);
    const { id, name, comment } = res.data;
    // 방금 추가한 방명록 정보를 보이기
    // : newVisitor 변수에 tr 요소를 생성하고, tbody의 맨마지막 요소로 추가
    const newVisitor = `
        <tr id="tr_${id}">
            <td>${id}</td>
            <td>${name}</td>
            <td>${comment}</td>
            <td><button type="button">수정</button></td>
            <td><button type="button" onclick="deleteVisitor(this, ${id})>삭제</button></td>
        </tr>
    `;
    tbody.insertAdjacentHTML('beforeend', newVisitor); // / $('tbody').append(newVisitor);
  });
}

function deleteVisitor(obj, id) {
  console.log(obj, id);

  // confirm 창에서 [취소] 누르면 아무일도 일어나지 않음
  if (!confirm('정말로 삭제하나요?')) {
    // !false => true
    return;
  }

  // confirm 창에서 [확인] 누르면 visitor 데이터 삭제
  // : axios로 DELETE /visitor 요청 날려서 db에 데이터 delete 하기
  axios({
    method: 'delete',
    url: '/visitor',
    data: {
      id: id,
    },
  }).then((res) => {
    console.log('delete /visitor 요청에 대한 응답', res.data);

    alert('삭제성공!');
    obj.parentElement.parentElement.remove();
  });
}
