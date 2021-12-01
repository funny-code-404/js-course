import {
  getValue,
  substract,
  quotient,
  randomInRange,
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
let errorMessage = ``;
beforeEach(() => {
  errorMessage = `incorrect data`;
});

afterEach(() => {
  errorMessage = `jest methods practice`;
});

describe(`Get value function test`, () => {
  it(`should return correct value`, () => {
    expect(getValue(1)).toBe(1);
    expect(getValue([1, 2, 3])).toEqual([1, 2, 3]);
    expect(getValue(undefined)).toEqual(undefined);
  });
});

describe(`Substract function test`, () => {
  it(`should return correct value`, () => {
    expect(substract(1, 2)).toBe(-1);
    expect(substract(`dfgdfg`, 2)).toBe(errorMessage);
    expect(substract(NaN, NaN)).toBe(errorMessage);
  });
});

describe(`Quotient function test`, () => {
  it(`should return correct value`, () => {
    expect(quotient(4, 2)).toBe(2);
    expect(quotient(`erkdk`, 1)).toBe(errorMessage);
    expect(quotient(3, 0)).toBe(errorMessage);
  });
});

describe(`Random in range function test`, () => {
  it(`should return correct value`, () => {
    const min = 2;
    const max = 5;
    const randomNum = randomInRange(2, 5);
    expect(randomNum).toBeGreaterThan(min);
    expect(randomNum).toBeLessThan(max);
  });
  it(`should return correct value`, () => {
    expect(randomInRange(`dgfdfgdfg`, 5)).toBe(errorMessage);
  });
  it(`should return correct value`, () => {
    expect(randomInRange(undefined, {})).toBe(errorMessage);
  });
});

describe(`Capitalize function test`, () => {
  it(`should return correct value`, () => {
    expect(capitalize(`one`)).toBe(`One`);
    expect(capitalize(2)).toBe(errorMessage);
    expect(capitalize([`one`])).toBe(errorMessage);
  });
});

describe(`ArrayToString function test`, () => {
  it(`should return correct value`, () => {
    expect(arrayToString([`dog`, `cat`, `monkey`], `, `)).toBe(
      `dog, cat, monkey`
    );
    expect(arrayToString(`dog`, ` `)).toBe(errorMessage);
    expect(arrayToString([`mouse`, `parrot`], {})).toBe(errorMessage);
  });
});

describe(`Invitation function test`, () => {
  it(`should return correct invitation`, () => {
    expect(invitation({ name: `John`, age: 15 })).toBe(
      `Hello! My name is John. I am 15`
    );
    expect(invitation({ name: [`Alex`, `John`], age: [23, 15] })).toBe(
      errorMessage
    );
    expect(invitation({ name: undefined, age: null })).toBe(errorMessage);
    expect(invitation({ name: ``, age: `five` })).toBe(errorMessage);
  });
});

describe(`Copy Array function test`, () => {
  it(`should return correct array`, () => {
    expect(copyArray([1, 2, 3])).toEqual([1, 2, 3]);
    expect(
      copyArray([
        { name: `Ivan`, age: 21 },
        { name: `Petr`, age: 23 },
      ])
    ).toEqual([
      { name: `Ivan`, age: 21 },
      { name: `Petr`, age: 23 },
    ]);
    expect(copyArray(`string`)).toBe(errorMessage);
  });
});

describe(`Copy Object function test`, () => {
  it(`should return correct object`, () => {
    expect(copyObject({ name: `Kate`, age: 25 })).toEqual({
      name: `Kate`,
      age: 25,
    });
    expect(copyObject([1, 2, 3])).toBe(errorMessage);
    expect(copyObject(`one`)).toBe(errorMessage);
  });
});

describe(`Object to Array function test`, () => {
  it(`should return correct array`, () => {
    expect(objectToArray({ name: `Kate`, age: 23 })).toEqual([`Kate`, 23]);
    expect(objectToArray([1, 2, 3])).toBe(errorMessage);
    expect(objectToArray(`hello`)).toBe(errorMessage);
  });
});

describe(`Get Even function test`, () => {
  it(`should return filtered array`, () => {
    expect(getEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(getEven([NaN, 2, 3, 4, `hello`, 6])).toBe(errorMessage);
    expect(getEven({ name: `Larisa` })).toBe(errorMessage);
  });
});

describe(`Get Odd function test`, () => {
  it(`should return filtered array`, () => {
    expect(getOdd([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
    expect(getOdd([NaN, 2, 3, 4, `hello`, 6])).toBe(errorMessage);
    expect(getOdd({ name: `Larisa` })).toBe(errorMessage);
  });
});

describe(`Array to Object function test`, () => {
  it(`should return an object`, () => {
    expect(arrayToObject([1, 2, 3])).toEqual({ 1: 1, 2: 2, 3: 3 });
    expect(arrayToObject([`Masha`, `Liza`, `Katya`])).toEqual({
      Masha: `Masha`,
      Liza: `Liza`,
      Katya: `Katya`,
    });
    expect(arrayToObject(`Julia`)).toBe(errorMessage);
  });
});

describe(`Sum function test`, () => {
  it(`should return correct sum`, () => {
    expect(sum(2)(3)).toBe(5);
    expect(sum([], 2)).toBe(errorMessage);
    expect(sum(3)(undefined)).toBe(errorMessage);
  });
});

describe(`Make Action function test`, () => {
  it(`should return result of action`, () => {
    function multiplicate(a, b) {
      return a * b;
    }
    expect(makeAction(multiplicate, 2, 3)).toBe(6);
    expect(makeAction(multiplicate, null, [])).toBe(errorMessage);
  });
  it(`should return result of action`, () => {
    const obj = { name: `Petya`, age: 20 };
    expect(makeAction(obj, 2, 3)).toBe(errorMessage);
  });
});
