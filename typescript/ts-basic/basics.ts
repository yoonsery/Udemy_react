// Primitives: number, string, boolean
// More comlex types: arrays, objects
// Function types, parameters

// ✅ Primitives

let age: number;

age = 23;

let userName: string;

userName = 'Sery';

let isInstructor: boolean;

isInstructor = true;

// ✅ More comlex types

let fruits: string[];

fruits = ['🍋', '🍇', '🍑'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Sery',
  age: 100,
};

let people: {
  name: string;
  age: number;
}[];

// ✅ Type inference 타입 추론

let course = 'React- The Complete Guide';

// course = 12345;   Type inference 가 사용됨

// ✅ Union Types

let things: string | number | boolean | string[] = '🍎 🌈 🐥';

things = 13579;

// ✅ Type alias

type Animal = {
  name: string;
  age: number;
};

let dog: Animal;

dog = {
  name: 'jindo',
  age: 3,
};

let cats: Animal[];

// ✅ Functions & types

function add(a: number, b: number): number | string {
  return a + b; // n+n처럼 너무 당연한 타입의 값이 리턴될 경우는 TS가 알아서 타입추론을 하므로 함수의 반환 타입을 굳이 명시하지 않아도 된다
}

function printOutput(value: any): void {
  console.log(value);
}

// ✅ Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['🍉', '🍕'], '🍡');

// updatedArray[0].split(''); // number는 split 사용 X

// 반환되는 타입이 매개변수로 받은 타입과 같아야 하는 함수

let numbers: number[] = [1, 2, 3];

// number[] : synthetic sugar 이다
// 실제로는 Array<number>
