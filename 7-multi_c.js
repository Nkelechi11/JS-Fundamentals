// Step 1: Get the first argument and convert to a number
const arg = process.argv[2];
const count = Number(arg);

// Step 2: Check if count is a valid number
if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else {
  // Step 3: Use a loop to print "C is fun" count times
  let i = 0;
  while (i < count) {
    console.log("C is fun");
    i++;
  }
}

