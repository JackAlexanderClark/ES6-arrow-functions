/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function. Passing through parameters a and b.

function addTwoNumbers (a, b) {
    // Code block
    return a + b;
}

let result = addTwoNumbers(100, 90);
console.log(result);

/**
 *  ES6 Arrow Function With Parameters.
 *  Defined as constants (CONST!!!) to avoid being overwritten or misused later in the code.
 *  USing the fat arrow syntax "=>"
 */ 

const multiplyTwoNumbers = (a, b) => {
    // Code block
    return a * b;
}

let multiply = multiplyTwoNumbers(11, 980);
console.log(multiply);

/**
 *  Defining arrow functions we use a constant set equal to parentheses that contain our parameters then => to our code block {}.
 *  Single Line Arrow Function with Parentheses.
 *  (a, b) => (a / b) is also valid syntax.
 *  Below can simplify functions by removing the need to return, implied by the fat arrow.
 */

const divideTwoNumbers = (a, b) => a / b;

let divide = divideTwoNumbers(34, 12);
console.log(divide);

// Implicit Returns. Single parameter say if you wish to log something to console.

const speakToConsole = message => console.log(message);
speakToConsole('Hello console!');

// If you have a function that takes no parameters must have () so javaScript knows it is a function.

const consoleTalk = () => console.log('Hello javaScript Console');
consoleTalk();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiple line string!
    </p>`
)
console.log(returnMultipleLines());

// Arrow function, loop.
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let result = averagePoints(students, 'english');
console.log(result);
