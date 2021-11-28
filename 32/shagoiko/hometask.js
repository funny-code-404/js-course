export { getValue, substract, quotient, randomInRage, capitalize, arrayToString, invitation };
export { copyArray, copyObject, objectToArray, getEven, getOdd, arrayToObject, sum, makeAction };

//не везде ставила проверку на тип данных

function getValue(a) {
    if (!isNaN(a)) {
        return a;
    }
}

function substract(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a - b;
    }
}

function quotient(a, b) {
    if (b !== 0 && !isNaN(a) && !isNaN(b)) {
        return a / b;
    }
}

function randomInRage(min, max) {
    return Math.random() * (max - min) + min;
}

function capitalize(str) {
    if (typeof str === 'string') {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    }
}

function arrayToString(arr, divider) {
    if (Array.isArray(arr)) {
        return arr.join(divider);
    }
}

function invitation(user) {
    return `Hello! My name is ${user.name}. I am ${user.age}`;
}

function copyArray(arr) {
    return arr.slice(0);
}

function copyObject(obj) {
    return {...obj };
}

function objectToArray(obj) {
    return Object.values(obj);
}

function getEven(arr) {
    return arr.filter((item) => !(item % 2));
}

function getOdd(arr) {
    return arr.filter((item) => item % 2);
}

function arrayToObject(arr) {
    return arr.reduce((obj, item) => {
        obj[item] = item;

        return obj;
    }, {});
}

function sum(a) {
    return function(b) {
        return a + b;
    };
}

function makeAction(action, a, b) {
    return action(a, b);
}

// почитать про beforeEach/beforeAll/afterEach/afterAll