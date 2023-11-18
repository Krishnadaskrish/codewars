// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.




//simple solution using method

function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
  }

const result = getCount("hello world");
console.log(result); // Output: 3



//sloving in by using loop

JavaScript:


function getCount (str) {
    // Define the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    const lowerStr = str.toLowerCase();

    // Initialize a counter for vowels
    let vowelCount = 0;

    // Iterate through each character in the string
    for (let char of lowerStr) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Return the final count
    return vowelCount;
}

// Example usage
// const result = getCount("hello world");
// console.log(result); // Output: 3



