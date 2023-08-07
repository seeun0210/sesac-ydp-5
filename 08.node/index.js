console.log('nodejs로 js파일을 읽었어요!');

function gugudan(n) {
  for (let i = 1; i < 10; i++) {
    console.log(`${i}*${i}=${n * i}`);
  }
  return `~~~${n}단 끝!!~~~`;
}
console.log(gugudan(7));
