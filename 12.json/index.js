// JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;
console.log(car);

//Json.parse():json to js obj(역직렬화:)
const obj = JSON.parse(car);
console.log(obj); //js obj로 출력됨
//obj는 js object 이므로 . 또는 [] 연산자를 이용해서 키 값에 접근이 가능하다.
console.log(obj.model);
console.log(obj.company);
console.log(obj.price);

//JSON.stringify():js obj to json(직렬화:통신하기 쉬운 데이터 포맷으로(JSON))
const json = JSON.stringify(obj); //format: json
console.log(json, typeof json); //json 변수는 JSON형태의 문자열이므로, . 또는 []연산자를 통해서 키 값 접근이 불가능하다

console.log(json.model); //undefined(이유는? json은 JSON이기 떄문에 없는값임)
