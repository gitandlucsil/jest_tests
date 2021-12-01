import Assingments from "../sample/assingments";

let assingments = undefined;

beforeAll(() => {
    assingments = new Assingments();
});

test("Test number to Json Equal", () => {
    expect(assingments.numbersToJson(1, 2)).toEqual(
        {num1: 1, num2: 2}
    );
})

test("Test number to Json Not Equal", () => {
    expect(assingments.numbersToJson(6, 8)).not.toEqual(
        {num1: 1, num2: 2}
    );
})

test("Test values", () => {
    expect(assingments.value1).toBeNull();
    expect(assingments.value2).toBeUndefined();
    expect(assingments.value3).toBeDefined();
    expect(assingments.value4).toBeFalsy();
    expect(assingments.value5).toBeTruthy();
})

test("Test numeric value", () => {
    expect(assingments.value3).toBeGreaterThan(2);
    expect(assingments.value3).toBeGreaterThanOrEqual(3);
    expect(assingments.value3).toBeLessThan(3.1);
    expect(assingments.value3).toBeLessThanOrEqual(3);
    expect(assingments.value3).toBe(3);
    expect(assingments.value3).toEqual(3);
})

test("Test floating point", () => {
    expect(assingments.value6 + 0.2).toEqual(4.76);
    expect(assingments.value6 + 0.2).toBeCloseTo(4.76);
})

test("Test with array", () => {
    expect(assingments.list).toContain('item2');
    expect(assingments.list).not.toContain('item5');
})

test("Test exception", () => {
    expect(() => assingments.verifyValue(0)).toThrow();
    expect(() => assingments.verifyValue(0)).toThrow(Error);
    expect(() => assingments.verifyValue(0)).toThrow('invalid value');
    expect(assingments.verifyValue(1)).toBeTruthy()
})