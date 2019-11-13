// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
  let charPosition = str.charAt(position);
  return charPosition;
}

// Write a function that will join two strings with an optional seperating character
function concat(str1, str2, seperator = " ") {
  let product = str1 + seperator + str2;
  return product;
}

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
  let product = str.charAt(position).toUpperCase();
  return product;
}
