import Calculator from "../sample/calculator";

test("Test sum", () => {
    const calcuatorObj = new Calculator();
    expect(calcuatorObj.sum(1, 2)).toBe(3);
})

test("Test sub", () => {
    const calcuatorObj = new Calculator();
    expect(calcuatorObj.sub(8, 4)).toBe(4);
})

test("Test mul", () => {
    const calcuatorObj = new Calculator();
    expect(calcuatorObj.mul(4, 3)).toBe(12);
})

test("Test div", () => {
    const calcuatorObj = new Calculator();
    expect(calcuatorObj.div(6, 3)).toBe(2);
})

test("Test div0", () => {
    const calcuatorObj = new Calculator();
    expect(calcuatorObj.div(6, 0)).toBe(0);
})