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
} from "../index";

describe("getValue", () => {
  it("should return the same value", () => {
    const user = {
      name: "Nick",
    };

    expect(getValue(4)).toBe(4);
    expect(getValue("qweqwe")).toBe("qweqwe");
    expect(getValue([1, 2, 3])).toEqual([1, 2, 3]);
    expect(getValue(user)).toEqual(user);
  });
});

describe("substract", () => {
  it("should calculate values correctly", () => {
    expect(substract(4, 2)).toBe(2);
  });
  it("should calculate values correctly comparing to others values", () => {
    expect(substract(10, 5)).toBeGreaterThan(4);
    expect(substract(10, 5)).toBeGreaterThanOrEqual(5);
    expect(substract(10, 5)).toBeLessThan(6);
    expect(substract(10, 5)).toBeLessThanOrEqual(5);
  });
  it("should calculate float values correctly", () => {
    expect(substract(0.7, 0.3)).toBeCloseTo(0.4);
  });
});

describe("quotient", () => {
  it("should calculate values correctly", () => {
    expect(quotient(8, 2)).toBe(4);
    expect(quotient(10, 3)).toBeCloseTo(3.33);
  });
});

describe("randomInRage", () => {
  it("should return random number", () => {
    expect(randomInRage(2, 10)).toBeGreaterThanOrEqual(2);
    expect(randomInRage(2, 10)).toBeLessThanOrEqual(10);
  });
});

describe("capitalize", () => {
  it("should return a string with the first capital letter", () => {
    expect(capitalize("qweqwe")).toMatch("Qweqwe");
  });
});

describe("arrayToString", () => {
  it("should convert the array to string with divider", () => {
    expect(arrayToString([1, 2, "qwe", 4], ";")).toMatch("1;2;qwe;4");
  });
});

describe("invitation", () => {
  it("should return some info about user", () => {
    const user = {
      name: "Nana",
      age: 25,
    };

    expect(invitation(user)).toMatch("Hello! My name is Nana. I am 25");
  });
});

describe("copyArray", () => {
  it("should return a new array containing a copy of the original array.", () => {
    const arr = [1, 2, 3, 4, 5];

    expect(copyArray(arr)).toEqual(arr);
    expect(copyArray(arr)).not.toBe(arr);
  });
});

describe("copyObject", () => {
  it("should return a shallow copy of the object", () => {
    const obj = {
      1: "qwe",
      2: "ewq",
    };

    expect(copyObject(obj)).toEqual(obj);
    expect(copyObject(obj)).not.toBe(obj);
  });
});

describe("objectToArray", () => {
  it("should return an array of values of the enumerable properties of the object", () => {
    const obj = {
      a: "qwe",
      b: 42,
      c: false,
    };

    expect(objectToArray(obj)).toEqual(["qwe", 42, false]);
  });
});

describe("getEven", () => {
  it("should return only even numbers", () => {
    const arr = [1, 2, 3, 4, 5, 6];

    expect(getEven(arr)).toEqual([2, 4, 6]);
  });
});

describe("getOdd", () => {
  it("should return only odd numbers", () => {
    const arr = [1, 2, 3, 4, 5, 6];

    expect(getOdd(arr)).toEqual([1, 3, 5]);
  });
});

describe("arrayToObject", () => {
  it("should return an object from array", () => {
    const arr = [1, 2, 3, "qwe"];

    expect(arrayToObject(arr)).toEqual({ 1: 1, 2: 2, 3: 3, qwe: "qwe" });
  });
});

describe("sum", () => {
  it("should calculate values correctly", () => {
    expect(sum(5)(2)).toBe(7);
  });
  it("should calculate float values correctly", () => {
    expect(sum(0.1)(0.2)).toBeCloseTo(0.3);
  });
});

describe("makeAction", () => {
  it("should call a function and return a result", () => {
    expect(makeAction(substract, 7, 4)).toBe(3);
  });
});
