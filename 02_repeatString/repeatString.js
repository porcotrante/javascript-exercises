const repeatString = function(inputString, repetitions) {
    if (repetitions < 0) {
        return 'ERROR';
    }

    let string = '';

    for (let i = repetitions; i > 0; i--) {
        string += inputString;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
