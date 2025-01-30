// Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string.

function extractDateComponents(dateString) {
    // Regular expression with groups for day, month, and year
    const datePattern = /(\d{2})-(\d{2})-(\d{4})/; 

    const match = dateString.match(datePattern);

    if (match) {
        return {
            day: match[1],
            month: match[2],
            year: match[3]
        };
    } else {
        return "No match found";
    }
}

// Example usage
const testDate = "15-08-2023";
console.log(extractDateComponents(testDate));
