import { getValue, subtract, quotient, randomInRage, capitalize, arrayToString, invitation,
copyArray, copyObject, objectToArray, getEven, getOdd, arrayToObject, sum, makeAction} from '../utils';

// getValue
test('should return A', () => {
  let a = 5;
  expect(getValue(a)).toBe(a);
});
// subtract
test('should return a - b', () => {
  let a = 5;
  let b = 10;
  let result = -5;
  expect(subtract(a, b)).toBe(result);
});
// quotient
test('should return a / b', () => {
  let a = 10;
  let b = 5;
  let result = 2;
  expect(quotient(a, b)).toBe(result);
});
// randomInRage  ----- Help required!
// test('should return random number', () => {
//   let min = 5;
//   let max = 10;
//   const result = randomInRage(min, max);
//   expect(result).toBe(result);
// });
// capitalize
test('should return capitalized first letter', () => {
  let string = 'string'
  const result = 'String'
  expect(capitalize(string)).toMatch(result);
});
// arrayToString
test('should return array converted to string', () => {
  let arrString = ['string'];
  const result = 'string';
  expect(arrayToString(arrString)).toMatch(result);
});
// invitation
test('should return string invitation', () => {
  let user = {name: 'Oleg', age: 33};
  const result = `Hello! My name is Oleg. I am 33`;
  expect(invitation(user)).toMatch(result);
});
// copyArray
test('should return copy of array', () => {
  let arr = [1,2,3,4,5]
  const result = [1,2,3,4,5];
  expect(copyArray(arr)).toEqual(result);
});
// copyObject
test('should return copy of object', () => {
  let obj = {1:2};
  const result = {1:2};
  expect(copyObject(obj)).toEqual(result);
});
// ObjectToArray
test('should transform object to Array', () => {
  let obj = {1:2};
  const result = [2];
  expect(objectToArray(obj)).toEqual(result);
});
// EvenNumber
test('should return an even number', () => {
  let number = [4];
  const result = [4];
  expect(getEven(number)).toStrictEqual(result);
});
// OddNumber
test('should return an even number', () => {
  let number = [3];
  const result = [3];
  expect(getOdd(number)).toStrictEqual(result);
});
// arrayToObject
test('should return object', () => {
  let number = [1];
  const result = {1:1};
  expect(arrayToObject(number)).toStrictEqual(result);
});
// Sum closures
test('should return closures sum', () => {
  let number = 1;
  let secondNumber = 2;
  const result = 3;
  expect(sum(number)(secondNumber)).toBe(result);
});
// Make action
test('should return action', () => {
  function foo(a,b) {
    return a + b
  }
  let a = 1;
  let b = 2;
  const result = 3;
  expect(makeAction(foo,a,b)).toBe(result);
});
