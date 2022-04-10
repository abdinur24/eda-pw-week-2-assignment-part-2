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
// We make a variable called name and sent it to 'Dane' as a string
// Then we check if variable name is identical to Mary console log 'Hi, Mary!'
// If not then console log 'How do you do?'
// In this code it will console log 'How do you do' since name is not equal to 'Mary'

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
// We set a varible called secrets sets as undefined and another varible called code set to 123 as a number
// Then we check if code is identical to 123, if it is then console logging secret should come out as 'super'
// If code is less than 250 then secret is set to 'duper'
// console log secret 
// code is equal to 123 so console logging secret will be 'super' and code is multiplied by two euqualing it to 246

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
// We write 3 variables one called isStudent which is set to true as a boolean, another as variable called age is set to 34 as a number, and lastly a variable called zip is to a 55407 as a number.
// We then check if isStudent is true and zip is greater than 80000, then console log 'You're a student on the West Coast!'
// Else if isStudent is false or age is less 30, then console log 'What are your hobbies?'
// If not then check if isStudent is true, then console log 'Welcome to Prime!'
// Else at the end console log 'How about the weather?'
// Since isStudent is equal to true, it will console log 'Welcome to Prime'

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

// Fix - colorOne should be set to 'blue' and colorTwo set to 'red', they should be swapped
// colorOne and colorTwo should be set to 'purple', only colorOne is
// Should be colorOnecolorTwo = 'purple'

if (mix === true) {
  colorOne = 'purple';
}  
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// Fix- it's supposed to be temp 'and' time not 'or'
// Should be (temp > 39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// Fix- age is supposed to be greater than or equal to minAge, its written as minAge is less than or qual to age
// The two console logs should also be switched to show the right answer
// Should be if(age >= minAge); 
// and console.log('enter') else {console.log ('no entry')}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

