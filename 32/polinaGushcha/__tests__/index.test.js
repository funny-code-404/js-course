import { getValue, subtract, quotient, randomInRage, capitalize, arrayToString, invitation, copyArray, copyObject, objectToArray, getEven, getOdd, arrayToObject, sum, makeAction} from '../index.js';
describe('getValue', () => {
	it('should return a', () => {
		let a = 5;
		  expect(getValue(a)).toBe(a);
	});
});

// subtract
describe('subtract',() => {
  it ('should return a - b',() => {
    let a = 10;
    let b = 5;
    expect(subtract(a,b)).toBe(5)
  });
});

// quotient
describe('quotient',() => {
  it ('should return a/b',() => {
    let a = 15;
    let b = 3;
    expect(quotient(a,b)).toBe(5)
  });
});

//randomInRage

//capitalize
describe('capitalize',() => {
  it ('should capitalize',() => {
    let str = 'hi';
    let resoult = 'Hi';
    expect(capitalize(str)).toMatch(resoult)
  });
});

//arrayToString
describe('arrayToString',() => {
  it ('should array to string',() => {
    let arr = [10,100,11];
    let divider = "";
    expect(arrayToString(arr,divider)).toBe('1010011')
  });
});

//invitation 
describe('invitation',() => {
  it ('should user info',() => {
    let user = {
      name : 'Mik',
      age : 33
    };
    const resoult = 'Hello! My name is Mik. I am 33';
    expect(invitation(user)).toMatch(resoult)
  });
});

//copyArray 
describe('copyArray', () => {
  it ('should copy array', () => {
    let arr = [1,1,2];
    const copyArr = [1,1,2]
    expect(copyArray(arr)).toEqual(copyArr)
  });
});

//copyObject
describe('copyObject',() => {
  it ('should copy object', () => {
    let obj = {
      qqq : 'qwe'
    }
    const copyObj = {
      qqq : 'qwe'
    }
    expect(copyObject(obj)).toEqual(copyObj)
  });
});

//objectToArray
describe('objectToArray', () => {
  it ('should object to array',() => {
    let obj = {
      qqq : 'qwe'
    }
    const arr = ['qwe']
    expect(objectToArray(obj)).toEqual(arr)
  })
});

//getEven 
describe('getEven', () => {
  it ('should even numbers',() => {
    const arr = [1,2,3,4,5]
    let resoult = [2,4]
    expect(getEven(arr)).toStrictEqual(resoult)
  })
});

//getOdd 
describe('getOdd', () => {
  it ('should odd numbers',() => {
    const arr = [1,2,3,4,5]
    let resoult = [1,3,5]
    expect(getOdd(arr)).toStrictEqual(resoult)
  })
});

//arrayToObject
describe('arrayToObject', () => {
  it ('should array to object',() => {
    let arr = [1,2]
    const obj = {
      1 : 1,
      2 : 2
    }
    expect(arrayToObject(arr)).toEqual(obj)
  })
});

//sum 
describe('sum',() => {
  it ('should sum a+b',() => {
    let a = 10;
    let b = 5;
    expect(sum(a)(b)).toBe(15)
  });
});

//makeAction
describe('makeAction', () => {
  it('should some action', () => {
   function share(a,b) {
    return a / b
  }

    let a = 10;
    let b = 2;
    expect(makeAction(share, a, b)).toBe(5);
    })
})