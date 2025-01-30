// Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters.


function searchCharacterClasses(inputString) {
    const digitPattern = /\d/g; // Matches digits (0-9)
    const uppercasePattern = /[A-Z]/g; // Matches uppercase letters (A-Z)
    const lowercasePattern = /[a-z]/g; // Matches lowercase letters (a-z)
    const specialCharPattern = /[^A-Za-z0-9]/g; // Matches special characters

    return {
        digits: inputString.match(digitPattern) || [],
        uppercase: inputString.match(uppercasePattern) || [],
        lowercase: inputString.match(lowercasePattern) || [],
        specialCharacters: inputString.match(specialCharPattern) || []
    };
}

// Example usage
const testString = "Hello123!@#World";
console.log(searchCharacterClasses(testString));
