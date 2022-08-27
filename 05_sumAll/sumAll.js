//function uses sum of Arithmetic Sequence formula to find the sum of every number between and including 2 arguments

const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    } else if ((num1 < 0) || (num2 < 0)) {
        return "ERROR";
    } else {
        return (Math.abs(num1 - num2) + 1) * (num1 + num2) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
