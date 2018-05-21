// Create a variable that contains your name as a value. Name the variable appropriately.
var firstName = "peter";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter(firstName));
// Create a constant that contains the number of states in the U.S. and name it appropriately.
const stateNumber = 50;

//Compute the result of adding 5 and 4 and store it in an appropriately named variable.
var quantity = 5 + 4;

/*Write some code so that if your name starts with a letter after L, you display an alert that says "Back of the line!". 
Otherwise, you should display an alert that says "Next!". */

//This code is functional with just the character and for some reason it wasn't with the ASCII code?

if (firstName.charAt(0) > "L") {
    alert("Back of the line!");
} else {
    alert("You're Next!");
}

// Write a function called sayHello that displays an alert that says Hello World!

function sayHello() {
    alert("Hello World!");
}
// console.log(sayHello()) 

/*Write a function called checkAge that takes two arguments: one for a name and one for an age. 
If the age is less than 21, display an alert that says "Sorry {{{toMarkdown}}}name{{{toMarkdown}}}, you aren't old enough to view this page!"*/


function checkAge (name,age) {
    if  (age < 21) {
        alert("Sorry, " + name + ", you aren't old enough to view this page!");
     }
    else {
        alert("You can drink anything!"); 
    }
}

console.log(checkAge("Charles",21))
console.log(checkAge("Abby",27))
console.log(checkAge("James",17))
console.log(checkAge("John",18))

// Create an array of your favorite vegetables and name it accordingly.

var faveVeggies = ['Asparagus', 'Broccoli', 'Artichoke', 'Collard Greens', 'Snow Peas'];

for (i = 0; i < faveVeggies.length; i++){
    console.log(faveVeggies[i]);
}

//Create an array of 5 objects that contain name and age properties. Make up names and ages for each object, making sure some are younger than 21 and some are 21+.

var people = [
    {name: "Susan",
    age: 56},

    {name: "Bobby",
    age: 35},

    {name: "Timmy",
    age: 8},
  
    {name: "Steve",
    age: 14},

    {name: "Nancy",
    age: 109},
];

for (i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

// Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.


function getlength(word) {
    return word.length;
}
var number = ("Hello World!")

let anyWord = getLength('Hello World');

let test = anyWord % 2

if (test == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}