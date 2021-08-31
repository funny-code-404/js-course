function getValue(a) {
  return a;
}

function substract(a, b) {
  return a - b;
}

function quotient(a, b) {
  return a / b;
}

function randomInRage(min, max) {
  return Math.random() * (max - min) + min;
}

function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function arrayToString(arr, divider) {
  return arr.join(divider);
}

function invitation(user) {
  return `Hello! My name is ${user.name}. I am ${user.age}`;
}

function copyArray(arr) {
  return arr.slice(0);
}

function copyObject(obj) {
  return { ...obj };
}

function objectToArray(obj) {
  return Object.values(obj);
}

function getEven(a) {
  return arr.filter((item) => !(item % 2));
}

function getOdd(a) {
  return arr.filter((item) => item % 2);
}

function arrayToObject(arr) {
  return arr.reduce((obj, item) => {
    obj[item] = item;

    return obj;
  }, {});
}

function sum(a) {
  return function (b) {
    return a + b;
  };
}

function makeAction(action, a, b) {
  return action(a, b);
}
