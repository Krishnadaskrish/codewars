// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//my solution

function descendingOrder(number) {
    // Convert the number to an array of digits
    let digits = Array.from(String(number), Number);

    // Implement a simple sorting algorithm (e.g., bubble sort) in descending order
    for (let i = 0; i < digits.length - 1; i++) {
        for (let j = 0; j < digits.length - 1 - i; j++) {
            if (digits[j] < digits[j + 1]) {
                // Swap the digits if they are in the wrong order
                let temp = digits[j];
                digits[j] = digits[j + 1];
                digits[j + 1] = temp;
            }
        }
    }

    // Convert the sorted digits back to a number
    let result = parseInt(digits.join(''));

    return result;
}

// Test the function with the provided example
let inputNumber = 42145;
let outputNumber = descendingOrder(inputNumber);
console.log(`Input: ${inputNumber}  Output: ${outputNumber}`);