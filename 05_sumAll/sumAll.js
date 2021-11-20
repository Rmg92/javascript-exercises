const sumAll = function (start, end) {
    let sum = 0;
    if (Number.isInteger(start) && Number.isInteger(end) == true) {
        if (start < 0 || end < 0) {
            return "ERROR";
        } else if (start > end) {
            for (let i = start; i >= end; i--) {
                sum += i;
            }
        } else if (start < end) {
            for (let i = start; i <= end; i++) {
                sum += i;
            }
        }
    } else {
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
