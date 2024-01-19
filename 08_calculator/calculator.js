const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a,b)=>a+b, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
};

const power = function(base, power) {
  return base**power;
};

const factorial = function(number) {
	if (number == 0){
    return 1;
  }

  return number * factorial(number-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
