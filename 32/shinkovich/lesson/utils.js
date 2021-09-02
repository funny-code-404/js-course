export const substract = (a, b) => {
	return a - b;
}

export const capitalize = (str) => {

	return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export const getArea = (r) => {
	if (r === undefined || r < 0) {
		return 'No solutions';
	}

	return Math.PI * r ** 2;
};

export const fetchData = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(5);
		}, 300);
	});

export const sayHello = (age) => {

	if (age < 18) {
		return 'Hi';
	}

	return 'Hello';
};

export function getValue(a) {
	return a;
}

export function quotient(a, b) {
	return a / b;
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
