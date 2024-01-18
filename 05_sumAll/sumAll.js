const sumAll = function(limit1, limit2) {
    if (typeof(limit1) != "number" || typeof(limit2) != "number" || limit1 < 0 || limit2 < 0) {
        return 'ERROR';
    }

    return ((limit1 + limit2)*(Math.max(limit1,limit2) - Math.min(limit1,limit2) + 1))/2
};

// Do not edit below this line
module.exports = sumAll;
