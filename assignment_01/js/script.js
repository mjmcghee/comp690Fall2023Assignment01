//STEP 01
// let someMonth;
// function theMonth();
// let currentMonth;
// let summerMonth;
// let myLibraryFunction;

//STEP 02
// 1.23            // Number literal
// "hello"         // String literal
// true or false   // Boolean literals
// null            // Null literal

//STEP 03
// let firstVariable = "Hello";
// let secondVariable = "World";

//STEP 04
// let firstName;
// let lastName;
// let address;
// let city;
// let state;
// let zipCode;
// let age;
// let referralSource;
// let weContactYou;

//STEP 05
// state = "California";
// zipCode = 92123;
// weContactYou = True;

//STEP 06
// let example01;
// example01 = 1 + "test";
// console.log(example01);
// or
// window.alert(example01);

//STEP 07
// let booleanStr = true + "false";
// let booleanNum01 = 4 + false; //returns 4 + 0 (false = 0)
// let booleanNum02 = 4 + true; //returns 4 + 1 (true = 1)
// console.log(booleanStr);
// or
// window.alert(booleanStr);
// console.log(booleanNum01);
// or
// window.alert(booleanNum01);
// console.log(booleanNum02);
// or
// window.alert(booleanNum02);

//STEP 08
// The initial string would not have completely printed. To print
// the entire string, an escape character (\) must be used on quotes 
// you want printed in the string. The correct string below will fully
// print to the console.
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
// window.console.log(someString);

//STEP 09
// let nullVar = null;
// console.log(nullVar);
// or
// window.alert(nullVar);
// let unVar
// console.log(unVar);
// or
// window.alert(unVar);

//STEP 10
// console.log(typeof 99);
// console.log(typeof 'string literal');
// console.log(typeof true);
// console.log(typeof [1,2,3,4]);
// console.log(typeof undefinedVariable);

//STEP 11
// window.alert("Hello " + "Marcus McGhee" + ", welcome to the Javascript Class!");

//STEP 12
// function welcomeStudent(nameInput) {
//     window.alert("Hello " + nameInput + ", welcome to the Javascript class!");
// }
// let studentName = "Marcus McGhee";
// welcomeStudent(studentName);

//STEP 13
// function welcomeStudent(nameInput,courseInput) {
//     window.alert("Hello " + nameInput + ", welcome to the " + courseInput + " class!");
// }
// let studentName = "Marcus McGhee";
// let courseName = "Javascript";
// welcomeStudent(studentName,courseName);

//STEP 14
// function welcomeStudent(nameInput,courseInput) {
//     window.alert("Hello " + nameInput + ".\nWelcome to the " + courseInput + " class!");
// }
// let studentName = "Marcus McGhee";
// let courseName = "Javascript";
// welcomeStudent(studentName,courseName);

//STEP 15
// function welcomeStudent(nameInput,courseInput) {
//     window.alert("Hello " + nameInput + ", welcome to the " + courseInput + " class!");
// }
// let studentName = prompt("What is your name?");
// let courseName = "Javascript";
// if (studentName != null) { 
//     welcomeStudent(studentName,courseName);
// }

//STEP 16
// function welcomeStudent(nameInput,courseInput) {
//     window.alert("Hello " + nameInput + ", welcome to the " + courseInput + " class!");
// }
// let studentName = prompt("What is your name?");
// let courseName = prompt("What is the course?");
// if (studentName != null && courseName != null) { 
//     welcomeStudent(studentName,courseName);
// }

//STEP 17
// let x = 10;
// let y = 20;
// console.log(x + y);
// or
// window.alert(x + y);

//STEP 18
// let x = 20;
// console.log(x + 20);

//STEP 19
// let x = 20;
// console.log(x * 5);

//STEP 20
// let x = 20 % 3;
// console.log(x);

//STEP 21
// function numOverTen(numInput) {
//     if (numInput > 10) {
//         console.log(true);
//     } else {
//         numInput = prompt(`Please input a number greater than 10!`);
//         numOverTen(numInput);
//     }
// }
// let numPrompt = prompt(`Input a number greater than 10!`);
// numOverTen(numPrompt);

//STEP 22
// function findWord(wordInput) {
//     let hiddenWord = "supercalifragilisticexpialidocious";
//     if (wordInput == hiddenWord) {
//         console.log(`Somehow you guessed the word!`);
//     } else {
//         console.log(false);
//     }
// }
// let randomWord = prompt("Enter a word!");
// findWord(randomWord);