export function getValue(a) {
    if (a !== undefined) {
        return a;
    }
    return 'no solutions, enter value'
}

export function substract(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a - b;
    }
    return 'no solutions, enter number';
}

export function quotient(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a / b;
    }
    return 'no solutions, enter number';
}

export function randomInRage(min, max) {
    if (!isNaN(min) && !isNaN(max)) {
        return Math.random() * (max - min) + min;
    } return 'no solutions, enter number'
}

export function capitalize(str) {
    if (typeof str === 'string') {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    } else return 'no solutions, enter string'
}

export function arrayToString(arr, divider) {
    if (Array.isArray(arr) && arr.length && divider !== undefined) {
        return arr.join(divider);
    } else return 'no solutions';
}

export function invitation(user) {
    if (typeof user === 'object' && user !== null) {
        if (user.hasOwnProperty('name') && user.hasOwnProperty('age')) {
            return `Hello! My name is ${user.name}. I am ${user.age}`;
        }
    }
    return 'no solutions, enter correct object'
}

export function copyArray(arr) {
    if (Array.isArray(arr) && arr.length) {
        return arr.slice(0);
    }
    return 'no solutions, enter array'
}

export function copyObject(obj) {
    if (typeof obj === 'object' && obj !== null && Object.keys(obj).length !== 0) {
        return {...obj};
    }
    return 'no solutions, enter object'
}

export function objectToArray(obj) {
    if (typeof obj === 'object' && Object.keys(obj).length !== 0) {
        return Object.values(obj);
    }
    return 'no solutions, enter object'
}


export function getEven(arr) {
    if (Array.isArray(arr) && arr.length) {
        return arr.filter((item) => !(item % 2));
    }
    return "no solution, enter correct array"
}

export function getOdd(arr) {
    if (Array.isArray(arr) && arr.length) {
        return arr.filter((item) => item % 2);
    }
    return "no solution, enter correct array"
}

export function arrayToObject(arr) {
    if (Array.isArray(arr) && arr.length) {
        return arr.reduce((obj, item) => {
            obj[item] = item;

            return obj;
        }, {});
    }
    return 'no solutions, enter correct array'
}

export function sum(a) {
    return function (b) {
        if ((a !== undefined && b !== undefined) && (!isNaN(a) && !isNaN(b))){
            return a + b;
        }
        return "no solutions"
    };
}

export function makeAction(action, a, b) {
    /* if (typeof action === "function" && a !== undefined && b !== undefined){*/
    return action(a, b);
    /*}
    return "no solutions"*/
}

// почитать про beforeEach/beforeAll/afterEach/afterAll