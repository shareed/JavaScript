// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const cityName = 'San Diego';
function whereDoYouLive() {
  const stateName = 'California';
  console.log(`I live in ${cityName}, ${stateName}.`);
};
whereDoYouLive();




/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0; // place holder with numerical value
  return function() {//will create a closure between the context of the variable count the new updated value,
      count = count + 1;// mutates the count
      return count;// returns the count
      //return ++count; can wipe out line 11 and 12 and will do the same thing
  }
};// increment wrapped in closure and is what keeps the memory of 1 being incremented

const newCounter = counter();// new counter set to the function invocation, equal to the counter function value, so newCounter is counter(), keeping track of this counter
console.log(newCounter());// invokes newCounter which also invokes counter()
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
