// 각 문제에서 요구하는 답변을 작성한다

// [개념] 문제는 각 문제에 대한 개념을 주석으로 작성한다
// [실습] 문제는 각 문제에 대한 코드를 작성하고, 실행하여 출력 결과를 비교한다

// 문제 [개념]
// HTML 요소를 구성하는 태그, 속성, 컨텐츠에 대해 작성한다
// 1. 태그(Tag) : 요소의 기능을 나타냄
// 2. 속성(Attribute) : 요소의 추가적인 정보를 제공, 시작 태그 내부에 작성
// 3. 내용(Content) : 화면에 표시될 텍스트 또는 다른 요소

// 문제 [개념]
// HTML 속성 중 class 속성의 역할에 대해 작성한다
// 여러개의 요소를 그룹화하기 위해 사용

// 문제 [개념]
// JavaScript 원시 자료형 중 기본 자료형 3개에 대해 작성한다
// 문자열(String), 숫자(Number), 불리언형(Boolean)

// 문제 [개념]
// 변수 선언 키워드 let, const의 차이점을 작성한다
// let : 재선언 불가능, 재할당 가능
// const : 재할당 불가능

// 문제 [실습]
// 상수 variable을 선언하고, 숫자 10을 할당한다. 그리고 상수 variable를 출력한다
const variable = 10;
console.log(10);

/* 출력 결과
10
*/

// 문제 [실습]
// 상수 message를 선언하고, 문자열 "Hello World"를 할당한다. 그리고 상수 message를 출력한다
const message = "Hello World";
console.log(message);

/* 출력 결과
Hello World
*/

// 문제 [개념]
// JavaScript 비교 연산자 5개(>, <, >=, <=, ===, !==)의 의미를 작성한다
// 두 개의 상수 A,B가 있다고 할 때
// A > B : A가 B보다 크다
// A < B : A가 B보다 작다
// A >= B : A가 B와 같거나 크다
// A <= B : A가 B와 같거나 작다
// A === B : A와 B가 같다
// A !== B : A와 B는 다르다

// 문제 [실습]
// 변수 num1을 선언하고, 숫자 10을 할당한다.
// 변수 string1을 선언하고, 문자열 "10"을 할당한다
// 변수 num1과 string1이 같은 데이터인지 비교한 결과를 출력한다

let num1 = 10;
let string1 = "10";
console.log(num1 === string1);

/* 출력 결과
false
*/

// 문제 [실습]
// 변수 score를 선언하고, 숫자 85를 할당한다.
// 변수 passScore를 선언하고, 숫자 90을 할당한다
// 변수 score가 passScore보다 크거나 같은지 비교한 결과를 출력한다

let score = 85;
let passScore = 90;
console.log(score >= passScore);

/* 출력 결과
false
*/

// 문제 [실습]
// 변수 num2를 선언하고, 숫자 4를 할당한다
// 변수 num2가 5보다 크면, "num2는 5보다 큽니다"를 출력한다
// 아니라면 "num2는 5보다 작습니다"를 출력한다

let num2 = 4;
console.log(num2 > 5 ? "num2는 5보다 큽니다" : "num2는 5보다 작습니다");

/* 출력 결과
num2는 5보다 작습니다
*/

// 문제 [실습]
// 변수 temperature를 선언하고, 숫자 25를 할당한다
// 변수 temperature가 30 이상이면, "더운 날씨입니다"를 출력한다
// 아니라면 "시원한 날씨입니다"를 출력한다

let temperature = 25;
console.log(temperature >= 30 ? "더운 날씨입니다" : "시원한 날씨입니다");

/* 출력 결과
시원한 날씨입니다
*/

// 문제 [실습]
// 이번 문제는 삼항 연산자를 활용한다
// 변수 num3을 선언하고, 숫자 10을 할당한다
// 상수 result를 선언하고, num3이 짝수라면 "짝수"를 할당하고, 홀수라면 "홀수"를 할당한다
// 그리고 상수 result를 출력한다

let num3 = 10;
const result = num3 % 2 == 0 ? "짝수" : "홀수";
console.log(result);

/* 출력 결과
짝수
*/

// 문제 [실습]
// 이번 문제는 삼항 연산자를 활용한다
// 변수 age를 선언하고, 숫자 17을 할당한다
// 상수 status를 선언하고, age가 18 이상이라면 "성인"을 할당하고, 아니라면 "미성년자"를 할당한다
// 그리고 상수 status를 출력한다

let age = 17;
const status = age >= 18 ? "성인" : "미성년자";
console.log(status);

/* 출력 결과
미성년자
*/

// 문제 [실습]
// 윤년 계산 조건문을 작성한다
// 윤년의 조건
// 1. 연도가 4로 나눴을 때 나머지가 0이고, 100으로 나눴을 때 나머지가 0이 아닌 경우
// 2. 또는 연도가 400으로 나눴을 때 나머지가 0인 경우
// 변수 year를 선언하고, 숫자 2020를 할당한다
// year가 윤년이라면 "윤년입니다"를 출력하고, 아니라면 "윤년이 아닙니다"를 출력한다

let year = 2020;
console.log(
	year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)
		? "윤년입니다"
		: "윤년이 아닙니다"
);

/* 출력 결과
윤년입니다
*/

// 문제 [실습]
// 학점 계산 조건문을 작성한다
// 학점의 조건
// 1. 점수가 90 이상이면 "A"
// 2. 점수가 80 이상이면 "B"
// 3. 점수가 70 이상이면 "C"
// 4. 그 외는 "F"
// 변수 score를 선언하고, 숫자 85를 할당한다
// score에 따른 학점을 출력한다

console.log(score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F");

/* 출력 결과
B
*/

// 문제 [실습]
// 변수 num4를 선언하고, 숫자 10을 할당한다
// 변수 num4가 0 보다 크면 "양수", 0 보다 작으면 "음수", 0이면 "0"을 출력한다

let num4 = 10;
console.log(num4 > 0 ? "양수" : num4 === 0 ? "0" : "음수");

/* 출력 결과
양수
*/

// 문제 [실습]
// 변수 balance를 선언하고, 숫자 -500을 할당한다
// 변수 balance가 0 보다 크면 "잔액이 있습니다", 0 보다 작으면 "잔액이 부족합니다", 0이면 "잔액이 없습니다"를 출력한다

let balance = -500;
console.log(
	balance > 0
		? "잔액이 있습니다"
		: balance < 0
		? "잔액이 부족합니다"
		: "잔액이 없습니다"
);

/* 출력 결과
잔액이 부족합니다
*/

// 문제 [실습]
// 이번 문제는 삼항 연산자를 활용한다
// 변수 isLogin을 선언하고, 불리언 데이터 false를 할당한다
// 상수 result2를 선언하고, isLogin이 true라면 "로그인 상태입니다"를 할당하고, 아니라면 "로그아웃 상태입니다"를 할당한다
// 그리고 상수 result2를 출력한다

let isLogin = false;
const result2 = isLogin ? "로그인 상태입니다" : "로그아웃 상태입니다";
console.log(result2);

/* 출력 결과
로그아웃 상태입니다
*/

// 문제 [실습]
// 이번 문제는 삼항 연산자를 활용한다
// 변수 hasPermission을 선언하고, 불리언 데이터 true를 할당한다
// 상수 accessResult를 선언하고, hasPermission이 true라면 "접근 허용"을 할당하고, 아니라면 "접근 거부"를 할당한다
// 그리고 상수 accessResult를 출력한다

let hasPermission = true;
const accessResult = hasPermission ? "접근 허용" : "접근 거부";
console.log(accessResult);

/* 출력 결과
접근 허용
*/

// 문제 [개념]
// 함수 정의 기본 구조 코드를 보고 각 빈칸(X, Y, Z)이 함수의 구성 요소 중 무엇인지 작성한다
/*
function XXX(YYY) {

  return ZZZ;
}

XXX : 함수 이름
YYY : 매개 변수
ZZZ : 반환 값
*/

// 문제 [실습]
// 아래 함수 선언식 코드를 화살표 함수로 변경한다

/*
function greet(name) {
  return `안녕하세요, ${name}님!`;
}
*/

const greet = (name) => {
	return `안녕하세요, ${name}님!`;
};

// 문제 [실습]
// 아래 함수 선언식 코드를 화살표 함수로 변경한다

/*
function multiply(a, b) {
  return a * b;
}
*/

const multiply = (a, b) => {
	return a * b;
};

// 문제 [실습]
// 아래 설명을 보고 함수를 구현한다.(함수 선언식으로 구현한다)
// 함수명: compareNumbers
// 매개변수: num1, num2
// 반환값: 두 숫자 중 더 큰 숫자
// 두 숫자가 같으면 "같다"를 반환한다
// 함수 작성 후 아래 주석 처리된 테스트 코드의 주석을 해제하고 실행하여 출력 결과를 비교한다

function compareNumbers(num1, num2) {
	return num1 === num2 ? "같다" : num1 > num2 ? num1 : num2;
}

// console.log(compareNumbers(5, 10)); // 10
// console.log(compareNumbers(15, 5)); // 15
// console.log(compareNumbers(10, 10)); // 같다

// 문제 [실습]
// 아래 설명을 보고 함수를 구현한다.(함수 선언식으로 구현한다)
// 함수명: getAbsoluteValue
// 매개변수: num
// 반환값: 매개변수 num의 절댓값
// 함수 작성 후 아래 주석 처리된 테스트 코드의 주석을 해제하고 실행하여 출력 결과를 비교한다

function getAbsoluteValue(num) {
	return num >= 0 ? num : num * -1;
}

// console.log(getAbsoluteValue(-5)); // 5
// console.log(getAbsoluteValue(10)); // 10
// console.log(getAbsoluteValue(0)); // 0

// 문제 [실습]
// 아래 설명을 보고 함수를 구현한다.(함수 선언식으로 구현한다)
// 함수명: verifyPassword
// 매개변수: password
// 반환값: 매개변수 password의 길이가 8 이상이면 true를 반환하고, 아니라면 false를 반환한다
// 함수 작성 후 아래 주석 처리된 테스트 코드의 주석을 해제하고 실행하여 출력 결과를 비교한다

function verifyPassword(password) {
	return password.length >= 8 ? true : false;
}

// console.log(verifyPassword("password")); // true
// console.log(verifyPassword("pass")); // false

// 문제 [실습]
// 아래 설명을 보고 함수를 구현한다.(함수 선언식으로 구현한다)
// 함수명: isEven
// 매개변수: number
// 반환값: 매개변수 number가 짝수이면 true를 반환하고, 아니라면 false를 반환한다
// 함수 작성 후 아래 주석 처리된 테스트 코드의 주석을 해제하고 실행하여 출력 결과를 비교한다

function isEven(number) {
	return number % 2 == 0 ? true : false;
}

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false
// console.log(isEven(0)); // true

// 문제 [개념]
// 배열의 생성 방법, 배열 요소 접근 방법, 배열 요소 추가 방법, 배열 요소 삭제 방법에 대해 작성한다
// 배열의 생성 : const array = []; (변수명을 선언하고 []을 할당)
// 배열 요소 접근 방법 : array[index] (배열의 index값을 통해 배열 요소에 접근)
// 배열 요소 추가 방법 : array.push(추가할 요소)
// 배열 요소 삭제 방법 : array.pop(삭제할 요소)

// 문제 [실습]
// 변수 fruits를 선언하고, 배열 데이터 ["apple", "banana", "cherry"]를 할당한다
// 변수 fruits를 출력한다

let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

/* 출력 결과
['apple', 'banana', 'cherry']
*/

// 문제 [실습]
// 변수 colors를 선언하고, 배열 데이터 ["red", "green", "blue"]를 할당한다
// 변수 colors를 출력한다
let colors = ["red", "green", "blue"];
console.log(colors);

/* 출력 결과
['red', 'green', 'blue']
*/

// 문제 [실습]
// 변수 numbers를 선언하고, 배열 데이터 [1, 2, 3, 4, 5]를 할당한다
// 변수 numbers를 출력한다
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

/* 출력 결과
[1, 2, 3, 4, 5]
*/

// 문제 [실습]
// 변수 scores를 선언하고, 배열 데이터 [85, 92, 78, 96, 88]를 할당한다
// 변수 scores를 출력한다

let scores = [85, 92, 78, 96, 88];
console.log(scores);

/* 출력 결과
[85, 92, 78, 96, 88]
*/

// 문제 [실습]
// 변수 letters를 선언하고, 배열 데이터 ["A", "B", "C", "D", "E"]를 할당한다
// 변수 letters를 출력한다

let letters = ["A", "B", "C", "D", "E"];
console.log(letters);

/* 출력 결과
["A", "B", "C", "D", "E"]
*/

// 문제 [실습]
// 변수 days를 선언하고, 배열 데이터 ["월", "화", "수", "목", "금"]를 할당한다
// 변수 days를 출력한다

let days = ["월", "화", "수", "목", "금"];
console.log(days);

/* 출력 결과
["월", "화", "수", "목", "금"]
*/

// 문제 [실습]
// 아래 배열 변수 numbers2에 6을 추가한다
let numbers2 = [1, 2, 3, 4, 5];

numbers2.push(6);
console.log(numbers2);

// 변수 numbers2를 출력한다

/* 출력 결과
[1, 2, 3, 4, 5, 6]
*/

// 문제 [실습]
// 아래 배열 변수 colors2에 "yellow"를 추가한다
let colors2 = ["red", "green", "blue"];

colors2.push("yellow");
console.log(colors2);

// 변수 colors2를 출력한다

/* 출력 결과
["red", "green", "blue", "yellow"]
*/

// 문재 [개념]
// 객체의 생성 방법, 객체 속성 접근 방법, 객체 속성 추가 방법, 객체 속성 삭제 방법에 대해 작성한다
// 객체의 생성 방법 : const obj = {key:value, key2:value2};
// 객체 속성 접근 방법 : obj[key]
// 객체 속성 추가 방법 : obj[key3] = value3
// 객체 속성 삭제 방법 : delete obj[key3]

// 문제 [실습]
// 변수 object1을 선언하고, 속성 name, age, city를 가진 객체를 생성하고 할당한다
// 변수 object1를 출력한다

let object1 = { name: "홍길동", age: 30, city: "서울" };
console.log(object1);

/* 출력 결과
{ name: '홍길동', age: 30, city: '서울' }
*/

// 문제 [실습]
// 변수 student를 선언하고, 속성 name, grade, subject을 가진 객체를 생성하고 할당한다
// 변수 student를 출력한다

let student = { name: "김영희", grade: 3, subject: "수학" };
console.log(student);

/* 출력 결과
{ name: '김영희', grade: 3, subject: '수학' }
*/

// 문제 [실습]
// 변수 object2에 속성명(key)key) job, 속성값(value) "개발자" 인 속성을 추가한다
const object2 = { name: "홍길동", age: 30, city: "서울" };
object2["job"] = "개발자";
console.log(object2);

// 변수 object2를 출력한다

/* 출력 결과
{ name: '홍길동', age: 30, city: '서울', job: '개발자' }
*/

// 문제 [실습]
// 변수 car에 속성명(key) color, 속성값(value) "빨간색" 인 속성을 추가한다
const car = { brand: "현대", model: "소나타", year: 2023 };
car["color"] = "빨간색";
console.log(car);

// 변수 car를 출력한다

/* 출력 결과
{ brand: '현대', model: '소나타', year: 2023, color: '빨간색' }
*/

// 문제 [실습]
// 변수 object3의 age 속성을 20으로 수정한다
const object3 = { name: "홍길동", age: 30, city: "서울" };
object3["age"] = 20;
console.log(object3);

// 변수 object3를 출력한다

/* 출력 결과
{ name: '홍길동', age: 20, city: '서울' }
*/

// 문제 [실습]
// 변수 product의 price 속성을 15000으로 수정한다
const product = { name: "노트북", brand: "삼성", price: 120000 };
product["price"] = 15000;
console.log(product);

// 변수 product를 출력한다

/* 출력 결과
{ name: '노트북', brand: '삼성', price: 15000 }
*/

// 문제 [실습]
// 변수 object4의 city 속성을 출력한다
const object4 = { name: "홍길동", age: 20, city: "서울" };
console.log(object4["city"]);

/* 출력 결과
서울
*/

// 문제 [실습]
// 변수 book의 author 속성을 출력한다
const book = { title: "자바스크립트 입문", author: "김개발", pages: 300 };
console.log(book["author"]);

/* 출력 결과
김개발
*/

// 문제 [실습]
// 아래 설명을 보고 함수를 구현한다.(함수 선언식으로 구현한다)
// 함수명: calculateArea
// 매개변수: width, height
// 반환값: 매개변수 width와 height의 곱
// 함수 작성 후 아래 주석 처리된 테스트 코드의 주석을 해제하고 실행하여 출력 결과를 비교한다

function calculateArea(width, height) {
	return width * height;
}

// console.log(calculateArea(10, 20)); // 200
// console.log(calculateArea(5, 15)); // 75
// console.log(calculateArea(8, 8)); // 64

// 문제 [실습]
// 아래 설명을 보고 함수를 구현한다.(함수 선언식으로 구현한다)
// 함수명: calculateCircleArea
// 매개변수: radius
// 반환값: 매개변수 radius를 이용한 원의 넓이 (π * radius * radius, π는 3.14159 사용)
// 함수 작성 후 아래 주석 처리된 테스트 코드의 주석을 해제하고 실행하여 출력 결과를 비교한다

function calculateCircleArea(radius) {
	return 3.14159 * radius * radius;
}

// console.log(calculateCircleArea(5)); // 78.53975
// console.log(calculateCircleArea(3)); // 28.27431
// console.log(calculateCircleArea(10)); // 314.159

// 문제 [실습]
// 아래 설명을 보고 함수를 구현한다.(함수 선언식으로 구현한다)
// 함수명: processScore
// 매개변수: (객체) student
// 반환값: 원본 객체에 총점(sum)과 평균(average) 속성과 값을 추가한 객체
// 함수 작성 후 아래 주석 처리된 테스트 코드의 주석을 해제하고 실행하여 출력 결과를 비교한다

function processScore(student) {
	let sum = 0;
	let scores = student["score"];
	for (let i = 0; i < scores.length; i++) {
		sum += scores[i];
	}
	student["sum"] = sum;
	student["average"] = sum / scores.length;
	return student;
}

// console.log(processScore({ name: "홍길동", score: [85, 90, 94, 50] })); // { name: '홍길동', score: [85, 90, 94, 50], sum: 319, average: 79.75 }
// console.log(processScore({ name: "김철수", score: [92, 88, 95, 80] })); // { name: '김철수', score: [92, 88, 95, 80], sum: 355, average: 88.75 }

// 문제 [실습]
// 아래 설명을 보고 함수를 구현한다.(함수 선언식으로 구현한다)
// 함수명: processProduct
// 매개변수: (객체) product
// 반환값: 원본 객체에 할인가격(discountPrice) 속성과 값을 추가한 객체 (할인율 10% 적용)
// 함수 작성 후 아래 주석 처리된 테스트 코드의 주석을 해제하고 실행하여 출력 결과를 비교한다

function processProduct(product) {
	let discountPrice = 0.9 * product["price"];
	product["price"] = discountPrice;
	return product;
}

// console.log(processProduct({ name: "스마트폰", price: 100000 })); // { name: '스마트폰', price: 100000, discountPrice: 90000 }
// console.log(processProduct({ name: "노트북", price: 150000 })); // { name: '노트북', price: 150000, discountPrice: 135000 }

// 문제 [개념]
// 배열의 고차 메서드 map()과 filter()의 기능을 작성한다

// map() : 배열 각 원소를 변환하여 새 배열 생성
// filter() : 조건을 만족하는 원소만 새 배열로 반환

// 문제 [개념]
// 배열의 고차 메서드 map()과 filter()의 차이점을 작성한다

// map()은 변형이고 filter()는 선택

// 문제 [실습]
// 변수 numbers3를 선언하고, 배열 데이터 [1, 2, 3, 4, 5]를 할당한다
// numbers3의 각 요소를 제곱한 새로운 배열을 생성하고, 변수 newNumbers에 할당한다.
// 변수 newNumbers를 출력한다

let number3 = [1, 2, 3, 4, 5];
let newNumbers = number3.map((num) => {
	return num * num;
});

// console.log(newNumbers);

/* 출력 결과
[1, 4, 9, 16, 25]
*/

// 문제 [실습]
// 변수 prices를 선언하고, 배열 데이터 [1000, 2000, 3000, 4000, 5000]를 할당한다
// prices의 각 요소에 10%의 세금을 추가한 새로운 배열을 생성하고, 변수 taxIncludedPrices에 할당한다.
// 변수 taxIncludedPrices를 출력한다

let prices = [1000, 2000, 3000, 4000, 5000];
let taxIncludedPrices = prices.map((price) => {
	return Math.round(price * 1.1);
});

// console.log(taxIncludedPrices);

/* 출력 결과
[1100, 2200, 3300, 4400, 5500]
*/

// 문제 [실습]
// 변수 numbers4를 선언하고, 배열 데이터 [1, 2, 3, 4, 5]를 할당한다
// numbers4의 각 요소 중 짝수만 필터링한 새로운 배열을 생성하고, 변수 newNumbers2에 할당한다.
// 변수 newNumbers2를 출력한다

let number4 = [1, 2, 3, 4, 5];
let newNumbers2 = number4.filter((num) => {
	return num % 2 === 0;
});

// console.log(newNumbers2);

/* 출력 결과
[2, 4]
*/

// 문제 [실습]
// 변수 ages를 선언하고, 배열 데이터 [15, 18, 22, 16, 25, 17]를 할당한다
// ages의 각 요소 중 18 이상인 나이만 필터링한 새로운 배열을 생성하고, 변수 adults에 할당한다.
// 변수 adults를 출력한다

let ages = [15, 18, 22, 16, 25, 17];
let adults = ages.filter((age) => {
	return age >= 18;
});

// console.log(adults);

/* 출력 결과
[18, 22, 25]
*/

const originTodos = [
	{
		id: 1,
		text: "할 일 1",
		completed: true,
		priority: 0,
	},
	{
		id: 2,
		text: "할 일 2",
		completed: false,
		priority: 1,
	},
	{
		id: 3,
		text: "할 일 3",
		completed: false,
		priority: 2,
	},
	{
		id: 4,
		text: "할 일 4",
		completed: true,
		priority: 1,
	},
	{
		id: 5,
		text: "할 일 5",
		completed: false,
		priority: 0,
	},
];

// 문제 [실습]
// 변수 originTodos의 각 원소 객체 중 priority 속성의 값이 0인 원소만 필터링하고, 변수 highPriorityTodos에 할당한다
// 변수 highPriorityTodos를 출력한다

let highPriorityTodos = originTodos.filter((todo) => {
	return todo["priority"] === 0;
});
// console.log(highPriorityTodos);

/* 출력 결과
[
  { id: 1, text: '할 일 1', completed: true, priority: 0 },
  { id: 5, text: '할 일 5', completed: false, priority: 0 }
]
*/

// 문제 [실습]
// 변수 originTodos의 각 원소 객체 중 priority 속성의 값이 1인 원소만 필터링하고, 변수 mediumPriorityTodos에 할당한다
// 변수 mediumPriorityTodos를 출력한다

let mediumPriorityTodos = originTodos.filter((todo) => {
	return todo["priority"] === 1;
});

// console.log(mediumPriorityTodos);

/* 출력 결과
[
  { id: 2, text: '할 일 2', completed: false, priority: 1 },
  { id: 4, text: '할 일 4', completed: true, priority: 1 }
]
*/

// 문제 [실습]
// 변수 originTodos의 각 원소 객체 중 completed 속성의 값이 false인 원소만 필터링하고, 변수 incompleteTodos에 할당한다
// 변수 incompleteTodos를 출력한다

let incompleteTodos = originTodos.filter((todo) => {
	return !todo["completed"];
});

// console.log(incompleteTodos);

/* 출력 결과
[
  { id: 2, text: '할 일 2', completed: false, priority: 1 },
  { id: 3, text: '할 일 3', completed: false, priority: 2 },
  { id: 5, text: '할 일 5', completed: false, priority: 0 }
]
*/

// 문제 [개념]
// 스프레드 연산자 ...에 대한 설명을 작성한다

// 기존 배열이나 객체의 전체 또는 일부를 복사

// 문제 [실습]
// 스프레드 연산자를 활용하여 변수 object5를 복사한 새로운 객체를 생성하고, 변수 object6에 할당한다
const object5 = { name: "홍길동", age: 20, city: "서울" };

// 변수 object6를 출력한다
const object6 = { ...object5 };
// console.log(object6);

/* 출력 결과
{ name: '홍길동', age: 20, city: '서울' }
*/

// 아래 주석을 풀어서 두 변수(object5, object6)의 비교 결과를 출력한다
// console.log(object5 === object6); // false

// 문제 [실습]
// 스프레드 연산자를 활용하여 변수 student2를 복사한 새로운 객체를 생성하고, 변수 student3에 할당한다
const student2 = { name: "이영희", grade: 2, subject: "영어" };
const student3 = { ...student2 };

// 변수 student3를 출력한다
// console.log(student3);

/* 출력 결과
{ name: '이영희', grade: 2, subject: '영어' }
*/

// 아래 주석을 풀어서 두 변수(student2, student3)의 비교 결과를 출력한다
// console.log(student2 === student3); // false

// 문제 [실습]
// 스프레드 연산자를 활용하여 변수 object7에 속성명(key) country, 속성값(value) "대한민국" 인 속성을 추가한 새로운 객체를 생성하고, 변수 object8에 할당한다
const object7 = { name: "홍길동", age: 20, city: "서울" };
const object8 = { ...object7, country: "대한민국" };

// 변수 object8를 출력한다
// console.log(object8);

/* 출력 결과
{ name: '홍길동', age: 20, city: '서울', country: '대한민국' }
*/

// 문제 [실습]
// 스프레드 연산자를 활용하여 변수 laptop에 속성명(key) warranty, 속성값(value) "2년" 인 속성을 추가한 새로운 객체를 생성하고, 변수 laptopWithWarranty에 할당한다
const laptop = { brand: "LG", model: "그램", price: 1500000 };
const laptopWithWarranty = { ...laptop, warranty: "2년" };

// 변수 laptopWithWarranty를 출력한다
// console.log(laptopWithWarranty);

/* 출력 결과
{ brand: 'LG', model: '그램', price: 1500000, warranty: '2년' }
*/

// 문제 [실습]
// 스프레드 연산자 ... 를 활용하여 변수 array1을 복사한 새로운 배열을 생성하고, 변수 array2에 할당한다
const array1 = [1, 2, 3, 4, 5];
const array3 = [...array1];

// 아래 주석을 풀어서 두 변수(array1, array2)의 비교 결과를 출력한다
// console.log(array1 === array3); // false

// 문제 [실습]
// 스프레드 연산자 ... 를 활용하여 변수 fruits2를 복사한 새로운 배열을 생성하고, 변수 fruits3에 할당한다
const fruits2 = ["사과", "바나나", "오렌지"];
const fruits3 = [...fruits2];

// 아래 주석을 풀어서 두 변수(fruits2, fruits3)의 비교 결과를 출력한다
// console.log(fruits2 === fruits3); // false

// 문제 [실습]
// 스프레드 연산자 ... 를 활용하여 변수 array1에 숫자 6을 추가한 새로운 배열을 생성하고, 변수 array3에 할당한다
// 변수 array3를 출력한다

const array4 = [...array1, 6];
// console.log(array4);

/* 출력 결과
[1, 2, 3, 4, 5, 6]
*/

// 문제 [실습]
// 스프레드 연산자 ... 를 활용하여 변수 colors3에 문자열 "보라색"을 추가한 새로운 배열을 생성하고, 변수 colors4에 할당한다
const colors3 = ["빨강", "파랑", "노랑"];
const colors4 = [...colors3, "보라색"];
// 변수 colors4를 출력한다
// console.log(colors4);
/* 출력 결과
["빨강", "파랑", "노랑", "보라색"]
*/

// 문제 [개념]
// 구조 분해 할당에 대한 설명을 작성한다
// 배열이나 객체의 값을 변수에 할당

// 문제 [실습]
// 구조 분해 할당을 활용하여 변수 object9의 name 속성을 변수 name에, age 속성을 변수 age에, city 속성을 변수 city에 할당한다
const object9 = { name: "홍길동", age2: 20, city: "서울" };
const { name, age2, city } = object9;

// 아래 주석을 해제해서 변수 name, age, city를 출력한다
// console.log(name, age2, city);

/* 출력 결과
홍길동 20 서울
*/

// 문제 [실습]
// 구조 분해 할당을 활용하여 변수 car2의 brand 속성을 변수 carBrand에, model 속성을 변수 carModel에, year 속성을 변수 carYear에 할당한다
const car2 = { brand: "기아", model: "K5", year: 2022 };
const { brand: carBrand, model: carModel, year: carYear } = car2;

// 아래 주석을 해제해서 변수 carBrand, carModel, carYear를 출력한다
// console.log(carBrand, carModel, carYear);

/* 출력 결과
기아 K5 2022
*/

// 문제 [실습]
// 구조 분해 할당을 활용하여 변수 array2의 첫 번째 원소를 변수 first에, 두 번째 원소를 변수 second에, 나머지 원소를 변수 rest에 할당한다
const array2 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = array2;

// 아래 주석을 해제해서 변수 first, second, rest를 출력한다
// console.log(first, second, rest);

/* 출력 결과
1 2 [3, 4, 5]
*/

// 문제 [실습]
// 구조 분해 할당을 활용하여 변수 scores2의 첫 번째 원소를 변수 firstScore에, 두 번째 원소를 변수 secondScore에, 나머지 원소를 변수 restScores에 할당한다
const scores2 = [95, 87, 92, 78, 89];
// const [firstScore, secondScore, ...restScores] = scores2;

// 아래 주석을 해제해서 변수 firstScore, secondScore, restScores를 출력한다
console.log(firstScore, secondScore, restScores);

/* 출력 결과
95 87 [92, 78, 89]
*/
