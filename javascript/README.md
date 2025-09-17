# 💻 JavaScript 기초 연습

## 1️⃣ 변수와 문자열

- **myCampus** 변수에 캠퍼스 이름을 저장하고 출력

```jsx
let myCampus = "성동캠퍼스";
console.log(myCampus);
```

**출력 결과**

```
성동캠퍼스
```

---

## 2️⃣ 불리언 자료형

- **isStudent**: true
- **isWorking**: false

```jsx
let isStudent = true;
let isWorking = false;
console.log(isStudent);
console.log(isWorking);
```

**출력 결과**

```
true
false
```

---

## 3️⃣ 문자열 연결

- **firstName**과 **lastName**을 연결하여 **fullName**에 저장

```jsx
let firstName = "홍";
let lastName = "길동";
let fullName = firstName + lastName;
console.log(fullName);
```

**출력 결과**

```
홍길동
```

---

## 4️⃣ 숫자 변수와 연산

- **age** 변수로 10년 후 나이 계산

```jsx
let age = 25;
let futureAge = age + 10;
console.log(`10년 후 나이: ${futureAge}`);
```

**출력 결과**

```
10년 후 나이: 35
```

---

## 5️⃣ 템플릿 리터럴

- 변수 값 삽입하여 출력

```jsx
let subject = "JavaScript";
let score = 95;
console.log(`${subject} 점수 : ${score}점`);
```

**출력 결과**

```
JavaScript 점수 : 95점
```

---

## 6️⃣ 비교 연산자

- **num1 < num2** 결과를 변수에 저장

```jsx
let num1 = 15;
let num2 = 20;
let isSmaller = num1 < num2;
console.log(isSmaller);
```

**출력 결과**

```
true
```

---

## 7️⃣ typeof 연산자

- 변수 자료형 확인

```jsx
let myString = "Hello";
let myNumber = 42;
let myBoolean = true;
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
```

**출력 결과**

```
string
number
boolean
```

---

## 8️⃣ 나머지 연산자와 조건

- **totalItems % 5** 계산

```jsx
let totalItems = 17;
let remainder = totalItems % 5;
console.log(remainder);
```

**출력 결과**

```
2
```

---

## 9️⃣ 논리 연산자

- AND(`&&`) / OR(`||`) 연산

```jsx
let hasLicense = true;
let hasExperience = false;
console.log(hasLicense && hasExperience);
console.log(hasLicense || hasExperience);
```

**출력 결과**

```
false
true
```

---

## 🔟 변수 재할당과 계산

- 20% 할인 적용

```jsx
let price = 100;
console.log(price);
price = 100 * 0.8;
console.log(price);
```

**출력 결과**

```
100
80
```
