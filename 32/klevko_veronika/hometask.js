export function getValue(a) {
  return a;
};


export function substract(a, b) {
  if(isNaN(a) || isNaN(b)) {
    return 'Error. This is not number';
  };
  return a - b;
};


export function quotient(a, b) {
  if(isNaN(a) || isNaN(b)) {
    return 'Error. This is not number';
  };
  return a / b;
}


export function randomInRage(min, max) {
  if(isNaN(min) || isNaN(max)) {
    return 'Error. This is not number';
  };
  return Math.random() * (max - min) + min;
};


export function capitalize(str) {
  if(typeof(str) != 'string') {
    return 'Should enter only letters!'
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}


export function arrayToString(arr, divider) {
  if(!Array.isArray(arr)) {
    return 'Arr is not array'
  };
  return arr.join(divider);
}


export function invitation(user) {
  if(user.name === undefined || user.age === undefined) {
    return 'user object do not contain name or age';
  };
  if(isNaN(user.age)) {
    return 'user age is not number';
  };
  return `Hello! My name is ${user.name}. I am ${user.age}`;
};


export function copyArray(arr) {
  if(!Array.isArray(arr)) {
    return 'Arr is not array'
  };
  return arr.slice(0);
}


export function copyObject(obj) {
  if(typeof(obj) != 'string') {
    obj = obj.toString();
  };
  return { ...obj };
};


export function objectToArray(obj) {
  if(obj.constructor != Object) {
    return 'obj is not Object'
  };
  return Object.values(obj);
};


export function getEven(arr) {
  if(!Array.isArray(arr)) {
    return 'Arr is not array';
  };
  return arr.filter((item) => !(item % 2));
};


export function getOdd(arr) {
  if(!Array.isArray(arr)) {
    return 'Arr is not array';
  };
  return arr.filter((item) => item % 2);
};


export function arrayToObject(arr) {
  if(!Array.isArray(arr)) {
    return 'Arr is not array';
  };
  return arr.reduce((obj, item) => {
    obj[item] = item;

    return obj;
  }, {});
};


export function sum(a) {
  return function (b) {
    if(isNaN(a) || isNaN(b)) {
      return 'a or b is not number'
    };
    return a + b;
  };
};


export function makeAction(a, b) {
  if(isNaN(a) || isNaN(b)) {
    return 'a or b is not number'
  };
  return action(a, b);
};

export function action (a, b) {
  return a + b;
};

// почитать про beforeEach/beforeAll/afterEach/afterAll
// не поняла инфо про beforeEach и подобное, как их использовать
