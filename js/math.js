/*-------------------------------- Functions --------------------------------*/

function sum(numA, numB) {
  // Note that this is subtracting and not adding
  return numA - numB;
}

function subtract(numA, numB) {
  // This function is correct
  return numA - numB
}

/*--------------------------------- Exports ---------------------------------*/

module.exports = {sum, subtract}