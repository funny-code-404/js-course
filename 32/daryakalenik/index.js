export function getValue(a) {
  return a;
}

export function substract(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return a - b;
  } else return "incorrect data";
}

export function quotient(a, b) {
  if (b === 0 || isNaN(a) || isNaN(b)) {
    return "incorrect data";
  } else return a / b;
}

export function randomInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    return "incorrect data";
  } else return Math.random() * (max - min) + min;
}

export function capitalize(str) {
  if (typeof str !== `string`) {
    return "incorrect data";
  } else return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function arrayToString(arr, divider) {
  if (Array.isArray(arr) && typeof divider === `string`) {
    return arr.join(divider);
  } else return "incorrect data";
}

export function invitation(user) {
  if (
    typeof user === "object" &&
    user !== null &&
    typeof user.name === `string` &&
    user.name !== `` &&
    !isNaN(user.age)
  ) {
    return `Hello! My name is ${user.name}. I am ${user.age}`;
  } else return "incorrect data";
}

export function copyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.slice(0);
  } else return "incorrect data";
}

export function copyObject(obj) {
  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
    return { ...obj };
  } else return "incorrect data";
}

export function objectToArray(obj) {
  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
    return Object.values(obj);
  } else return `incorrect data`;
}

export function getEven(arr) {
  if (
    Array.isArray(arr) &&
    arr.every((elem) => typeof elem === `number` && !isNaN(elem))
  ) {
    return arr.filter((item) => !(item % 2));
  } else return `incorrect data`;
}

export function getOdd(arr) {
  if (
    Array.isArray(arr) &&
    arr.every((elem) => typeof elem === `number` && !isNaN(elem))
  ) {
    return arr.filter((item) => item % 2);
  } else return `incorrect data`;
}

export function arrayToObject(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((obj, item) => {
      obj[item] = item;

      return obj;
    }, {});
  } else return `incorrect data`;
}

export function sum(a) {
  if (typeof a === `number` && !isNaN(a)) {
    return function (b) {
      if (typeof b === `number` && !isNaN(b)) {
        return a + b;
      } else return `incorrect data`;
    };
  } else return `incorrect data`;
}

export function makeAction(action, a, b) {
  if (
    typeof a === `number` &&
    !isNaN(a) &&
    typeof b === `number` &&
    !isNaN(b) &&
    typeof action === `function`
  ) {
    return action(a, b);
  } else return `incorrect data`;
}
