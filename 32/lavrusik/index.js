export const messege = 'You enter not currect value';
export function getValue(a) {
  return a;
}

export function substract(a, b) {
  
  if (typeof(a) === 'number' && typeof(b) === 'number' && !isNaN(a) && !isNaN(b) ) {
     return a - b;
  }
  return messege;
}

export function quotient(a, b) {

  if (typeof(a) === 'number' && typeof(b) === 'number' && !isNaN(a) && !isNaN(b) && b !== 0) {
     return a/b;
  }
  return messege;
}

export function randomInRage(min, max) {
  if (typeof(min) === 'number' && typeof(max) === 'number' && !isNaN(min) && !isNaN(max) && max > min) {
    return Math.random() * (max - min) + min;
  }
  return messege;
}

export function capitalize(str) {
  if (typeof (str) === 'string') {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }
  return messege;
}
  

export function arrayToString(arr, divider) {
  if (Array.isArray(arr) && arr.length) {
    return arr.join(divider);
  }
  return messege;
}

export function invitation(user) {
  if (user.age && user.name) {
    return `Hello! My name is ${user.name}. I am ${user.age}`;
  }
  return messege;
}

export function copyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.slice(0);
  }
  return messege;
}

export function copyObject(obj) {
  if (typeof(obj)==='object' && obj !== null && !Array.isArray(obj)) {
    return { ...obj };
  }
  return messege;
}

export function objectToArray(obj) {
  if (typeof(obj)==='object' && obj !== null && !Array.isArray(obj)) {
    return Object.values(obj);
  }
  return messege;
}

export function getEven(arr) {
  if (Array.isArray(arr)) {
    return arr.filter((item) => !(item % 2));
  }
  return messege;
}

export function getOdd(arr) {
  if (Array.isArray(arr)) {
    return arr.filter((item) => item % 2);
  }
  return messege;
}

export function arrayToObject(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((obj, item) => {
    obj[item] = item;
    return obj;
  }, {});
  }
  return messege;
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
