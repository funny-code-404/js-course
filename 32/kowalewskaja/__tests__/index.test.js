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
  it("should get value", () => {
    expect(getValue(10)).toBe(10);
    expect(getValue(-10)).toBe(-10);

    let num = 1,
        res = 1;
    expect(getValue(num)).toBe(res);
  });
});

describe("substract", () => {
  it("should a-b", () => {
    expect(substract(10, 7)).toBe(3);
    expect(substract(-10, -7)).toBe(-3);

    let num1 = 8,
        num2 = 7,
        res = 1;
    expect(substract(num1, num2)).toBe(res);

  });
});

describe("quotient", () => {
  it("should a/b", () => {
    expect(quotient(18, -9)).toBe(-2);
    expect(quotient(-10, 0)).toBe(-Infinity);
  });
});

describe("randomInRage", () => {
  it("numbers ", () => {
    expect(randomInRage(3, 7)).toBeGreaterThanOrEqual(3);
    expect(randomInRage(3, 7)).toBeLessThan(7);

    expect(randomInRage(-7, -3)).toBeGreaterThanOrEqual(-7);
    expect(randomInRage(-7, -3)).toBeLessThan(-3);

    expect(randomInRage(-3, -7)).toBeGreaterThanOrEqual(-7);
    expect(randomInRage(-3, -7)).toBeLessThan(-3);

    let num1 = 1,
        num2 = 7;
    expect(randomInRage(num1, num2)).toBeGreaterThanOrEqual(num1);
    expect(randomInRage(num1, num2)).toBeLessThan(num2);

    expect(randomInRage(1,1 )).toBe(1);
    
  });

  it("fail arguments", () => {
    expect(randomInRage()).toBeNaN();
    expect(randomInRage(0)).toBeNaN();
    expect(randomInRage(NaN)).toBeNaN();
    expect(randomInRage(null)).toBeNaN();
  });
});

describe("capitalize", () => {
    it("should capitalize str", () => {
        let str = 'hello world',
		    res = 'Hello world';
      expect(capitalize(str)).toBe(res);
      
    });
  });


  describe("arrayToString", () => {
    it("should array To String", () => {
        let arr = [1, 2, 3, "hello"],
		    res = '1,2,3,hello';
      expect(arrayToString(arr)).toBe(res);
      
    });
  });

  describe("invitation", () => {
    it("should write users name and age", () => {
        let user = {
            name:"Rob",
            age: 26,
            height:190
        },
            res = `Hello! My name is ${user.name}. I am ${user.age}`;
      expect(invitation(user)).toBe(res);

      expect(user).toMatchObject({
          name: expect.any(String),
          age: expect.any(Number)
        });
    });
  });


  describe("copyArray", () => {
    it("should copy Array", () => {
        let arr = [1, 2, 3, "hello"],
            res = [1, 2, 3, "hello"];

      expect(copyArray(arr)).toEqual(res);
    });
  });

  describe("copyObject", () => {
    it("should copy Object ", () => {
        let obj = {
            name:"Rob",
            age: 26,
            height:190
        },
            res = {
                name:"Rob",
                age: 26,
                height:190
            };

      expect(copyObject(obj)).toEqual(res);
    });
  });

  describe("objectToArray", () => {
    it("should object To Array ", () => {
        let obj = {
            name:"Rob",
            age: 26,
            height:190,
            add : {
                name:"Rob",
                age: 26,
                height:190
            }
        },
            res = ["Rob", 26, 190, {name: "Rob", age: 26, height: 190}]
            

      expect(objectToArray(obj)).toEqual(res);
      expect(res).toHaveLength(4);

    });
  });

  describe("getEven and getOdd", () => {
    it("should return Even and Odd numbers", () => {
        let arr = [1, 2, 3, 4, 5, 6],
            resEven = [2, 4, 6],
            resOdd = [1, 3, 5];
      expect(getEven(arr)).toEqual(resEven);
      expect(resEven).toHaveLength(3);

      expect(getOdd(arr)).toEqual(resOdd);
      expect(resOdd).toHaveLength(3);

      expect(getEven([1, 2, 3, 4, 5, 6, "hello"])).toEqual([2, 4, 6, "hello"]);
      expect(getOdd([1, 2, 3,"hello", 4, 5, 6])).toEqual([1, 3, 5]);
    });
  });

  describe("arrayToObject", () => {
    it("should object To Array ", () => {
        let arr = ["Rob", 26, 190],
            res = {
                26: 26,
                190: 190,
                Rob: "Rob"
            };

      expect(arrayToObject(arr)).toEqual(res);

    });
  });

  