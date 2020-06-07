/*-------------------------------- Functions --------------------------------*/

async function test(description, callback) {
  try {
    await callback();
    // this line executes if the callback didn't throw an error
    console.log(`👍 ${description}`);
  } catch (error) {
    // if there is an error then...
    console.error(`👎 ${description}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} does not equal ${expected}`);
      }
    },
  };
}