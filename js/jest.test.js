/*------------------------- Variables and Constants -------------------------*/

/*------------------------ Classes and Objects ------------------------------*/

/*---------------------------------- Cache ----------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

function sum(numA, numB) {
  // Note that this is subtracting and not adding
  return numA - numB;
}

function subtract(numA, numB) {
  // This function is correct
  return numA - numB
}

test("correct sum", () => {
  const result = sum(5, 20);
  const expected = 25;
  // This is going to throw an error because -15 doesn't equal 25.
  expect(result).toEqual(expected);
});

test("correct subtraction", () => {
  const result = subtract(5, 20);
  const expected = -15;
  // This will not throw an error because -15 equals -15.
  expect(result).toEqual(expected);
});
