import {
    describe,
    expect,
    it
} from '@jest/globals';
import {
    substract,
    getValue,
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
    makeAction
} from '../utils';

// Тест SUBSCTRACT
describe('substract', () => {
    let noSolutionsString;

    beforeEach(() => {
        noSolutionsString = 'No solutions';
    });

    describe('when a and b are integer', () => {
        it('should calculate integer values correctly (toBe)', () => {
            const a = 5;
            const b = 3;
            expect(substract(a, b)).toBe(2);
        });
    });

    describe('when a and b are float', () => {
        it('should calculate double values correctly (toBeCloseTo)', () => {
            const a = 5.5;
            const b = 2.3;
            expect(substract(a, b)).toBeCloseTo(3.2);
        });
    });

    describe('when a  are undefined', () => {
        it('should return error message', () => {
            const a = 1;

            expect(substract()).toBe(noSolutionsString);
            expect(substract(a)).toBe(noSolutionsString);
        });
    });

    describe('when a or b are string', () => {
        it('should return error message', () => {
            const a = 2;
            const b = "r";
            const c = "t";

            expect(substract(a - b)).toBe(noSolutionsString);
            expect(substract(c - a)).toBe(noSolutionsString);

        });
    });

    describe('when a or b are enpty string', () => {
        it('should return error message', () => {
            const a = "";
            const b = 3;
            const c = "";
            expect(substract(a - b)).toBe(noSolutionsString);
            expect(substract(b - c)).toBe(noSolutionsString);

        });
    });

});

// Тест getValue
describe('getValue', () => {
    let noSolutionsString;

    beforeEach(() => {
        noSolutionsString = 'No solutions';
    });

    describe('when a - integer', () => {
        it('should show integer value correctly (toBe)', () => {
            const a = 5;
            expect(getValue(a)).toBe(5);
        });
    });

    describe('when a - string', () => {
        it('should show string value correctly (toBe)', () => {
            const a = "abc";
            expect(getValue(a)).toBe("abc");
        });
    });


    describe('when a is undefined', () => {
        it('then should return error message', () => {
            expect(getValue()).toBe(noSolutionsString);
        });
    });


});

// тест quotient

describe('test  quotient', () => {
    let noSolutionsString;

    beforeEach(() => {
        noSolutionsString = 'No solutions';
    });
    describe("when b - 0", () => {
        it('then should return error message', () => {
            const a = 22;
            const b = 0;
            expect(quotient(a, b)).toBe(noSolutionsString);
        });

    });

    describe('when a and b are integer', () => {
        it('should calculate integer values correctly (toBe)', () => {
            const a = 6;
            const b = 3;
            expect(quotient(a, b)).toBe(2);
        });
    });

    describe('when a and b are float', () => {
        it('should calculate double values correctly (toBeCloseTo)', () => {
            const a = 6.6;
            const b = 2.2;
            expect(quotient(a, b)).toBeCloseTo(3);
        });
    });

    describe('when a and b undefined', () => {
        it('then should return error message', () => {
            expect(quotient()).toBe(noSolutionsString);
        });
    });

    describe('when a or b - NaN', () => {
        it('then should return error message', () => {
            const a = 4;
            const b = "fjvh";
            expect(a / b).toBeNaN();
        });
    });
});

// тест randomInRage

describe('randomInRage', () => {
    let noSolutionsString;

    beforeEach(() => {
        noSolutionsString = 'No solutions';
    });
    describe('when min and max undefined', () => {
        it('then should return error message', () => {
            expect(randomInRage()).toBe(noSolutionsString);
        });
    });

    describe('when min or max - NaN', () => {
        it('then should return error message', () => {
            const min = 4;
            const max = "fjvh";
            expect(randomInRage(min, max)).toBe(noSolutionsString);
        });
    });

})

// Тест capitalize

describe('capitalize', () => {

    describe('when value is string', () => {
        it('then ', () => {
            const value = 'abc';

            expect(capitalize(value)).toBe('Abc');
        });
    });

    describe('when value is string with gaps', () => {
        it('then ', () => {
            const value = '  abc  ';

            expect(capitalize(value)).toBe('Abc');
        });
    });

    describe('when value is empty string', () => {
        it('then should return "Uncorrectly value!"', () => {
            const value = "";
            const emptyString = "It is empty string!"

            expect(capitalize(value)).toBe(emptyString);
        });
    });

    describe('when value is undefined', () => {
        it('then should retun "Uncorrectly value!" ', () => {

            const uncorrectlyvalue = "Uncorrectly value!"

            expect(capitalize()).toBe(uncorrectlyvalue);
        });
    });

    describe('when value is number', () => {
        it('then should retun "Uncorrectly value!" ', () => {

            const number = 4;
            const uncorrectlyvalue = "Uncorrectly value!"

            expect(capitalize(number)).toBe(uncorrectlyvalue);
        });
    });

});

// тест arrayToString

describe('arrayToString', () => {
    describe('when array is array', () => {
        it('should return string', () => {
            const arr = [1, 2, 3, 4];
            const divider = "";
            expect(arrayToString(arr, divider)).toBe('1234');
        });
    });
    describe('when array is undefined', () => {
        it('should return no solutions', () => {
            let noSolutionsString = "No solutions!"
            expect(arrayToString()).toBe(noSolutionsString);
        });
    });
});

// тест invitation
describe('invitation', () => {
    describe("ivitation with user", () => {
        it('should return right invitation', () => {
            let user = {
                name: 'John',
                age: 20
            };
            const greet = `Hello! My name is John. I am 20`;

            expect(invitation(user)).toMatch(greet);
        });
    });

});

// тест copyArray
describe('copyArray', () => {
    it("should return copy of array", () => {
        const array = [1, 2, 3];
        const copyOfArray = [1, 2, 3];
        expect(copyArray(array)).toEqual(copyOfArray);
    });

});

// тест copyObject

describe('copyObject', () => {
    it('should return copy of object', () => {
        let object = {
            name: 'Julia'
        };
        const copyOfObject = {
            name: 'Julia'
        };
        expect(copyObject(object)).toEqual(copyOfObject);
    });
});

// тест objectToArray
describe('objectToArray', () => {
    it('should return object to array', () => {
        const object = {
            1: 1,
            2: 2,
            3: 3
        };
        const array = [1, 2, 3];
        expect(objectToArray(object)).toEqual(array);
    });

});

// тест getEven 
describe('getEven', () => {
    it('should be even numbers in array', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const filtredArray = [2, 4, 6, 8, 10];
        expect(getEven(array)).toEqual(filtredArray);
    });
});

//тест getOdd
describe('getOdd', () => {
    it('should be odd numbers in array', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const filtredArray = [1, 3, 5, 7, 9];
        expect(getOdd(array)).toEqual(filtredArray);
    });
});

// тест arrayToObject 
describe('arrayToObject', () => {
    it('should return array to object', () => {
        const object = {
            1: 1,
            2: 2,
            3: 3
        };
        const array = [1, 2, 3];
        expect(arrayToObject(array)).toEqual(object);
    });

});

// тест sum 
describe('sum', () => {
    it('should calculate integer values correctly (toBe)', () => {
        const a = 4;
        const b = 5;
        expect(sum(a)(b)).toBe(9);
    });
    it('should calculate double values correctly (toBeCloseTo)', () => {
        const a = 4.5;
        const b = 5.5;
        expect(sum(a)(b)).toBeCloseTo(10);
    });
});

// тест makeAction
describe('makeAction', () => {
    it('should be some action', () => {
        const a = 5;
        const b = 3;

        function substract(a, b) {
            return a - b;
        }

        expect(makeAction(substract, a, b)).toBe(2);
    })
})