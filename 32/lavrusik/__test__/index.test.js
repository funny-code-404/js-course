import {
   getValue, substract, quotient, randomInRage, capitalize,
   arrayToString, invitation, copyArray,copyObject,objectToArray,getEven,getOdd,arrayToObject} from "../index";
let a = null;
beforeEach(() => {
   a = 'You enter not currect value';
})
afterEach(() => {
   a = null;
})
describe('test function getvalue',() => {
   it('should return currect value',() => {
      expect(getValue(true)).toEqual(true);
      expect(getValue('str')).toEqual('str');
      expect(getValue(10)).toEqual(10);
      expect(getValue(undefined)).toEqual(undefined);
      expect(getValue(NaN)).toBeNaN();
      expect(getValue(null)).toBeNull();
   })
})
describe('test function substract',() => {
   it('should return currect value',() => {
      expect(substract(undefined)).toBe(a);
      expect(substract(10, 5)).toBe(5);
      expect(substract(null, 10)).toBe(a);
      expect(substract(75, NaN)).toBe(a);
      expect(substract(20, 30)).toBe(-10);
   })
})
describe('test function quotient',() => {
   it('should return currect value',() => {
      expect(quotient(undefined)).toBe(a);
      expect(quotient(10, 0)).toBe(a);
      expect(quotient(null, 20)).toBe(a)
      expect(quotient(20, 10)).toBe(2);
   })
})
describe('test function randomInRage',() => {
   it('should return currect value',() => {
      expect(randomInRage(undefined)).toBe(a);
      expect(randomInRage(100, 200)).toBeGreaterThanOrEqual(100);
      expect(randomInRage(100, 200)).toBeLessThanOrEqual(200);
      expect(randomInRage(200, 100)).toBe(a);
   })
})
describe('test function capitalize',() => {
   it('should return currect value',() => {
      expect(capitalize('undefined')).toEqual('Undefined');
      expect(capitalize(undefined)).toBe(a);
      expect(capitalize(45678)).toBe(a);
      
   })
})
describe('test function arrayToString',() => {
   it('should return currect value',() => {
      expect(arrayToString([1, 2, 3], " and ")).toEqual('1 and 2 and 3');
      expect(arrayToString(1, true)).toBe(a);
      expect(arrayToString([], ' and ')).toBe(a);
   })
})
describe('test function invitation',() => {
   it('should return currect value',() => {
      expect(invitation({
         name: 'John',
         age: 20,
      })).toEqual("Hello! My name is John. I am 20");
      expect(invitation({name:'Jonh'})).toBe(a);
      expect(invitation({})).toBe(a);
   })
})
describe('test function copyArray',() => {
   it('should return currect value',() => {
      expect(copyArray([1,2,3,4])).toEqual([1,2,3,4]);
      expect(copyArray(123)).toBe(a);
      expect(copyArray('str')).toBe(a);
   })
})
describe('test function copyObject',() => {
   it('should return currect value',() => {
      expect(copyObject([1,2,3,4])).toBe(a);
      expect(copyObject(123)).toBe(a);
      expect(copyObject({
         name: 'Jonh',
         age:20,
      })).toEqual({
         name: 'Jonh',
         age:20,
      });
   })
})
describe('test function objectToArray',() => {
   it('should return currect value', () => {
      expect(objectToArray({
         name: 'Jonh',
         age: 23,
      })).toStrictEqual(['Jonh', 23]);
      expect(objectToArray([1, 2, 3, 4, 5])).toBe(a);
      expect(objectToArray('str')).toBe(a);
   })
})
describe('test function getEven', () => {
   it('should return currect value', () => {
      expect(getEven([1, 2, 3, 4, 5, 6, 7, 8, 9,0])).toEqual([2, 4, 6, 8,0])
      expect(getEven('str')).toBe(a);
      expect(getEven(123)).toBe(a);
   })
})
describe('test function getOdd', () => {
   it('should return currect value', () => {
      expect(getOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual([1, 3, 5, 7, 9]);
      expect(getOdd('str')).toBe(a);
      expect(getOdd(123)).toBe(a);
   })
})
describe('test function arrayToObject', () => {
   it('should return currect value', () => {
      expect(arrayToObject(['name', 'age'])).toEqual({ name: 'name', age: 'age', });
      expect(arrayToObject(123)).toBe(a);
      expect(arrayToObject('str')).toBe(a);
   })
})


