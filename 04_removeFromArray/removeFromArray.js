// For each rest parameter, check if it exists in given array
// If it exists, remove element from array

const removeFromArray = function(myArr, ...restParams) {
    for (const restParam of restParams) {
        for (let i = 0; i < myArr.length; i++) {
            if (restParam === myArr[i]) {
                myArr.splice(i, 1);
                break;  
            }
        }
    }
    return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
