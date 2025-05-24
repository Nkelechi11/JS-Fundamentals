// Step 1: Get the first argument
const arg = process.argv[2];

// Step 2: Convert it to an integer using Number()
const number = Number(arg);

// Step 3: Check if it's a valid number (not NaN)
if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log("My number: " + number);
}

