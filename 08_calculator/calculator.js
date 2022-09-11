const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((previous, current) => {
    return previous * current;
  }, 1);
};

const power = function(a, b) {
  if (b === 0) {
    return 1;
  } else {
    return a * power(a, b -1);
  }
};

const factorial = function(n) {
	function fact(acc, n) {
    if (n === 0) {
      return acc;
    } else {
      return fact(acc * n, n -1);
    }
  }
  return fact(1,n);
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
