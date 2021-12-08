const palindromes = function (words) {
    const cleanedInput = words.toLowerCase().replace(/\W/g, '');
    let reversedInput = '';
    for (let i = cleanedInput.length; i >= 0; i--) {
        reversedInput += cleanedInput.charAt(i);
    }
    return cleanedInput == reversedInput;
};

// Do not edit below this line
module.exports = palindromes;
