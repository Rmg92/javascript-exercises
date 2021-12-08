const add = function (num1, num2) {
  const addition = num1 + num2;
  return addition;
};

const subtract = function (num1, num2) {
  const subtraction = num1 - num2;
  return subtraction;
};

const sum = function (arr) {
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return arrSum;
};

const multiply = function (arr) {
  let arrMultiply = 1;
  for (let i = 0; i < arr.length; i++) {
    arrMultiply *= arr[i];
  }
  return arrMultiply;
};

const power = function (num1, num2) {
  const pow = Math.pow(num1, num2);
  return pow;
};

const factorial = function (num) {
  let factored = 1
  if (num == 0 || num == 1) {
    factored = 1;
  } else {
    for (let i = 1; i <= num; i++) {
      factored *= i;
    }
  }
  return factored;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
