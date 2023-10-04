// 문자열 관련 내장 메서드
let str1 = 'Strawberry Moon';
let str2 = '    Strawberry Moon    ';

// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

// Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

// 문자열의 길이 (length는 메서드가 아닌 "속성")
console.log(str1.length);
console.log(str2.length);

// 대/소문자 변환
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length); // 'Strawberry Moon'.length 와 동일

// indexOf() 글자 위치 찾기
// 위치(index): 0부터 시작
console.log(str1.indexOf('w'));
console.log(str1.indexOf('r'));
console.log(str1.indexOf('x')); // 존재하지 않는 문자에 대해 검색하면 -1 반환

// slice() 문자열 자르기
console.log(str1.slice(11)); // 11 번 위치의 글자 ~ 끝
console.log(str1.slice(1, 5)); // start(1) ~ end-1(4)까지 자르기

// replace() 문자열 바꾸기
console.log(str1.replace('a', 'x'));
console.log(str1.replace('r', 'x'));
console.log(str1.replaceAll('r', '*'));

// split() 문자열 쪼개기 (배열로 변환)
let date = '23.03.10';
console.log(date.split('.'));
year = date.split('.')[0];
month = date.split('.')[1];
date = date.split('.')[2];
console.log(`오늘은 ${year}년 ${month}월 ${date}일 입니다.`); //😁
console.log(date.split('3'));

// repeat()
console.log('hi'.repeat(5));

//=======<배열 내장 메서드>===========
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quokka', 'rabbit', 'puppy', 'hamster'];

//배열에 값 추가
//arr1[5] = 6; //배열의 5번위치에 요소 6을 추가(인덱싱을 사용한다.)
//arr1[9] = 100; //인덱스 건너뛰면 빈 값(empty)이 들어가게 됨
//console.log(arr1[6]);

//.push():끝에 요소 추가
arr1.push(6); //배열의 제일 끝에 추가하는 방법
arr1.push(10);

//.pop():맨 끝 요소 제거
arr1.pop();
console.log(arr1);

//.unshift(): 맨 앞에 요소 추가
arr1.unshift('cat');
console.log(arr1);

//.shift(): 맨 앞 요소 제거
arr1.shift();
console.log(arr1);

//includes(요소): 요소가 있는지 없는지 검사(boolean값 반환)
console.log(arr2.includes('quokka'));
console.log(arr2.includes('apple'));

// reverse()
console.log(arr1.reverse());
console.log(arr1); // 원본 배열이 변경된 것

// join(): join 안의 문자열 기준으로 병합
console.log(arr2);
console.log(arr2.join('')); //quokkarabbitpuppyhamster
console.log(arr2.join('-')); //quokka-rabbit-puppy-hamster

//매서드 체이닝(method chaining)
//여러 메서드를 연결해서 사용할 수 있다!
console.log('hello'.split(''));
console.log('hello'.split('').reverse());
console.log('hello'.split('').reverse().join(''));

//=======================================
//배열에서 반복문 사용하기!!
//-기본 for문
//-for of문
//-forEach()매서드

const arr3 = [1, 2, 3, 4, 5];
const alphabets = ['a', 'b', 'c', 'd'];
for (let a = 0; a < arr3.length; a++) {
  console.log(arr3[a]);
}
//for of
for (let alpha of alphabets) {
  console.log(alpha);
} //인덱싱할 필요가 없어져서 간단해짐!

//forEach
alphabets.forEach(function (alpha, idx, arr) {
  //alpha는 currentvalue(반복하고 있는현재요소)를 의미함.
  //idx는 currentvalue의 인덱스(위치)
  //arr은 forEach를 호출한 배열(console.log에서배열 전체를 출력함) 즉 여기에서는 alphabets배열 전체를 의미!
  console.log(alpha, idx, arr);
});

let numbers = [1, 2, 3, 4, 5, 6];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
  sum1 = sum1 + numbers[i];
}

for (let j of numbers) {
  sum2 = sum2 + j; //여기에서 j는 numbers의 요소들을 의미함(자동 인덱싱 됨)
}

numbers.forEach((num) => {
  sum3 += num;
}); //forEach는 return값 없음
console.log(sum1, sum2, sum3);

//========================================
//map,filter, find 매서드
const arr4 = [1, 2, 3, 4, 5];
//1. map():배열 내 모든 원소에 대해 연산한 결과를 모아 "새로운 배열"을 반환한다.
let arr_map = arr4.map(function (e) {
  return e * 2; //이 내장함수를 화살표 함수로 바꾸면 : arr4.map((e)=>e*2)
}); //새로운 익명함수로 반환값을 가짐(forEach와의 차이점은 forEach에서 익명함수는 반환값이 없었음)
console.log(arr_map);
//2.filter():주어진 함수의 테스트(조건)을 통과하는 원소들을 모아 반환(배열의 형태)
const arr_filter = arr4.filter(function (e) {
  //arr4의 원소들 중에서
  return e > 3; //3보다 큰 원소만 반환
}); //그 반환값을 원소로 하는 arr_filter배열
//arr_filter=arr.filter((e)=>e>2);
console.log(arr_filter);
//3.find():특정 조건을 만족하는 첫번째 요소 반환
const arr_find = arr4.find((e) => e > 3); //조건을 만족하는 첫번째 요소(4)만 반환하게 됨
console.log(arr_find); //4출력(배열의 형태X)

//퀴즈
const words = ['dog', 'cat', 'rabbit', 'apple', 'wow'];

// 1. 글자 수가 3개 초과인 단어만 필터링->str.length속성
const words_filter1 = words.filter((e) => e.length > 3);
console.log(words_filter1);
// 2. 글자에 'a' 문자가 포함되어 있는 단어만 필터링->includes()매서드
const words_filter2 = words.filter((e) => e.includes('a')); //filter는 words배열에서 'a'를 갖는 문자를 갖는 원소들을 반환하여 새로운 배열을 생성함
console.log(words_filter2);
//⭐map과 filter의 반환 값에 대한 차이점 알아두기!(헷갈릴 수 있음)
const words_map = words.map((e) => e.includes('a')); //includes()는 true 또는 false를 반환하는 함수
//그러므로 배열 words의 조건인 'a'를 포함하면 true를 반환하고, 없으면 false를 반환한다.
//그래서 .map()을 쓰면 요소의 연산 결과인 true, false를 새로운 배열의 원소로 갖게 된다.
console.log(words_filter2);

//cf) for in 반복문: 객체에서 사용!
//객체의 key를 반복할 수 있는 구문!
const me = {
  name: 'seeun',
  gender: 'f',
  hobby: 'health',
};
//여기에서 key는 name, gender, hobby
//객체에서 key는 순서가 있는 것도 아니고 어떤게 추가 될지도 모름

for (let key in me) {
  console.log(key, me[key]); //각 key의 keyvalue에 접근하기 위해서는 점표기법이 아닌 대괄호 표기법을 통해서 접근해야함.(점표기법은 key라는 key가 있을 때 사용한다)
  console.log(key, me.key); //이렇게 하면 me.key에서 undefined가 뜸! 왜냐하면 'key'라는 object의 key가 없기 때문임
}

/////////////////////////////////
// reduce()
// : 배열의 각 요소에 대해서 주어진 리듀서(reducer)함수를 실행하고, "하나의 결과값" 반환

// reduce((acc,cur)=>{...})
// -acc: 누적되는 값
// -cur: 현재 요소
// 뭔가 누적해서 계산해야 할 때 reduce라는 메서드를 이용한다.
const numbers2 = [1, 2, 3, 4, 5];
const initialValue = 100;
const result = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue); //이렇게 initialValue를 넣어주면 default 값으로 부터 누적계산을 하게 된다.
console.log(result); //15

//////////////////////
// concat()
// 문자열, 배열에서 합칠 때 쓸 수 있음
// 여러 배열 할칠 때 사용 가능한 메서드

// 여러 배열을 합치느 방법
// 1.concat()
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5, 6];
console.log(arr_1.concat(arr_2)); //[1,2,3,4,5,6]

// 2. ...spread
console.log([...arr_1, ...arr_2]); //[1,2,3,4,5,6]
