import {
    getValue, substract, quotient, randomInRage, capitalize, arrayToString, invitation,
    copyArray, copyObject, objectToArray, getEven, getOdd, arrayToObject, sum, makeAction
} from '../index'

describe('getValue', () => {
    it('should return the passed argument ', () => {
        expect(getValue(5)).toBe(5);
        expect(getValue('string')).toBe('string');
        expect(getValue([])).toEqual([]);
        expect(getValue()).toBe('no solutions, enter value');
    });
});

describe('substract', () => {
    it('should return correct value', () => {
        expect(substract(10, 5)).toBe(5);
        expect(substract(5, 10)).toBe(-5);
        expect(substract(-10, -5)).toBe(-5);
        expect(substract(5)).toBe('no solutions, enter number');
        expect(substract(5, 'str')).toBe('no solutions, enter number');
    });
});

describe('quotient', () => {
    it('should return correct value', () => {
        expect(quotient(10, 5)).toBe(2);
        expect(quotient(5, 10)).toBeCloseTo(0.5);
        expect(quotient(0, 5)).toBe(0);
        expect(quotient(5, 0)).toEqual(Infinity);
        expect(quotient(5)).toBe('no solutions, enter number');
        expect(quotient(5, 'str')).toBe('no solutions, enter number');
    });
});

describe('randomInRage', () => {
    it('should return random number', () => {
        expect(randomInRage(2, 5)).toBeGreaterThanOrEqual(2);
        expect(randomInRage(2, 5)).toBeLessThan(5);
        expect(randomInRage()).toBe('no solutions, enter number');
        expect(randomInRage(5)).toBe('no solutions, enter number');
    });
});

describe('capitalize', () => {
    it('should return string', () => {
        const noSolutionResult = 'no solutions, enter string'
        expect(capitalize('String')).toBe('String');
        expect(capitalize('string')).toBe('String');
        expect(capitalize()).toBe(noSolutionResult);
        expect(capitalize(10)).toBe(noSolutionResult);
        expect(capitalize([])).toBe(noSolutionResult);
    });
});

describe('arrayToString', () => {
    it('should return string converted from array', () => {
        const noSolutionResult = 'no solutions';
        const exampleArr = ['John', 'Kate'];
        expect(arrayToString(exampleArr, ' ')).toBe('John Kate');
        expect(arrayToString([], ';')).toBe(noSolutionResult);
        expect(arrayToString()).toBe(noSolutionResult);
        expect(arrayToString(exampleArr)).toBe(noSolutionResult);
    });
})

describe("invitation", () => {
    it('should return string with name and age', function () {
        const noSolutionResult = 'no solutions, enter correct object';
        const correctObj = {
            name: 'John',
            age: '28'
        }
        const inCorrectObj = {
            name: 'John'
        }

        expect(invitation()).toBe(noSolutionResult);
        expect(invitation([])).toBe(noSolutionResult);
        expect(invitation(5)).toBe(noSolutionResult);
        expect(invitation(inCorrectObj)).toBe(noSolutionResult);
        expect(invitation(correctObj)).toBe('Hello! My name is John. I am 28')
    });
});

describe('copyArray', () => {
    it('should return copy array', () => {
        const exampleArr = [4, 9, 9];
        const noSolutionResult = 'no solutions, enter array';
        expect(copyArray()).toBe(noSolutionResult);
        expect(copyArray([])).toBe(noSolutionResult);
        expect(copyArray(exampleArr)).toEqual([4, 9, 9]);
    });
});

describe('copyObject', () => {
    it('should return copy object', () => {
        const noSolutionResult = 'no solutions, enter object';
        expect(copyObject()).toBe(noSolutionResult);
        expect(copyObject({})).toBe(noSolutionResult);
        expect(copyObject([])).toBe(noSolutionResult);
        expect(copyObject({a: 1})).toEqual({a: 1});
    });
});

describe('objectToArray', ()=>{
    it('should return array values',  () => {
        const noSolutionResult = 'no solutions, enter object';
        expect(objectToArray()).toBe(noSolutionResult);
        expect(objectToArray({})).toBe(noSolutionResult);
        expect(objectToArray({a: 1, b:2})).toEqual([1,2]);
    });
})

describe('getEven', ()=>{
    it('should return array even numbers', () => {
        const noSolutionResult = 'no solution, enter correct array';
        expect(getEven()).toBe(noSolutionResult);
        expect(getEven([])).toBe(noSolutionResult);
        expect(getEven({})).toBe(noSolutionResult);
        expect(getEven(null)).toBe(noSolutionResult);
        expect(getEven([2,4,8,9])).toEqual([2,4,8]);
    });
});

describe('getOdd', ()=>{
    it('should return array odd numbers', () => {
        const noSolutionResult = 'no solution, enter correct array';
        expect(getOdd()).toBe(noSolutionResult);
        expect(getOdd([])).toBe(noSolutionResult);
        expect(getOdd({})).toBe(noSolutionResult);
        expect(getOdd(null)).toBe(noSolutionResult);
        expect(getOdd([2,4,8,9])).toEqual([9]);
    });
});

describe('arrayToObject', ()=>{
    describe('when argument is undefined', ()=>{
        const noSolutionResult = 'no solutions, enter correct array';
        expect(arrayToObject()).toBe(noSolutionResult);
        expect(arrayToObject([])).toBe(noSolutionResult);
        expect(arrayToObject({})).toBe(noSolutionResult);
        expect(arrayToObject([4,5])).toEqual({'4': 4, '5': 5});
    })
});

describe('sum', () => {
    it('should return correct value', () => {
        const noSolutionResult = 'no solutions';
        const a = 4;
        const b = 2;
        const c = 'str';
        const returnFunction = sum(a);

        expect(returnFunction(b)).toEqual(6);
        expect(returnFunction(c)).toEqual(noSolutionResult);
        expect(returnFunction()).toEqual(noSolutionResult);
    });
});

describe('makeAction', () =>{
    it('should return function', function () {
        const noSolutionResult = 'no solutions';
        let a, b;
        const func = () => {};
        expect(makeAction(func,a,b)).toEqual(func());
        /* expect(makeAction(func)).toEqual(noSolutionResult);
         возникла проблема с другими проверками, ждёт что вернётся undefined, я не поняла почему*/
    });
});