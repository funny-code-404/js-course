import {
  getValue,
  substract,
  quotient,
  randomInRage,
  capitalize,
  arrayToString,
  invitation,
  copyArray,
  copyObject,
  objectToArray,
  getEven,
  getOdd,
  arrayToObject,
  sum,
  makeAction,
} from "../homework";

let message = 'blabla';
beforeEach(() => {
  message = "Not correct arguments";
});
afterEach(() => {
  message = 'blabla';
});

test("get value", () => {
  expect(getValue(10)).toBe(10);
  expect(getValue()).toBe(undefined);
  expect(getValue(-111)).toBe(-111);
});

test("substract", () => {
  expect(substract(1, 2)).toBe(-1);
  expect(substract(10, -10)).toBe(20);
  expect(substract("asd", 2)).toBe(message);
});

test("quotient", () => {
  expect(quotient(2, 2)).toBe(1);
  expect(quotient("blabla", 100)).toBe(message);
  expect(quotient(22, 2)).toBe(11);
});

test("randomInRage", () => {
  expect(randomInRage(2, 3)).toBeGreaterThanOrEqual(2);
  expect(randomInRage(22, 44)).toBeLessThan(44);
  expect(randomInRage(2)).toBe(message);
});

test("capitalize", () => {
  expect(capitalize("developer")).toBe("Developer");
});

test("arrayToString", () => {
  expect(arrayToString([1, 2, 3, 4, 6], "")).toBe("12346");
  expect(arrayToString([2, 3, 2, 3, 2, 3], "-")).toBe("2-3-2-3-2-3");
});

test("invitation", () => {
  const obj = {
    name: "Valera",
    age: 23,
  };
  expect(invitation(obj)).toBe("Hello! My name is Valera. I am 23");
});

test("copyArray", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(copyArray(arr)).toEqual([1, 2, 3, 4, 5]);
  expect(copyArray()).toBe(message);
});

test("copyObject", () => {
  const obj = {
    name: "Valera",
    age: 23,
  };
  expect(copyObject(obj)).toEqual({ name: "Valera", age: 23 });
  expect(copyObject([])).toBe(message);
  expect(copyObject("asd")).toBe(message);
});

test("objectToArray", () => {
  const obj = {
    name: "Valera",
    age: 23,
  };
  const arr = ["Valera", 23];
  expect(objectToArray(obj)).toEqual(arr);
  expect(arr).toHaveLength(2);
});

test("getEven", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(getEven(arr)).toEqual([2, 4, 6]);
});

test("getOdd", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(getOdd(arr)).toEqual([1, 3, 5]);
});

test("arrayToObject", () => {
  const arr = ["Valera", 23, "Grodno"];
  expect(arrayToObject(arr)).toEqual({
    Valera: "Valera",
    23: 23,
    Grodno: "Grodno",
  });
});

test("sum", () => {
  expect(sum(1)(2)).toBe(3);
});

test("makeAction", () => {
  const foo = (c, d) => {
    return c + d;
  };
  expect(makeAction(foo, 2, 4)).toBe(6);
});
