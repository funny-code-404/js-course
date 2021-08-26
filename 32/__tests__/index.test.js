import { expect, it } from "@jest/globals";
import { 
    getValue, 
    substract, 
    quotient, 
    randomInRage, 
    capitalize, 
    arrayToString, 
    invitation, 
    copyArray, 
    copyObject, 
    objectToArray, 
    getEven, 
    getOdd,
    arrayToObject,
    sum,
    makeAction,
} from "../index";

describe('getValue', () => {
    it('should return the same value', () => {
        expect(5).toBe(5);
        expect("string").toBe("string");
        expect([0,1,2]).toEqual([0,1,2]);
    });
});

describe('substract', () => {
    it('should return the result of substraction', () => {
        expect(5-4).toBe(1);
    });
    it('should work correctly with floating numbers', () => {
        expect(1.3-0.2).toBeCloseTo(1.1);
    });
});

describe('quotient', () => {
    it('should divide values correcly', () => {
        expect(20/4).toBe(5);
        expect(10/3).toBeCloseTo(3.33);
    });

    function divideByZero() {
        quotient(10,0);
    }
    it('should throw Error when divisor equals zero', () => {
        expect(divideByZero).toThrowError();
    });
});

describe('randomInRange', () => {
    it('should return a random number from the range given', () => {
        const a = 2,
              b = 8;

        expect(randomInRage(a, b)).toBeGreaterThan(a);
        expect(randomInRage(a, b)).toBeLessThan(b);
    });
});

describe('capitalize', () => {
    it('should return a string with the first letter capitalized', () => {
        const str = 'hello, is it me you\'re looking for?',
        result = 'Hello, is it me you\'re looking for?';

        expect(capitalize(str)).toBe(result);
    });
});

describe('arrayToString', () => {
    it('should return a string from an array joined by a divider given', () => {
        const arr = ['Kate', 'Mary', 'Max'];
        const divider = ', ';
        const result = 'Kate, Mary, Max';

        expect(arrayToString(arr, divider)).toBe(result);
    });
});

describe('invitation', () => {
    it('should return a string with invitation', () => {
        const user = {
            name: 'Mary',
            age: 18
        },
            result = 'Hello! My name is Mary. I am 18';

        expect(invitation(user)).toBe(result);
    });
});

describe('copyArray', () => {
    it('should copy an array', () => {
        const arr1 = ['Kate', 'Mary', 'Max'];
        const arr2 = ['Kate', 'Mary', 'Max'];

        expect(copyArray(arr1)).toEqual(arr2);
    });
});

describe('copyObject', () => {
    it('should copy an object', () => {
        const obj1 = {
            1: 'Kate',
            2: 'Mary',
            3: 'Max'
        };

        const obj2 = {
            1: 'Kate',
            2: 'Mary',
            3: 'Max'
        };

        expect(copyObject(obj1)).toEqual(obj2);
    });
});

describe('objectToArray', () => {
    it('should create an array from object values', () => {
        const obj = {
            1: 'Kate',
            2: 'Mary',
            3: 'Max'
        }

        const result = ['Kate', 'Mary', 'Max'];

        expect(objectToArray(obj)).toEqual(result);
    });
});

describe('getEven', () => {
    it('should filter an array with even integers', () => {
        const arr = [1, 2, 3, 4];
        const result = [2, 4];

        expect(getEven(arr)).toEqual(result);
    });
});

describe('getOdd', () => {
    it('should filter an array with odd integers', () => {
        const arr = [1, 2, 3, 4];
        const result = [1, 3];

        expect(getOdd(arr)).toEqual(result);
    });
});

describe('arrayToObject', () => {
    it('turn an array into an object', () => {
        const arr = ['a', 'b', 'c'];
        const obj = {
                  a: 'a',
                  b: 'b',
                  c: 'c'
              };

        expect(arrayToObject(arr)).toEqual(obj);
    });
});

describe('sum', () => {
    it('should sum integer values correctly', () => {
        expect(5+1).toBe(6);
        expect(124+1).toBe(125);
    });
    it('should sum double values correctly', () => {
        expect(0.1+0.2).toBeCloseTo(0.3);
    });
});

describe('makeAction', () => {
    it('should perform given function', () => {
        const a = 6;
        const b = 12;

        function sum(a,b) {
            return a + b;
        }

        expect(makeAction(sum, a, b)).toBe(18);
    });
});
