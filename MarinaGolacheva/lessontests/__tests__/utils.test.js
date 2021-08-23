import * as utils from "../utils";
describe("getValue", () => {
    it("when value is a value", () => {
        expect(utils.getValue("Marina")).toBe("Marina");
    });
});

describe("substract", () => {
    it("substraction", () => {
        expect(utils.substract(2, 4)).toBe(-2);
        expect(utils.substract("marina", 2)).toBeNaN();
    });
});

describe("quotient", () => {
    it("divide", () => {
        expect(utils.quotient(4, 2)).toBe(2);
        expect(utils.quotient(0.5, 0.7)).toBeCloseTo(0.714);
    });
});

describe("randomInRage", () => {
    it("randomInRageNumber", () => {
        expect(utils.randomInRage(2, 4)).toBeLessThan(4);
        expect(utils.randomInRage(2, 4)).toBeGreaterThan(2);
    });
});

describe("capitalize", () => {
    it("capitalizeLetter", () => {
        expect(utils.capitalize("marina")).toBeTruthy();
        expect(utils.capitalize("marina")).toMatch(/Ma/);
    });
});

describe("arrayToString", () => {
    it("join", () => {
        expect(utils.arrayToString([1, 2, 3], '-')).toHaveLength(5);
        expect(utils.arrayToString([1, 2, 3], '')).toHaveLength(3);
    });
});

describe('invitation', () => {
    it('invitationName', () => {
        const user = [{
            name: "Dan",
            age: 25,
        },
        {
            name: "Jane",
            age: 30,
        }
        ];
        const toContain = {
            name: "Dan",
            age: 25,
        };

        const userString = utils.invitation(user);
        expect(utils.invitation(userString)).toBeTruthy;
        expect(user).toContainEqual(toContain);
    });
});


describe("copyArray", () => {
    it("copyArrayIsArray", () => {
        const arr = [1, 2, 3];
        const arr1 = arr;
        expect(utils.copyArray(arr)).toContainEqual(2);
        expect(utils.copyArray(arr)).toEqual(arr1);

    });
});

describe("copyObject", () => {
    it("copyObjectIsObject", () => {
        const obj = {
            name: "Jane",
            age: 25,
        };
        const obj1 = obj;
        expect(utils.copyObject(obj)).toEqual(obj1);

    });
});

describe("objectToArray", () => {
    it("objectToArrayIsArray", () => {
        const arrfull = ["Anna", 25, "dog"];
        const obj = {
            name: "Anna",
            age: 25,
            pet: "dog",
        };
        const arr = arrfull;
        expect(utils.objectToArray(obj)).toEqual(arr);
        expect(utils.objectToArray(obj)).toContain(25);
        expect(utils.objectToArray(obj)).toHaveLength(3);
    });
});

  describe("getEven", () => {
    it("getEvenIsArray", () => {
        const array = [1, 2, 3, 44, 66];
        const filterArray = [2,44,66];
        expect(utils.getEven(array)).toEqual(filterArray);
        expect(utils.getEven(array)).toContain(44);
        expect(utils.getEven(array)).toHaveLength(3);
    });
});

describe("getOdd", () => {
    it("getOddIsArray", () => {
        const array = [1, 2, 3, 44, 66];
        const filterArray = [1,3];
        expect(utils.getOdd(array)).toEqual(filterArray);
    });
});

  describe("arrayToObject", () => {
    it("arrayToObjectIsObject", () => {
        const array = [25, "Marina", "Cat", 386];
        const object = { 
            25: 25,
            386: 386,
            Cat: "Cat",
            Marina: "Marina",
        };
        expect(utils.arrayToObject(array)).toEqual(object);
    });
});

  describe('sum', () => {
      it("sumCorrect", () =>{
          const a = 10;
          const b = 5;
          const result = 15;
          expect(utils.sum(a)(b)).toBe(result)
      });
  });

  
  describe('makeAction', () => {
    it("makeActionDevide", () => {
        const a = 10;
        const b = 5;
        function devide (a,b) {
            return a/b;
        };
        expect(utils.makeAction(devide,a,b)).toBe(2)
    });
});
