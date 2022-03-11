### let, const (block-scoped)

- `let` is for variable values
- `const` is for constant values

let, const는 호이스팅되더라도 TDZ (Temporal Dead Zone)의 영향을 받는다  
(TDZ에 있는 코드는 사용할 수 없음)

- let

  - ① 선언단계, ② 초기화 단계 (그래서 referenceError 발생), ③ 할당단계 (재할당이 가능)

- const
  - ① 선언 + 초기화 + 할당

### Arrow function

Arrow syntax automatically binds this to the surrounding code's context.  
The syntax allows an implicit return when there is no body block, resulting in shorter and simpler code in some cases.  
(`{}`가 없을 때 리턴을 나타내므로 경우에 따라 더 짧고 간단한 코드가 될 수 있다)

### Classes

- method 는 클래스의 함수, property는 클래스의 변수

  - properties are like "variables attached to classes / object"
  - Method are like "functions attached to classes / object"

- 속성이나 메소드를 추가할 때 클래스는 인스턴스화된다
- 클래스는 상속이 가능하다(상속한 클래스의 프로퍼티와 메서드를 가져올 수 있다, 또 추가도 가능함)

### ES7 에서는

```js
constructor() {
  this.myProperty = 'value';
}

```

라고 적던 것을
`myProperty = 'value';` 이렇게 적으면 된다!

함수도

```js
myMethod() { ... }  // 이렇게 쓰던걸

myMethod = () => { ... }  // 이렇게 바뀜

```

### Spread & Rest Operators

- Spread
  : Used to split up `array elements` OR `object properties`

  - const newArray = [...oldArray, 1, 2]
  - const newObject = {... oldObject, newProp: 3}

- Rest
  : Used to merge a list of function arguments into an array

  ```
    function sortArgs(...args) {
      return args.sort()
    }
  ```

### async vs defer

html 이 한줄한줄 읽어오며 parsing 하다가 script 태그가 오면 parsing을 멈추고 js파일을 읽어온다

- script를 head에 포함하게 되면?

  - 만약 js가 용량이 크다면 사용자가 웹사이트를 보는데에 많은 시간 소요

- body 끝에 추가한다면?

  - parsing이 끝나고 페이지가 준비가 된 후 script를 만나서 JS를 fetching 하고 executing 한다 정상적인 웹페이지를 보기까지 fetching, executing하는 시간이 걸림

- head에 async:

  - html을 파싱중에 async를 보고 병렬로 js파일을 fetching한다 js가 다운로드가 완료되면 html 파싱을 멈추고 js를 executing하고 실행이 되면 나머지 html을 파싱함

  - 👍 js 다운로드 시간을 절약할 수 있다
  - 💩 html이 다 파싱되기 전에 js가 실행되므로 (dom 조작 시점에 조작하려는 html이 아직 정의되어있지 않을 수가 있다)
  - 💩 js를 executing 하는 시간 동안 html parsing이 멈출 수 있다 => 사용자가 페이지를 보는데 시간이 걸릴 수 있다

- head에 defer:

  - html을 읽으며 내려오다가 defer를 보고 html을 계속 parsing 하면서 병렬적으로 fetching js한다. html parsing이 끝난 다음에 JS를 executing한다. html을 파싱하는 동안 필요한 js를 다 다운받아놓고, html파싱을 끝내서 페이지를 사용자에게 보여준 다음에 바로 JS를 실행한다
  - 👍
  - 💩

* 만약 async로 여러개의 스크립트를 다운받는다면?

  - 용량에 따라 먼저 다운로드 된 js를 바로 실행한다 => 정의된 순서와 상관없이 먼저 다운받은 스크립트가 실행된다(순서가 중요할 경우 문제가 생길 수 있다)

* defer의 경우는?
  - html 파싱되는 동안 여러개의 스크립트를 다 다운 받아놓고, 파싱이 끝난 후 정의된 순서대로 스크립트를 실행한다

### Use strict

타입스크립트일 경우는 상관없지만 바닐라 자바일때는 쓰는게 좋다
javaScript 는 flexible 한 언어, 예를 들면 선언되지않은 변수의 값을 할당, 기존에 존재하는 프로토 타입을 변경하는게 가능한데 use strict 쓰면

- 상식적인 범위 안에서 자바스크립트를 이용할 수 있다
- JS 엔진이 더 빠르고(효율적으로) 분석할 수 있다 -> 성능개선!

`It eliminates silent errors and instead throws them so that the code won’t run with errors in the code.`

`It will also point out mistakes that prevent JavaScript engines from doing optimizations.`

### Useful Array APIs

1. `join()`: array to string
2. `split(',')`: string to array 구분자를 전달해야 한다 안하면 스트링 전체가 하나의 스트링으로 배열에 들어감
3. `reverse()`: reverse an array 원본을 바꾸고 바뀐값을 리턴함
4. `splice`: 배열에 있는 값을 제거/ 대체 하거나 새로운 값을 추가
   - splice(start: num, deleteCount?: num)
   - 원본을 변경
5. `slice()`: slice(start?: num, end?: num)
   - return new array object selected from start to end (end not included)
   - end값을 안 적으면 끝까지 리턴, start / end값이 마이너스이면 뒤에서 부터 카운트한다
6. `find() `: returns the value of the `first element` in the array where `predicate is true`
7. `filter()`: returns a new array with `all elements` that `pass the test` implemented by the provided function
8. `map()`: returns a new array populated with the results of calling a provided function on every element in the calling array
9. `some()`: tests whether at least one element in the array passes the test implemented by the provided function. returns T/F
10. `every()`: tests whether all elements in the array pass the test implemented by the provided function. returns T/F
11. `reduce()`: the return value of the callback function is the `accumulated result`.
12. `sort()` : sort((a, b) => a - b) 는 작-큰 순서, sort((a, b) => b - a) 는 큰-작 순서

### Destructuring

Easily extract array elements or object properties, and store them in variables.

(스프레드 오퍼레이터는 모든 엘레먼트와 프로퍼티를 새 배열/객체에 분배하지만 구조분해할당은 싱글 요소만 배역/객체를 위한 변수로 저장 )

Object, array는 Reference Type이다. reasign 재할당 하면 값이 아니라 포인터를 복사해오는 것이다 그래서 원본은 바꾸면 포인터만 복사했기에 바뀐 원본값을 참조함. 그래서 정말로 복사를 하고 싶다면 새 객체를 만들고 프로퍼티를 복사해야한다
