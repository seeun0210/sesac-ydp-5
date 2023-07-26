//연산자
//대입 연산자(할당연산자)(=)
//변수의 값을 "할당"할 때 사용하는 연산자

//산술 연산자
//사칙연산: +,-,/,*
//나머지 연산:%
//거듭제곱 연산:**

let a = 5;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b); //5^2

//비교 연산자
//동등 비교(==,===),같지않음(부등)(!=,!==)
//==:"값"만 (같은지)비교=> 같다면 True, 다르면 false
//===:"값"과 "type(자료형)"비교=>같다면 True,다르면 false
//===,!==:type까지 비교하므로 엄격한 비교! 이걸 쓰는걸 권장한다!
console.log(1 == 1); //true
console.log(1 == 2); //false
console.log(1 != 2); //true
console.log(1 != 1); //false

console.log('1' == 1); //true
console.log('1' === 1); //false(문자 1과 숫자 1은 자료형이 다르기때문)
console.log('1' !== 1); //true
console.log(1 === 1); //true
console.log(1 !== 1); //false

//크기 비교
//>,<,>=,<=
console.log(1 >= 2); //false
console.log(1 <= 2); //true
console.log(1 > null); //true
console.log(1 > false); //true

//동등연산자 ==(2게)->예기치 못한 결과를 발생할 수도ㅜㅜ(권장하지 않는이유-밑에것들 다 true나옴)
console.log('1' == 1);
console.log('0' == false);
console.log('' == 0);
console.log(null == undefined);

//논리 연산자
//!:not(참->거짓, 거짓->참)
//&&:and(여러 값 중 모두가 참->참)
//||:or(여러 값 중 하나라도 참->참)
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!(2 > 1)); // !true -> false
console.log(2 > 1 && -2 < 1); // true && true -> true
console.log((2 > 1 && -2 < 1) || 5 > 2);
// (true && true) || true -> true || true -> true

// 문자열에서 + 연산: 문자열 더하기
console.log('안녕' + '하세요');
console.log('12' + '34');
// 더하기 이외의 연산은 숫자로 자동 형변환 되어 계산이 됨!
console.log('5' - '2');
console.log('5' * '2');
console.log('5' / '2');

//증감연산자
//++(변수 값을 1증가)
//--(변수 값을 1감소)
let result1, result2;
let num = 10,
  num2 = 10;

result = num++; //후위연산자(postfix operator)(변수를 먼저 대입한 뒤 연산 수행)
console.log(num); //11
console.log(result); //10(리절트에 대입하고 더함)

result2 = ++num2; //전치연산자(prefix operator)(먼저 연산 후 변수에 대입)
console.log(num2); //11
console.log(result2); //11(먼저 더하고 리절트값에 대입)

//'num+=1'과 num++는 같은 의미임
//마찬가지로 'num-=1'과 'num--도 같은 의미
//num+=1을 더 많이 사용함(반복문에서만 num++사용)
