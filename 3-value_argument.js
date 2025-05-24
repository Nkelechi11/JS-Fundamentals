// Step 1: Get the first argument directly
const firstArg = process.argv[2];

// Step 2: Check if it's undefined
if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
