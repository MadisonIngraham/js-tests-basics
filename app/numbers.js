// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
  let answer = x + y;
  return answer;
}

// Write a function that returns the Cubed value of x
function cubed(x) {
  let answer = Math.pow(x, 3);
  return answer;
}

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(x, y) {
  let answer = x / y;
  return parseInt(answer);
}

// Write a function that takes in a number and determines if it is even.
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
  let answer = num % 2;
  return Boolean(answer == 0);
}

// Given 2 numbers, generate a random number within that range.
// Make it inclusive so that the starting and ending numbers are part
// of the range.HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(num1, num2) {
  let answer = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  return answer;
}
