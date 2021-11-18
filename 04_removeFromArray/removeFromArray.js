const removeFromArray = function (arr, ...remove) {
    for (let j = 0; j < remove.length; j++) {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === remove[j]) {               
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;