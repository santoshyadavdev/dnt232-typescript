
// named function
export function add(num1: number, num2: number, num3?: number) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

add(10, 10);
add(10, 10, 10);

// function declaration
export const sub = function (num1: number, num2: number, num3 = 10) {
    return num1 - num2 - num3;
}
sub(100, 10, 20);

// arrow function (not available inside class)
const multiply = (num1: number, num2: number, ...num3: number[]) => {
    const res = num3.reduce((a, b) => a * b);
    const result = num1 * num2 * res;
    return result;
}

multiply(10, 10, 10, 10, 10, 10, 10, 10, 10, 10);