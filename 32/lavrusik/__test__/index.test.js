import {
   messege, getValue, substract, quotient, randomInRage, capitalize,
   arrayToString, invitation, copyArray,copyObject,objectToArray,getEven,getOdd,arrayToObject,sum} from "../index";

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
      expect(substract(undefined)).toEqual(messege);
      expect(substract(10, 5)).toBe(5);
      expect(substract(null, 10)).toEqual(messege);
      expect(substract(75, NaN)).toEqual(messege);
      expect(substract(20, 30)).toBe(-10);
   })
})
describe('test function quotient',() => {
   it('should return currect value',() => {
      expect(quotient(undefined)).toEqual(messege);
      expect(quotient(10, 0)).toBe(messege);
      expect(quotient(null, 20)).toBe(messege)
      expect(quotient(20, 10)).toBe(2);
   })
})
describe('test function randomInRage',() => {
   it('should return currect value',() => {
      expect(randomInRage(undefined)).toBe(messege);
      expect(randomInRage(100, 200)).toBeGreaterThanOrEqual(100);
      expect(randomInRage(100, 200)).toBeLessThanOrEqual(200);
      expect(randomInRage(200, 100)).toEqual(messege);
   })
})
describe('test function capitalize',() => {
   it('should return currect value',() => {
      expect(capitalize('undefined')).toEqual('Undefined');
      expect(capitalize(undefined)).toEqual(messege);
      expect(capitalize(45678)).toEqual(messege);
      
   })
})
describe('test function arrayToString',() => {
   it('should return currect value',() => {
      expect(arrayToString([1, 2, 3], " and ")).toEqual('1 and 2 and 3');
      expect(arrayToString(1, true)).toEqual(messege);
      expect(arrayToString([], ' and ')).toEqual(messege);
   })
})
describe('test function invitation',() => {
   it('should return currect value',() => {
      expect(invitation({
         name: 'John',
         age: 20,
      })).toEqual("Hello! My name is John. I am 20");
      expect(invitation({name:'Jonh'})).toEqual(messege);
      expect(invitation({})).toEqual(messege);
   })
})
describe('test function copyArray',() => {
   it('should return currect value',() => {
      expect(copyArray([1,2,3,4])).toEqual([1,2,3,4]);
      expect(copyArray(123)).toEqual(messege);
      expect(copyArray('str')).toEqual(messege);
   })
})
describe('test function copyObject',() => {
   it('should return currect value',() => {
      expect(copyObject([1,2,3,4])).toEqual(messege);
      expect(copyObject(123)).toEqual(messege);
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
      expect(objectToArray([1, 2, 3, 4, 5])).toEqual(messege);
      expect(objectToArray('str')).toBe(messege);
   })
})
describe('test function getEven', () => {
   it('should return currect value', () => {
      expect(getEven([1, 2, 3, 4, 5, 6, 7, 8, 9,0])).toEqual([2, 4, 6, 8,0])
      expect(getEven('str')).toBe(messege);
      expect(getEven(123)).toBe(messege);
   })
})
describe('test function getOdd', () => {
   it('should return currect value', () => {
      expect(getOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual([1, 3, 5, 7, 9]);
      expect(getOdd('str')).toBe(messege);
      expect(getOdd(123)).toBe(messege);
   })
})
describe('test function arrayToObject', () => {
   it('should return currect value', () => {
      expect(arrayToObject(['name', 'age'])).toEqual({ name: 'name', age: 'age', });
      expect(arrayToObject(123)).toBe(messege);
      expect(arrayToObject('str')).toBe(messege);
   })
})
describe('test function sum', () => {
   it('should return currect value', () => {
      expect(sum(10)).toBe(20);
   })
})

