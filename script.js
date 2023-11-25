//your JS code here. If required.
let output = '';

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    output += 'FizzBuzz';
  } else if (i % 3 === 0) {
    output += 'Fizz';
  } else if (i % 5 === 0) {
    output += 'Buzz';
  } else {
    output += i.toString();
  }

  // Add a newline character ("\n") after each number/string
  output += '\n';
}

// Print the final output using alert
alert(output);
