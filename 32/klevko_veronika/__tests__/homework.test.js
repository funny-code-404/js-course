import { getValue, substract, quotient, randomInRage, capitalize, arrayToString, copyArray, copyObject, getEven, invitation, objectToArray, getOdd, arrayToObject, sum, makeAction, action } from '../hometask';

describe ('describe', () => {
    it('should return correct value', () => {
        expect(getValue(5)).toBe(5);
    });
});


describe('substract', () => {
    describe('when arguments is numbers', () => {
        it('should return correct value', () => {
            expect(substract(3,2)).toBe(1);
        });
    });

    describe('when arguments is not numbers', () => {
        it('should return correct value', () => {
            const error = 'Error. This is not number';
            expect(substract('a', 2)).toBe(error);
        });
    });
});


describe('quotient', () => {
    describe('when arguments is numbers', () => {
        it('should return correct value', () => {
            expect(quotient(1,3)).toBe(0.3333333333333333);
        });
    });

    describe('when arguments is not numbers', () => {
        it('should return correct value', () => {
            const error = 'Error. This is not number';
            expect(quotient('a', 2)).toBe(error);
        });
    });
})


describe('randomInRage', () => {
    describe('when arguments is not numbers', () => {
        it('should return correct value', () => {
            expect(randomInRage(5, 10)).toBeLessThanOrEqual(10);
        });
    });

    describe('when arguments is not numbers', () => {
        it('should return correct value', () => {
            const error = 'Error. This is not number';
            expect(randomInRage('a', 2)).toBe(error);
        });
    });
});


describe('capitalize', () => {
    describe('when argument is string', () => {
        it('should return correct value', () => {
            expect(capitalize('hello')).toBe('Hello');
        });
    });

    describe('when argument is not string', () => {
        it('should return correct value', () => {
            const error = 'Should enter only letters!';
            expect(capitalize(123)).toBe(error);
        });
    });
});


describe ('arrayToString', () => {
    describe('when enter array correctly', () => {
        it('should return correct value', () => {
            expect(arrayToString([1,2,3], 'a')).toEqual('1a2a3');
        });
    });

    describe('when argument is not array', () => {
        it('should return correct value', () => {
            const error = 'Arr is not array';
            expect(arrayToString(1, 2)).toBe(error);
        });
    });
});


describe('copyArray', () => {
    describe('when array is correct', () => {
        it('should return correct array', () => {
            expect(copyArray([1,2,3])).toEqual([1,2,3]);
        });
    });

    describe('when array is not correct', () => {
        it('should return error message', () => {
            const error = 'Arr is not array';
            expect(copyArray(1)).toBe(error);
        });
    });
});


describe('copyObject', () => {
    it('return correct object', () => {
        expect(copyObject('name')).toEqual({0:'n', 1:'a', 2:'m', 3:'e'});
    });
});

describe('getEven', () => {
    describe('if arr is Array', () => {
        it('should return correct array', () => {
            expect(getEven([1,2,3,4,5,6])).toEqual([2,4,6])
        });
    });

    describe('if arr is not Array', () => {
        it('should return error message', () => {
            const error = 'Arr is not array';
            expect(getEven('1,2,3,4,5,6')).toBe(error)
        });
    });
});


describe('getOdd', () => {
    describe('if arr is Array', () => {
        it('should return correct array', () => {
            expect(getOdd([1,2,3,4,5,6])).toEqual([1,3,5])
        });
    });

    describe('if arr is not Array', () => {
        it('should return error message', () => {
            const error = 'Arr is not array';
            expect(getOdd('1,2,3,4,5,6')).toBe(error)
        });
    });
});


describe('invitation', () => {
    describe('if user contains name and age correct', () => {
        it('should return correct message', () => {
            expect(invitation({'name': 'Veronika', 'age' : 26})).toBe('Hello! My name is Veronika. I am 26');
        });
    });

    describe('if user do not contain name and age', () => {
        it('should return error message', () => {
            const error = 'user object do not contain name or age';
            expect(invitation({'name': 'Veronika'})).toBe(error);
        });
    });

    describe('if user age is not number', () => {
        it('should return error message', () => {
            const error = 'user age is not number';
            expect(invitation({'name' : 'Veronika', 'age' : 'twenty six'})).toBe(error);
        });
    });
});


describe('objectToArray', () => {
    describe('if object is correct object', () => {
        it('should return array', () => {
            expect(objectToArray({'name' : 'Veronika', 'city' : 'Minsk', 'age' : 26})).toEqual(['Veronika', 'Minsk', 26]);
        });
    });

    describe('if obg is not object', () => {
        it('should return error message', () => {
            const error = 'obj is not Object';
            expect(objectToArray([1,2,3])).toBe(error);
        });
    });
});


describe ('arrayToObject', () => {
    describe('if array is Array', () => {
        it('should return object', () => {
            expect(arrayToObject([1,2, 'a', 'b'])).toEqual({1: 1, 2: 2, 'a' : 'a', 'b' : 'b'});
        });
    });

    describe('if arr is not Array', () => {
        it('should return error message', () => {
            const error = 'Arr is not array';
            expect(arrayToObject({1:1})).toEqual(error);
        });
    });
});


describe('sum', () => {
    const sumA = sum(5);
    describe('sum is correct', () => {
        it('should return correct value', () => {
            expect(sumA(2)).toEqual(7);
        });
    });

    describe('if arguments are not numbers', () => {
        it('should return error message', () => {
            const error = 'a or b is not number';
            expect(sumA('a', 1)).toEqual(error);
        });
    });
});


describe('makeAction', () => {
    describe('when arguments are numbers', () => {
        it('should return correct value', () => {
            expect(makeAction(3, 4)).toEqual(7);
        });
    });

    describe('if arguments are not numbers', () => {
        it('should return error message', () => {
            const error = 'a or b is not number';
            expect(makeAction('a', 1)).toEqual(error);
        });
    });
});