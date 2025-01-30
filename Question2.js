// Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.

function testRegex(pattern, str) {
    const regex = new RegExp(pattern);  // Create a regular expression object
    return regex.test(str);  // Test if the string matches the pattern
}

console.log(testRegex("hello", "Hello World")); // false (case sensitive)
console.log(testRegex("abc", "abcdef")); // true (contains abc)

