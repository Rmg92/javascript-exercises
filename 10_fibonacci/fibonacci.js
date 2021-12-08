const fibonacci = function (num) {
    const input = Number(num);
    let num1 = 0;
    let num2 = 1;
    let fibonacciNum = 1;
    if (input < 0) {
        return "OOPS"
    } else {
        for (let i = 1; i < input; i++) {
            fibonacciNum = num1 + num2;
            num1 = num2;
            num2 = fibonacciNum;
        }
        return fibonacciNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
