export function getValue(a) {
  return a;
}

export function substract(a, b) {
  if (!typeof a == "number" || isNaN(a) || isNaN(b) || !typeof b == "number") {
    return "Not correct arguments";
  }
  return a - b;
}

export function quotient(a, b) {
  if (!typeof a == "number" || isNaN(a) || isNaN(b) || !typeof b == "number") {
    return "Not correct arguments";
  }
  return a / b;
}

export function randomInRage(min, max) {
  if (
    isNaN(min) ||
    !typeof min == "number" ||
    isNaN(max) ||
    !typeof max == "number"
  ) {
    return "Not correct arguments";
  }
  return Math.floor(Math.random() * (max - min) + min);
}

export function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function arrayToString(arr, divider) {
  return arr.join(divider);
}

export function invitation(user) {
  return `Hello! My name is ${user.name}. I am ${user.age}`;
}

export function copyArray(arr) {
  if (!Array.isArray(arr)) return "Not correct arguments";
  return arr.slice(0);
}

export function copyObject(obj) {
  if (Array.isArray(obj) || obj == null || typeof obj != "object")
    return "Not correct arguments";
  return { ...obj };
}

export function objectToArray(obj) {
  return Object.values(obj);
}

export function getEven(arr) {
  return arr.filter((item) => !(item % 2));
}

export function getOdd(arr) {
  return arr.filter((item) => item % 2);
}

export function arrayToObject(arr) {
  return arr.reduce((obj, item) => {
    obj[item] = item;

    return obj;
  }, {});
}

export function sum(a) {
  return function (b) {
    return a + b;
  };
}

export function makeAction(action, a, b) {
  return action(a, b);
}

// почитать про beforeEach/beforeAll/afterEach/afterAll
