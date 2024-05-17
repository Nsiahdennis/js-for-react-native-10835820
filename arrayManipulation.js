


// Function to process an array of numbers.
 // Squares even numbers and triples odd numbers.
 
 
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            // Square the even number
            return num * num;
        } else {
            // Triple the odd number
            return num * 3;
        }
    });
}

 // Function to format an array of strings based on a corresponding array of numbers.
 // Capitalizes strings if the corresponding number is even.
 //Converts strings to lowercase if the corresponding number is odd.
  
function formatArrayStrings(strArr, numArr) {
    if (strArr.length !== numArr.length) {
        throw new Error("The lengths of the two arrays must be the same.");
    }

    return strArr.map((str, index) => {
        const num = numArr[index];
        if (num % 2 === 0) {
            // Capitalize the entire string if the number is even
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase if the number is odd
            return str.toLowerCase();
        }
    });
}
// userInfo.js
  // const originalNames = ["Kwame", "Kofi", "Akua"];
  // const modifiedNames = ["KWAME", "KOFI", "AKUA"];
  

function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
      throw new Error("The length of originalNames and modifiedNames arrays must be the same.");
    }
  
    const userProfiles = [];
  
    for (let i = 0; i < originalNames.length; i++) {
      const userProfile = {
        id: i + 1,
        originalName: originalNames[i],
        modifiedName: modifiedNames[i]
      };
      userProfiles.push(userProfile);
    }
  
    return userProfiles;
  }
  
  
 
  

// The usage 
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);

const strings = ["Nsiah", "Dennis", "Kofi", "Emma", "Ngo"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);

module.exports = createUserProfiles;