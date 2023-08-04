$('td').click(function () {
  //달력에서 원하는 날짜를 선택하면
  console.log($(this).text());
  //그 날짜를 input에 넣어줌
  $('#date').val(`${$(this).text()}`);
  $(this).css('backgroundColor', 'skyblue');
  $(this).append('<li>');
});

//내용을 입력 해서 제출버튼을 누르면 입력된 값들이 달력에 추가되도록..
$('button').click(function () {
  const todo = $('#todo').val();

  $('li').append(todo);
  $('#date').val('');
  $('#todo').val('');
});
