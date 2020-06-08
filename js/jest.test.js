/*--------------------------------- Imports ---------------------------------*/

const {sum, subtract} = require('./math')

/*-------------------------------- Functions --------------------------------*/

test("correct sum happens asynchronously", async () => {
	const result = await sum(5, 20)
	const expected = 25
	// This is going to throw an error because -15 doesn't equal 25.
	expect(result).toEqual(expected)
})

test("correct subtraction happens asynchronously", async () => {
  const result = await subtract(5, 20);
  const expected = -15;
  // This will not throw an error because -15 equals -15.
  expect(result).toEqual(expected);
});
