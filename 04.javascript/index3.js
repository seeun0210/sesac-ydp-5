console.log('connected!');

//변수 선언:변수 정의
//변수 할당:=연산자를 이용해 값을 넣음
//초기화:변수에 값이 처음 할당되는 순간

// ### var
// - 선언 단계와 초기화 할당 단계가 동시에 진행이 되며, 초기화에는 undefined 값이 들어간다.
// - 중복 선언이 가능하며, 예기치 못한 값을 반환할 수 있음
// - 선언 이전에 참조하면 언제나 undefined를 반환한다.

// ### const
// - 재선언이 불가능하고, 재할당이 불가능하다.
// - 초반에 선언을 할 때 반드시 **초기화**를 동시에 진행해야 한다.

// ### let
// - let 키워드로는 변수 중복 선언이 불가능하지만, 재할당이 가능하다.

//변수 선언 키워드 1.var
var a; //선언만 하고 할당하지 않음
console.log(a); //콘솔 창에 undefined(값을 할당하지 않음)
a = 2; //선언 후 a에 2할당
console.log(a); //콘솔 창에 변수 값 2 출력
var a2 = 4; //변수 선언과 할당을 동시에 진행
console.log(a2); //콘솔 창에 변수 a2값 4출력

//var 변수의 이상한 점
//변수를 선언하기 전에 값을 할당
//장점같이 보일 수도 있으나 , 유지보수 할 때 최악
aa = 123; //aa를 선언하기 전에 aa에 123을 할당
console.log(aa);

//변수 선언 키워드 2.let
let b; //변수 선언
console.log(b); //콘솔 창에 아직 값이 할당되지 않아 초기값인 undefined가 출력됨
b = 7; //변수 b에 7이 할당됨
console.log(b); //콘솔 창에 변수 b의 값 7이 출력됨

let b2 = 77; //변수 선언과 동시에 할당
console.log(b2);
//let b2;//let b2는 한번만 사용가능
//b2의 값을 바꾸고 싶다면 let b2=78이 아니라(error:let 키워드는 중복선언 불가능)
b2 = 78; //이라고 써야함!!(변수 값 재할당)
console.log(b2); //b2의 값이 바뀌어서 78이 출력됨

//변수 선언 키워드 3.const
//->변수 선언과 할당이 동시에!!!(반드시)
//->변하지 않는 값을 변수에 저장할 떄 사용(상수)
const c = 3;
//const c;(error:할당되지 않아서)-> const 키워드는 반드시 선언과 할당이 동시에!!
console.log(c);
//c = 33; //콘솔창에서 에러 메세지가 뜨게 됨. (Assignment to constant variable.:const 변수는 재할당이 불가능하다)
//console.log(c); //그래서 콘솔창에서 33이 출력되지 않는다는 것을 알 수 있다.(js는 코드를 위에서 부터 읽어서 컴파일 하기 떄문에 52번줄에서 에러가 떠서 53번줄까지는 컴파일 되지 않은거임)

//변수 이름 규칙(=>식별자 규칙)
//식별자:이름을 붙일 때 사용하는 단어(변수명, 함수명, 클래스명, ...)
//-키워드(예약어) 사용 불가능
//  -키워드란? 특별한 역할을 이미 하고 있는 단어
//  -ex) var, let, const, void, return, for, while, class, if, else,...
//-숫자로 시작할 수 없다
//-특수문자:_,$만 사용가능
//-공백문자(space bar)사용 불가능

//(관례) 식별자에 단어 두개 이상 작성하고 싶은 경우?
//👍camelCase->js관례
//ex)redApple, isWater
//snake_case
//ex)red_apple,is_water

//--------------------------------------------------------------------------
//자료형(data type)
//:데이터(변수)의 종류가 무엇인가?
//-Primitive(원시):string, number, boolean, undefined, null,...
//-Object(객체):Primitive타입이 아닌 나머지

//-Primitive type
//1. string(문자열)
//:텍스트 정보, 따옴표 감싸야함
//:숫자, 특수문자도 따옴표안에 포함되면 문자열임
let text = '안녕하세요';
let text2 = 'hi';
let gender = '남자';
console.log(text); //안녕하세요가 출력됨
console.log(text2 + text); //+는 띄어쓰기 없이 바로 붙여서
console.log(text2, text, 'ㅋㅋ'); //쉼표는 띄어쓰기
//템플릿 리터럴(es6) 백틱(`)과 달러, 증괄화(${})조합으로 사용
//:문자열 내에서 변수와, 상수를 간결히 표현
console.log(`${text} 저는 sean입니다. 저의 성별은 ${gender}입니다!`);

//2.number(숫자형)
//정수, 실수
//연산이 가능(+,-,/,*)
let num1 = 100;
let num2 = 0.12;
console.log(num1, num2);
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//3.boolean(불리언)
//true, false
let isWater = true;
let hasApple = false; //불리언 변수들은 naming할 때 is~~,has~~이런식으로 많이 지음
console.log(isWater, hasApple);

//4.null(빈 값)
//"값이 없음"을 의도적으로 명시
let temp = null;
console.log(temp);
temp = 'HEllO';
console.log(temp);

//5.undefined
//값도 없고, 타ㅣㅂ도 지정되지 않은 상태
let x; //변수 선언만 했을 때 초기 값으로 undefined 할당
console.log(x); //undefined

//Quiz
// [QUIZ] 변수
// Q1. 코드 실행시 q1 변수는 어떤 값이 될까?3(q1이 따로 재할당 되지 않음)
let q1 = 3;
q1 - 2;
console.log(q1);

// Q2. 다음 코드 실행시 q2 변수는 어떤 값이 될까?13이 된다
let q2 = 10;
q2 = q2 + 5; //15
q2 = q2 - 2; //13
console.log(q2);

// Q3. 다음 코드 실행시 q3 변수는 어떤 값이 될까?1이다 const는 상수라서 재할당 불가능
const q3 = 1;
//q3 = q3 + 1; //여기서 에러임
console.log(q3);

//------------------------------------------

//6.array(배열)
//배열의 이름: fruits
//배열의 원소(아이템): 배열 안에 있는 데이터 하나하나
//배열의 위치(index):0부터 시작
//배열의 길이(크기):원소의 개수와 동일
const fruits = ['orange', 'pineapple', 'grape', 'apple'];
//const fruits2=newArray('orange','pineapple','grape','apple')//이렇게 도 배열을 생성할 수 있음(그냥 이런 방법이 있다는 정도만~)
console.log(fruits);
console.log(fruits[0]); //fruits배열의 첫번째 원소인 orange를 출력

//js에서는 배열 원소의 자료형이 달라도 됨!
const data = [1, 'apple', false, null, undefined];
console.log(data[2]);

//Array 안에 Array 들어갈 수 있음(중첩가능)=>2차원 배열
const korean = [
  ['가', '나', '다'],
  ['라', '마', '바'],
  ['사', '아', '자'],
];
console.log(korean);
console.log(korean[0]); //가,나,다 출력
console.log(korean[0][0]); //가 출력

//퀴즈. korean배열에서 가자 출력하기
console.log(korean[0][0] + korean[2][2]);

//퀴즈. 3차원 배열에서 숫자 8출력
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
console.log(nums[1][0][1]);

//7.object(key:value)
const cat = {
  name: '나비',
  age: 1,
  isCute: true,
  mew: function () {
    return '냐옹';
  },
};
console.log(cat); //object자체를 출력

//object의 속성(key)에 접근하는 방법
//(1)점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());
//(2) 대괄호 표기법
console.log(cat['name']);
//key가 변수에 저장되어있을 때 주로 사용
const tempVal = 'name';
console.log(cat[tempVal]); //cat['name']=>cat.name과 동일

//8.typeof:자료형을 확인할 수 있는 키워드
//typeof x
//typeof(x)
console.log(typeof '문자'); //string
console.log(typeof 12345); //number
console.log(typeof 3.14); //number
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(typeof null); //null의 자료형은 object라고 출력됨 **js에서 공식적으로 인정한 언어 자체의 오류
console.log(typeof undefined); //undefined의 자료형은 undefined라고 출력됨
console.log(typeof fruits); //fruits는 배열이었는데 object로 출력됨! js에서 배열의 쟈료형은 object임을 알 수 있음!
console.log(typeof cat); //위의 const cat에서 cat은 object였으므로 object라고 출력됨
console.log(typeof NaN); //nan은 숫자가 아님을 나타냄

//javascript 자료형 연습하기
const me = {
  name: 'seeun',
  isleader: false,
  job: 'developer',
  interest: ['netflix', 'music', 'health'],
};

console.log(me.isleader);
console.log(me.job);
console.log(me.interest);

//성적 구하는 프로그램 만들기
/*let mathScore = prompt('수학점수를 입력 하세요'); //프롬프트로 입력받은 값은 문자로 저장됨
console.log(mathScore, typeof mathScore);
let engScore = prompt('영어	점수를 입력 하세요');
console.log(engScore, typeof engScore);
let avg = (mathScore + engScore) / 2;
console.log(avg);
console.log('수학과 영어의 평균 점수는 ${avg}점 입니다~');*/

//--------------------<형변환>----------------------------
//1.String():문자열로 형변환
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));
console.log(str1.toString(), typeof str1.toString()); //str1.toString()==String(str1)

//2.Number():숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = '123.9';

console.log(Number(n1), typeof Number(n1)); //true=1
console.log(Number(n2), typeof Number(n2)); //false=0
console.log(Number(n3), typeof Number(n3));
console.log(Number(null)); //null=0
console.log(Number(undefined), typeof Number(undefined)); //Nan(숫자가 아님)

console.log(parseInt(n3, 10)); //parseInt는 문자열을 풀어서(parsing) 정수로 변환해줌
//=>n3값을 10진수의 정수(int)로 바꾸겠다=>123
console.log(parseFloat(n3));
//=>n3값을 실수(float)로 바꾸겠다
//parseInt(x,y);x를 풀어서 y진수로 바꾼다.

//형변환 실습
let mathScore = '77';
let engScore = '88';
let avg = (Number(mathScore) + Number(engScore)) / 2;
console.log(avg);
