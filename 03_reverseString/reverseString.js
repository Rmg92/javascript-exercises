const reverseString = function(str) {
    const inputString = str;
    let reversedString = '';
    for (let i = 0; i <= inputString.length; i++) {
        reversedString += inputString.charAt(inputString.length - i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
