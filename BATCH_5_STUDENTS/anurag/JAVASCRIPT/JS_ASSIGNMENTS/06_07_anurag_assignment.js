//1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;

if (typeof strTen === typeof numTen && strTen === numTen) {
    console.log("'10' and 10 are the same type and value.");
} else {
    console.log("'10' is not exactly equal to 10 by type/value.");
    let strTenAsNumber = Number(strTen);
    console.log("Converted value:", strTenAsNumber, "type:", typeof strTenAsNumber);
    console.log("Now equal by value:", strTenAsNumber === numTen);
}

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let floatValue = parseFloat('9.8');
if (floatValue === 10) {
    console.log("parseFloat('9.8') is equal to 10.");
} else {
    let roundedValue = Math.round(floatValue);
    console.log("parseFloat('9.8') is not equal to 10.");
    console.log("Rounded value:", roundedValue);
}


// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
let substring = 'on';
let foundInWord1 = word1.includes(substring);
let foundInWord2 = word2.includes(substring);
console.log(`'${substring}' found in '${word1}': ${foundInWord1}`);
console.log(`'${substring}' found in '${word2}': ${foundInWord2}`);

// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
let wordToFind = 'jargon';
let foundInSentence = sentence.includes(wordToFind);
console.log(`'${wordToFind}' found in sentence: ${foundInSentence}`);


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
let longSentence = "You cannot end a sentence with because because because is a conjunction";
let phraseToSlice = 'because because because';
let startIndex = longSentence.indexOf(phraseToSlice);
let slicedPhrase = longSentence.substr(startIndex, phraseToSlice.length);
console.log("Sliced phrase:", slicedPhrase);

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 30;
let isMarried = false;
let year = 2024;
console.log("Type of firstName:", typeof firstName);
console.log("Type of lastName:", typeof lastName);
console.log("Type of country:", typeof country);
console.log("Type of city:", typeof city);
console.log("Type of age:", typeof age);
console.log("Type of isMarried:", typeof isMarried);
console.log("Type of year:", typeof year);

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let parsedInt = parseInt('10');
if (parsedInt === numTen) {
    console.log("Using parseInt, '10' is equal to 10.");
} else {   
     console.log("Using parseInt, '10' is not equal to 10.");
}

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
let truthy1 = true;
let truthy2 = 1;
let truthy3 = "non-empty string";

// 9. Write three JavaScript statements that provide falsy values.
let falsy1 = false;
let falsy2 = 0;
let falsy3 = "";

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false    
// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let lengthPython = 'python'.length; // 6
let lengthJargon = 'jargon'.length; // 6
console.log("Length of 'python':", lengthPython);
console.log("Length of 'jargon':", lengthJargon);
console.log("Is length of 'python' greater than length of 'jargon'?", lengthPython > lengthJargon); // false
// 12. Evaluate the following expressions and confirm with `console.log()`:
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12);  // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true