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
  return numA - numB
}

function test(description, callback) {
  try {
    callback();
    // this line executes if the callback didn't throw an error
    console.log(`👍 ${description}`);
  } catch (error) {
    // if there is an error then...
    console.error(`👎 ${description}`);
    console.error(error);
  }
}

test("correct sum", () => {
  const result = sum(5, 20);
  const expected = 25;
  // This is going to throw an error because -15 doesn't equal 25.
  expect(result).toEqual(expected);
});

test("correct subtraction", () => {
  const result = sum(5, 20);
  const expected = -15;
  // This is going to throw an error because -15 doesn't equal 25.
  expect(result).toEqual(expected);
});

function expect(actual) {
  return {
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} does not equal ${expected}`);
      }
    },
  };
}
