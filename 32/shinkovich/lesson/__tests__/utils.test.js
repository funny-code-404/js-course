import {
	getValue, substract, quotient, capitalize, arrayToString, invitation,
	copyArray, copyObject, objectToArray, getEven, getOdd, arrayToObject, sum, makeAction
} from '../utils';


//substract
describe('substract', () => {
	describe('substract integer values correctly', () => {
		it('shouldreturn a-b ', () => {
			let a = 6;
			let b = 2;
			expect(substract(a, b)).toBeGreaterThan(3);
			expect(substract(a, b)).toBeGreaterThanOrEqual(3.5);
			expect(substract(a, b)).toBeLessThan(5);
			expect(substract(a, b)).toBeLessThanOrEqual(4.5);
			expect(substract(a, b)).toBe(4);
			expect(substract(a, b)).toEqual(4);
		})
	})
});

//capitalize
describe('capitalize', () => {
	describe('when str.toUppercase', () => {
		it('should return capitalized first letter ', () => {
			let str = 'hello';
			let result = 'Hello';
			expect(capitalize(str)).toMatch(result);
		})
	})
});
//getValue
describe('getValue', () => {
	it('should return a', () => {
		let a = 5;
		expect(getValue(a)).toEqual(a);
	})
});

// quotient
test('should return a / b', () => {
	expect(quotient(10, 0)).not.toBeFinite(Infinity);
	expect(quotient(10, 2)).toBe(5);
	expect(quotient(4, 3)).toBeCloseTo(1.33);
});

// arrayToString
test('should return  string', () => {
	let arrString = ['string'];
	let result = 'string';
	expect(arrayToString(arrString)).toBeString(result);
});

describe("invitation", () => {
	it("should return  info about user", () => {
		let user = {
			name: "Stassy",
			age: 29,
		};
		expect(invitation(user)).toMatch("Hello! My name is Stassy. I am 29");
		expect(user).toContainAllKeys(['name', 'age']);
	});
});

test('should return copy of array', () => {
	let arr = [1, 2, 3]
	expect(copyArray(arr)).toBeArray();
	expect(copyArray(arr)).toBeArrayOfSize(3);
	expect(copyArray(arr)).toIncludeAllMembers([1, 2, 3]);
});

test('should return copy of object', () => {
	let obj = { name: 'Nastya' };
	expect(copyObject(obj)).toBeObject();
	expect(obj).toContainKey('name');
	expect(obj).toContainEntry(['name', 'Nastya']);
});

// ObjectToArray
test('should transform object to []', () => {
	let obj = { name: 'Nastya' };
	expect(objectToArray(obj)).toBeArray();;
});

describe("getEven", () => {
	it("should return only even numbers", () => {
		let arr = [1, 2, 3, 4, 5, 6, 7];
		expect(getEven(arr)).toEqual([2, 4, 6]);
	});
});

test('should return an odd number', () => {
	let arr = [1, 2, 3, 4, 5, 6, 7];
	expect(getOdd(arr)).toIncludeAllMembers([1, 3, 5, 7]);
});

// arrayToObject
test('should return object', () => {
	let arr = [1, 's', 2, 'a', 3, 'b', 4, 'c', 5, 'd', 6];
	expect(arrayToObject(arr)).toBeObject();
});


describe("sum", () => {
	it("should calculate values correctly", () => {
		expect(sum(1)(3)).toBeNumber();
	});
	it("should calculate float values correctly", () => {
		expect(sum(0.2)(0.3)).toBeCloseTo(0.5);
	});
	it("should checking if sum is a Function", () => {
		expect(sum).toBeFunction();
	});
});

describe("makeAction", () => {
	it("should call a function and return a result", () => {
		function test(a, b) {

			return a + b;
		}
		expect(makeAction(test, '1', 2)).toBe('12');
	});
});













/* // describe -> it -> expect

//describe('My first test', () => {
// describe('primitive types', () => {
//   it('should calculate integer values correctly (toBe)', () => {
//     expect(1 + 2).toBe(3);
//   });
//   it('should calculate double values correctly (toBeCloseTo)', () => {
//     expect(0.1 + 0.2).toBeCloseTo(0.3);
//   });
//   it('should calculate non-equality correctly (toBeLessThan)', () => {
//     expect(1).toBeLessThan(5);
//   });
//   it('should calculate non-equality correctly (toBeGreaterThan)', () => {
//     expect(10).toBeGreaterThan(5);
//   });
//   it('should calculate non-equality correctly (toBeLessThanOrEqual)', () => {
//     expect(1).toBeLessThanOrEqual(5);
//     expect(5).toBeLessThanOrEqual(5);
//   });
//   it('should calculate non-equality correctly (toBeGreaterThanOrEqual)', () => {
//     expect(10).toBeGreaterThanOrEqual(5);
//     expect(5).toBeGreaterThanOrEqual(5);
//   });
//   it('NaN', () => {
//     expect(3 / 'eqweqwe').toBeNaN();
//   });
//   it('null', () => {
//     const user = null;

//     expect(user).toBeNull();
//   });
//   it('undefined', () => {
//     const user = {
//       name: 'Jane',
//     };

//     let admin;

//     expect(user).toBeDefined();
//     expect(admin).not.toBeDefined();
//     expect(admin).toBeUndefined();
//   });

//   it('to be truthy', () => {
//     expect([]).toBeTruthy();
//   });
//   it('to be falsy', () => {
//     expect(0).toBeFalsy();
//   });
// });

// describe('non primitive types', () => {
//   it('array and objects equality', () => {
//     const arr1 = [1, 2, 3, 4, 5];
//     const arr2 = [1, 2, 3, 4, 5];

//     expect(arr1).toEqual(arr2);

//     const obj1 = {
//       name: 'Pit',
//     };

//     const obj2 = {
//       name: 'Pit',
//     };

//     expect(obj1).toEqual(obj2);
//   });

//   it('contains value', () => {
//     const arr = [1, 2, 3, 4, 5];

//     expect(arr).toContain(3);
//   });

//   it('to Contain Equal', () => {
//     const users = [
//       {
//         name: 'Ann',
//       },
//       {
//         name: 'Jane',
//       },
//     ];

//     const findingUser = {
//       name: 'Ann',
//     };

//     expect(users).toContainEqual(findingUser);

//     const arr = [1, 2, 3];
//     const findingValue = 3;

//     expect(arr).toContainEqual(findingValue);
//   });

//   it('to Have Length', () => {
//     const data = [10, 20, 'data'];

//     expect(data).toHaveLength(3);
//   });
// });

/* describe('advanced', () => {
	const mes = 'Error';

	function getError() {
		throw new Error(mes);
	}

	it('should throw error', () => {
		expect(getError).toThrow();
	});
	it('should throw instance of Error', () => {
		expect(getError).toThrow(Error);
	});
	it('should throw with message', () => {
		expect(getError).toThrow(mes);
	});
	it('should throw with regex', () => {
		expect(getError).toThrow(/error/gi);
	});
});
}); */

/* describe('getArea', () => {
	let noSolutionsString;

	beforeEach(() => {
		noSolutionsString = 'No solutions';
	});

	describe('when r is defined and truthy', () => {
		it('then should return correct radius', () => {
			const r = 10;

			expect(getArea(r)).toBeCloseTo(314.159265);
		});
	});

	describe('when r is 0', () => {
		it('then should return 0', () => {
			expect(getArea(0)).toBe(0);
		});
	});

	describe('when r is less than 0', () => {
		it('then should return error message', () => {
			const r = -10;

			expect(getArea(r)).toBe(noSolutionsString);
		});
	});

	describe('when r is undefined', () => {
		it('then should return error message', () => {
			expect(getArea()).toBe(noSolutionsString);
		});
	});
});

describe('sayHello', () => {
	describe('when age is string', () => {
		it('then ', () => {
			const val = 'sdasdasdas';

			expect(typeof val).toBe('number');
		});
	});
});
 */

/* test('fetchData', async () => {
	const data = await fetchData();

	expect(data).toBe(5);
}); */