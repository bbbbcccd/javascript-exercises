const fibonacci = function(n) {
    function fib(a, b, i) {
        if (i === 1) {
            return a;
        } else if (i === 2) {
            return b;
        } else {
            return fib(b, a + b, i - 1);
        }
    }
    if (isNaN(n) || n < 0) {
        return "OOPS";
    } else {
        return fib(1, 1, +n);
    }
};

// Do not edit below this line
module.exports = fibonacci;
