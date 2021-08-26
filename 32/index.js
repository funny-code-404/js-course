export function getValue(a) {
  return a;
}

export function substract(a, b) {
  return a - b;
}

export function quotient(a, b) {
  if (b === 0) {
    throw new Error();
  }
  return a / b;
}

export function randomInRage(min, max) {
  return Math.random() * (max - min) + min;
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
  return arr.slice(0);
}

export function copyObject(obj) {
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
