// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/
// 1. WRITE YOUR DESCRIPTION HERE
// A string variable is made and is defined as 'Dane'.
// A conditional statement checks to see if the variable called name is the same as the string 'Mary'.
// If the string is the same as 'Mary', the console will log 'Hi, Mary!', if not the console will log 'How do you do?'.
// The variable name is not equal to 'Mary', since it was set to 'Dane'. Therefore the console will log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// 2. WRITE YOUR DESCRIPTION HERE
// A variable is made called secret but has not yet been defined.
// Another variable is made named code and is defined as the number 123.
// A conditional statement checks to see if the variable named code is the same as the number 123.
// If it is the same, which it is, the variable secret is set as the string 'super' and the variable code is multipled by 2.
// Another conditional statement verifys if the variable code is greater than 250. If so, which it is not,
// the variable secret will be set to the string 'duper'.
// The console then logs the variable secret, the output is 'super' because code is 246.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// 3. WRITE YOUR DESCRIPTION HERE
// Three variables are made, isStudent that equals true, age that equals 34, and zip than equals 55407.
// A conditional statement is written with 3 outcomes. If isStudent is true AND the zip is 80000,
// the output would be 'You're a student on the west coast!'. zip is not equal to 80000.
// the else states that if isStudent is false OR age is less than 30, the output would be
// 'What are your hobbies?'. isStudent is true and age is over 30, so this is not output.
// The last else states that if isStudent is set to true, the output would be 'Welcome to Prime!'
// This is true, and the console outputs 'Welcome to Prime!'.


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}
*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - Only colorOne was set to purple. Here we need to add colorTwo set to purple as well.
  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
// FIX - the operator || means OR, however the instructions ask for the temp to be higher than 39 AND if time is >= 4. So the operator must be changed to &&.
if ( temp > 39 && time >= 4 ) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
// FIX - We are asked to log 'enter' if minAge is greater than or equal to 21. Here the console will log 'no entry' which is the opposite of what we want.
  console.log('enter');
} else {
  console.log('enter');
// FIX - Here, the console will log 'enter' is the person is UNDER 21. Which we don't want. So we will switch this to 'no entry'.
  console.log('no entry');
}
*/
