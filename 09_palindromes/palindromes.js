const palindromes = function (arr) {
    arr = [...arr].filter((element) => (element.charCodeAt() > 47 && element.charCodeAt() < 58) || (element.charCodeAt() > 64 && element.charCodeAt() < 91) || (element.charCodeAt() > 96 && element.charCodeAt() < 123));
    
    rev = [...arr].reverse().toString().toUpperCase();

    arr = arr.toString().toUpperCase();

    return arr == rev;
}

// Do not edit below this line
module.exports = palindromes;
