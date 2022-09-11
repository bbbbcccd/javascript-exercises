const palindromes = function (str) {
    str = str.replace(/[^\w\s\']|_/g, "")
            .replace(/\s/g, "")
            .toLowerCase();
    const length = str.length;
    if (length % 2 === 0) {
        const begin = str.slice(0, (length / 2));
        const end = str.slice((length / 2)).split("").reverse().join("");
        return begin === end;
    } else {
        const begin = str.slice(0, ((length - 1)/ 2));
        const end = str.slice((length + 1) / 2).split("").reverse().join("");
        return begin === end;
    }
};

// Do not edit below this line
module.exports = palindromes;
