const removeFromArray = function(inputArr, ...args) {
    let newArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i];

        if (args.includes(element) == false) {
            newArr.push(element);
        }
    }

    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
