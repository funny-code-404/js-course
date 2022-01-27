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
} from "../index.js";

describe("getValue", () => {
  it("should return the same value", () => {
    const user = {
      name: "John",
    };
    expect(getValue(10)).toBe(10);
    expect(getValue("zxcvb")).toBe("zxcvb");
    expect(getValue([1, 2, 3])).toEqual([1, 2, 3]);
    expect(getValue(user)).toEqual(user);
  });
});

describe("substract", () => {
  it("should calculate values correctly", () => {
    expect(substract(10, 5)).toBe(5);
  });
  it("correct calculation of values", () => {
    expect(substract(10, 5)).toBeGreaterThan(1);
    expect(substract(10, 5)).toBeGreaterThanOrEqual(5);
    expect(substract(10, 5)).toBeLessThan(8);
    expect(substract(10, 5)).toBeLessThanOrEqual(5);
  });
  it(" float values correctly", () => {
    expect(substract(0.3, 0.1)).toBeCloseTo(0.2);
  });
});

describe("quotient", () => {
  it("calculate values correctly", () => {
    expect(quotient(10, 2)).toBe(5);
    expect(quotient(12, 3)).toBe(4);
  });
});

describe("randomInRage", () => {
  it("return random number", () => {
    expect(randomInRage(5, 10)).toBeGreaterThanOrEqual(5);
    expect(randomInRage(5, 10)).toBeLessThanOrEqual(10);
  });
});

describe("capitalize", () => {
  it("return a string with the first capital letter", () => {
    expect(capitalize("zxcvb")).toMatch("Zxcvb");
  });
});

describe("arrayToString", () => {
  it("returning a string from an array", () => {
    expect(arrayToString([1, "John", "zxc", 4.5], "; ")).toMatch(
      "1; John; qwe; 4.5"
    );
  });
});

describe("invitation", () => {
  it("return info about user", () => {
    const user = {
      name: "John",
      age: 23,
    };
    expect(invitation(user)).toMatch("Hello! My name is John. I am 23");
  });
});

describe("copyArray", () => {
  it("returning a new copied array", () => {
    const arr = [1, 2, 3, 4, 5];

    expect(copyArray(arr)).toEqual(arr);
    expect(copyArray(arr)).not.toBe(arr);
  });
});

describe("copyObject", () => {
  it("return copy of an object", () => {
    const obj = {
      name: "John",
      age: 23,
    };
    expect(copyObject(obj)).toEqual(obj);
    expect(copyObject(obj)).not.toBe(obj);
  });
});

describe("objectToArray", () => {
  it("turns an object into an array", () => {
    const obj = {
      name: "John",
      age: 23,
    };
    expect(objectToArray(obj)).toEqual(["John", 23]);
  });
});

describe("getEven", () => {
  it("return only even numbers", () => {
    const arr = [1, 2, 3, 4, 5, 6];

    expect(getEven(arr)).toEqual([2, 4, 6]);
    expect(getEven(arr)).not.toEqual([1, 3, 5]);
  });
});

describe("getOdd", () => {
  it("return only odd numbers", () => {
    const arr = [1, 2, 3, 4, 5, 6];

    expect(getOdd(arr)).toEqual([1, 3, 5]);
    expect(getOdd(arr)).not.toEqual([2, 4, 6]);
  });
});

describe("arrayToObject", () => {
  it("return an object from array", () => {
    const arr = [1, 2, 3, "John"];

    expect(arrayToObject(arr)).toEqual({ 1: 1, 2: 2, 3: 3, John: "John" });
  });
});

describe("sum", () => {
  it("calculate values correctly", () => {
    expect(sum(10)(5)).toBe(15);
  });
  it("calculate float values correctly", () => {
    expect(sum(0.2)(0.3)).toBeCloseTo(0.5);
  });
});

describe("makeAction", () => {
  it("call a function and return a result", () => {
    expect(makeAction(multiply, 10, 2)).toBe(20);
  });
});
