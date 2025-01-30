// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.


function outerFunction(param) {
    const innerVariable = "I am inside the outer function!";

    return function innerFunction() {
        console.log(`Outer param: ${param}`);
        console.log(`Inner variable: ${innerVariable}`);
    };
}

const newFunction = outerFunction("I am the outer parameter!");
newFunction(); // Outputs both, the outer param and inner variable
