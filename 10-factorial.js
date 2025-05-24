// Step 1: Define the recursive factorial function
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Step 2: Get the argument and convert to number
const arg = Number(process.argv[2]);

// Step 3: If arg is NaN, return 1; else compute factorial
console.log(factorial(isNaN(arg) ? 1 : arg));

