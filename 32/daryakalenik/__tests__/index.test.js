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
    expect(substract(`dfgdfg`, 2)).toBe(`incorrect data`);
    expect(substract(NaN, NaN)).toBe(`incorrect data`);
  });
});

describe(`Quotient function test`, () => {
  it(`should return correct value`, () => {
    expect(quotient(4, 2)).toBe(2);
    expect(quotient(`erkdk`, 1)).toBe(`incorrect data`);
    expect(quotient(3, 0)).toBe(`incorrect data`);
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
    expect(randomInRange(`dgfdfgdfg`, 5)).toBe(`incorrect data`);
  });
  it(`should return correct value`, () => {
    expect(randomInRange(undefined, {})).toBe(`incorrect data`);
  });
});

describe(`Capitalize function test`, () => {
  it(`should return correct value`, () => {
    expect(capitalize(`one`)).toBe(`One`);
    expect(capitalize(2)).toBe(`incorrect data`);
    expect(capitalize([`one`])).toBe(`incorrect data`);
  });
});

describe(`ArrayToString function test`, () => {
  it(`should return correct value`, () => {
    expect(arrayToString([`dog`, `cat`, `monkey`], `, `)).toBe(
      `dog, cat, monkey`
    );
    expect(arrayToString(`dog`, ` `)).toBe(`incorrect data`);
    expect(arrayToString([`mouse`, `parrot`], {})).toBe(`incorrect data`);
  });
});

describe(`Invitation function test`, () => {
  it(`should return correct invitation`, () => {
    expect(invitation({ name: `John`, age: 15 })).toBe(
      `Hello! My name is John. I am 15`
    );
    expect(invitation({ name: [`Alex`, `John`], age: [23, 15] })).toBe(
      `incorrect data`
    );
    expect(invitation({ name: undefined, age: null })).toBe(`incorrect data`);
    expect(invitation({ name: ``, age: `five` })).toBe(`incorrect data`);
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
    expect(copyArray(`string`)).toBe(`incorrect data`);
  });
});

describe(`Copy Object function test`, () => {
  it(`should return correct object`, () => {
    expect(copyObject({ name: `Kate`, age: 25 })).toEqual({
      name: `Kate`,
      age: 25,
    });
    expect(copyObject([1, 2, 3])).toBe(`incorrect data`);
  });
  expect(copyObject(`one`)).toBe(`incorrect data`);
});

describe(`Object to Array function test`, () => {
  it(`should return correct array`, () => {
    expect(objectToArray({ name: `Kate`, age: 23 })).toEqual([`Kate`, 23]);
    expect(objectToArray([1, 2, 3])).toBe(`incorrect data`);
    expect(objectToArray(`hello`)).toBe(`incorrect data`);
  });
});

describe(`Get Even function test`, () => {
  it(`should return filtered array`, () => {
    expect(getEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(getEven([NaN, 2, 3, 4, `hello`, 6])).toBe(`incorrect data`);
    expect(getEven({ name: `Larisa` })).toBe(`incorrect data`);
  });
});

describe(`Get Odd function test`, () => {
  it(`should return filtered array`, () => {
    expect(getOdd([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
    expect(getOdd([NaN, 2, 3, 4, `hello`, 6])).toBe(`incorrect data`);
    expect(getOdd({ name: `Larisa` })).toBe(`incorrect data`);
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
    expect(arrayToObject(`Julia`)).toBe(`incorrect data`);
  });
});

describe(`Sum function test`, () => {
  it(`should return correct sum`, () => {
    expect(sum(2)(3)).toBe(5);
    expect(sum([], 2)).toBe(`incorrect data`);
    expect(sum(3)(undefined)).toBe(`incorrect data`);
  });
});

describe(`Make Action function test`, () => {
  it(`should return result of action`, () => {
    function multiplicate(a, b) {
      return a * b;
    }
    expect(makeAction(multiplicate, 2, 3)).toBe(6);
    expect(makeAction(multiplicate, null, [])).toBe(`incorrect data`);
  });
  it(`should return result of action`, () => {
    const obj = { name: `Petya`, age: 20 };
    expect(makeAction(obj, 2, 3)).toBe(`incorrect data`);
  });
});
