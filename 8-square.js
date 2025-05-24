// Step 1: Get the size argument and convert it to a number
const arg = process.argv[2];
const size = Number(arg);

// Step 2: Check if size is a valid number
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Step 3: Loop to print the square
  for (let i = 0; i < size; i++) {
    // Create one line of X's repeated 'size' times
    let line = "";
    for (let j = 0; j < size; j++) {
      line += "X";
    }
    console.log(line);
  }
}

