//describe -> it -> expect

import { getValue, substract, quotient, randomInRage, capitalize, arrayToString, invitation } from '../hometask';
import { copyArray, copyObject, objectToArray, getEven, getOdd, arrayToObject, sum, makeAction } from '../hometask';


describe('Return value', () => {
    it('should return value', () => {
        expect(getValue(9)).toBeTruthy();
    });
});

describe('Math operations', () => {
    describe('result subtraction', () => {
        it('should return result subtraction', () => {
            expect(substract(15, 9)).toBe(6);
        });
    });
    describe('division result', () => {
        it('should return division result', () => {
            expect(quotient(25, 2.5)).toBeCloseTo(10);
        });
    });
    describe('random result', () => {
        it('should return random result', () => {
            expect(randomInRage(2, 6)).toBeLessThan(10);
            expect(randomInRage(2, 9)).toBeGreaterThan(2);
        });
    });
});

describe('String', () => {
    it('should return result after string operation', () => {
        expect(capitalize('polina')).toMatch('Polina');
    });
});

describe('Array to string', () => {
    it('should return result after arrays operation', () => {
        expect(arrayToString(['polina', 'vasya', 'julia'], '-')).toContain("polina-vasya-julia");
    });
});

describe('invitation for user', () => {
    it('should return result string with users name and age', () => {
        const user = {
            name: "Polina",
            age: 25,
        };
        expect(invitation(user)).toBe('Hello! My name is Polina. I am 25');
        expect(invitation(user)).toContain('Hello! My name is Polina. I am 25');
    });
});

describe('copy', () => {
    describe('return copy array', () => {
        it('should return copy array', () => {
            expect(copyArray([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        });
    });
    describe('return copy object', () => {
        it('should return copy object', () => {
            const obj = {
                name: "Polina",
                surname: "Shagoiko",
            };
            expect(copyObject(obj)).toEqual({ name: "Polina", surname: "Shagoiko" });
        });
    });
});

describe('Object to array', () => {
    it('should return object to array result ', () => {
        const obj = {
            name: "Polina",
            age: 25,
        };
        const arr = ["Polina", 25];
        expect(objectToArray(obj)).toEqual(arr);
    });
});

describe('return array after %', () => {
    describe('Return array with whole numbers', () => {
        it('should return array with whole numbers', () => {
            expect(getEven([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([2, 4, 6, 8]);
        });
    });
    describe('Return array with numbers containing remainder after division', () => {
        it('should return array with numbers containing  remainder after division', () => {
            const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect(getOdd(arr)).toEqual([1, 3, 5, 7, 9]);
        });
    });
});

describe('Array to object', () => {
    it('should return result array to object', () => {
        expect(arrayToObject(["Polina", "Female", 25, "Zhodino"])).toEqual({ Polina: "Polina", Female: "Female", 25: 25, Zhodino: "Zhodino" });
    });
});

describe('Return sum', () => {
    it('should return sum', () => {
        expect(sum(2.5)(3.6)).toBeCloseTo(6.1);
    });
});

describe('Make action', () => {
    it('should return result after multiplication', () => {
        const multiplication = (a, b) => {
            return a * b;
        }
        expect(makeAction(multiplication, 4, 2)).toBe(8);
    });
});