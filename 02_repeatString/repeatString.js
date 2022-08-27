const repeatString = function(str, times) {
    if (times < 0) {
        return "ERROR";
    }
    let resultString = '';
    for (; times > 0; times--) {
        resultString = resultString.concat(str);
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
