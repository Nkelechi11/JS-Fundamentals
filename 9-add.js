// Define the add function
function add(a, b) {
  return a + b;
}

// Get the two arguments and convert to integers
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

// Print the sum using the add function
console.log(add(num1, num2));

