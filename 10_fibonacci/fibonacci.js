const fibonacci = function(base) {
    if (typeof(base) == 'string') {
        base = Number(base);
    }

    if (base < 0) {
        return "OOPS";
    }

    if (base == 0) {
        return 0;
    }

    if (base == 1 || base == 2) {
        return 1;
    }

    return fibonacci(base-1) + fibonacci(base-2);
};

// Do not edit below this line
module.exports = fibonacci;
