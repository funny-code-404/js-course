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
        const a = utils.arrayToString([1, 2, 3], 1);
        const b = a;
        expect(a).toHaveLength(5);
    });
});