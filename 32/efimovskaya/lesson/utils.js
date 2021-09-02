export const substract = (a, b) => {
    if (b === 0 || isNaN(a) || isNaN(b) || a === "" || b === "") {
        return 'No solutions';
    }

    return a - b;
}

export const getValue = (a) => {
    if (a === undefined) {
        return 'No solutions';
    }

    if (typeof (a) === "string") {
        return a.trim()
    } else if (typeof (a) === "object") {
        for (let key in a) {
            console.log(`Key: ${key}  Value: ${a[key]}`)
        }
    }
    return a;
}

export const quotient = (a, b) => {
    if (b === 0 || isNaN(a) || isNaN(b) || a === "" || b === "") {
        return 'No solutions';
    }

    return a / b;
}

export const randomInRage = (min, max) => {
    if (isNaN(min) || isNaN(max) || min === "" || max === "") {
        return 'No solutions';
    }
    return Math.floor(Math.random() * (max - min) + min);
}

export const capitalize = (str) => {
    if (str === "") {
        return "It is empty string!"
    } else if (typeof (str) === "string") {
        const string = str.trim();
        return `${string[0].toUpperCase()}${string.slice(1)}`;
    } else {
        return "Uncorrectly value!"
    }
}

export const arrayToString = (arr, divider) => {
    if (Array.isArray(arr)) {
        return arr.join(divider);
    } else {
        return 'No solutions!';
    }
}


export function invitation(user) {

    return `Hello! My name is ${user.name}. I am ${user.age}`;
}

export function copyArray(arr) {
    return arr.slice(0);
}


export function copyObject(obj) {
    return {
        ...obj
    };
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