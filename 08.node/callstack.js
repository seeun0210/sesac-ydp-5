function first() {
  second(); //second함수 호출->6번줄에서 second()함수 실행->second함수에서 console.log(2)찍고
  console.log(1); //console.log(1)실행
  return; //first()함수 종료
}
function second() {
  console.log(2);
  return;
}
node;
first();
