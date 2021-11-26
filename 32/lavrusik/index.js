const message = 'You enter not currect value';
export function getValue(a) {
  return a;
}

export function substract(a, b) {
  const inputValidData = typeof (a) === 'number' && typeof (b) === 'number' && !isNaN(a) && !isNaN(b);
  if (inputValidData) {
     return a - b;
  }
  return message;
}

export function quotient(a, b) {
  const inputValidData = typeof (a) === 'number' && typeof (b) === 'number' && !isNaN(a) && !isNaN(b) && b !== 0;
  if (inputValidData) {
     return a/b;
  }
  return message;
}

export function randomInRage(min, max) {
  const inputValidData = typeof (min) === 'number' && typeof (max) === 'number' && !isNaN(min) && !isNaN(max) && max > min;
  if (inputValidData) {
    return Math.random() * (max - min) + min;
  }
  return message;
}

export function capitalize(str) {
  if (typeof (str) === 'string') {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }
  return message;
}
  

export function arrayToString(arr, divider) {
  if (Array.isArray(arr) && arr.length) {
    return arr.join(divider);
  }
  return message;
}

export function invitation(user) {
  if (user.age && user.name) {
    return `Hello! My name is ${user.name}. I am ${user.age}`;
  }
  return message;
}

export function copyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.slice(0);
  }
  return message;
}

export function copyObject(obj) {
  if (typeof(obj)==='object' && obj !== null && !Array.isArray(obj)) {
    return { ...obj };
  }
  return message;
}

export function objectToArray(obj) {
  if (typeof(obj)==='object' && obj !== null && !Array.isArray(obj)) {
    return Object.values(obj);
  }
  return message;
}

export function getEven(arr) {
  if (Array.isArray(arr)) {
    return arr.filter((item) => !(item % 2));
  }
  return message;
}

export function getOdd(arr) {
  if (Array.isArray(arr)) {
    return arr.filter((item) => item % 2);
  }
  return message;
}

export function arrayToObject(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((obj, item) => {
    obj[item] = item;
    return obj;
  }, {});
  }
  return message;
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
