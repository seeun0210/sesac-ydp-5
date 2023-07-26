//반복문

//for문
for (let i = 0; i < 10; i++) {
  //i=0~9까지 10번 출력됨
  console.log('안녕!');
}

for (let i = 0; i < 10; i += 2) {
  //i=0,2,4,6,8 5번 안녕이 출력됨
  console.log('안녕!');
}

//1~5출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//5->1가지 내림차순으로 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
//1부터 n까지의 합 구하기
let sum = 0,
  n = 10;
for (let i = 1; i <= n; i++) {
  sum = sum + i; //sum+=i
}
console.log(sum);

//배열, for문
const fruits = ['사과', '수박', '배', '귤', '망고'];
console.log(fruits.length); //배열.length: 배열의 길이(크기)를 알려주는 배열의 속성

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//1~20중에서 짝수일 때의 합
let sum2 = 0; //합을 의미하는 변수
//1~20까지 숫자를 반복하고
//현재 반복 숫자가 짝수이면 sum2에 더하기
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 += i;
    console.log(i, sum2);
  }
}
console.log(sum2);

//while문
let idx = 0;
while (idx < 10) {
  //idx++;여기에 넣으면 먼저 idx값이 증가하고 출력되기 때문에 안녕 10에서 끝남
  console.log('안녕', idx);
  idx++; //여기에 있을 때는 안녕 idx가 출력되고 증가하기 때문에 안녕 0에서 시작해서 안녕 9에서 끝남
}

let idx2 = 0;
while (true) {
  //의도적으로 무한루프를 만들어버림
  console.log('안녕', idx2);
  idx2++;
  //idx2가 10이면 무한루프 빠져나옴
  if (idx2 === 10) {
    break;
  }
}
//continue
let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue; //이번 회차는 스킵할게요(짝수일때 더하는거 안함)
  }
  sum3 += i;
  console.log(i, sum3);
  //0부터
}
