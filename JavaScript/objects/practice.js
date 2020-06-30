// ==== Objects ====

/* 
  Create four objects using the following information (name, height, hair_color, eye_color)
*/

// Luke, 172, blond, blue

// C-3PO, 167, n/a, yellow

// Biggs, 183, black, brown

// Using your character objects, log answers to these questions:

// How tall is Luke?
console.log();

// What color are Biggs's eyes?
console.log();

// What is C-3PO's hair color?
console.log();

// What color are Luke's eyes?
console.log();

// Create a new whine method for Luke.  When called, return "But I was going into Tosche Station to pick up some power converters!" Log the result.
console.log();

// ==== Arrays ====

// Given an array of Star Wars characters,  complete the following requests WITHOUT using any array methods like .forEach(), .map(), .reduce(), .filter()

characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun Lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* Request 1: Create a new array called nonHumans that contains all the characters that have "n/a" as a gender.  
Once you have the new array created, sort the universities alphabetically and log the result. */
const nonHumans = [];
//your function here
console.log(nonHumans);

/* Request 2: Create a new array called nameAge that contains both first name and birth year of each character. 
The resulting information should have a space between the first name and the birth year like this: 
Name birthYear
Log the result of your new array. */
const nameAge = [];
//your function here
console.log(nameAge);

/* Request 3: Find out how many characters have the string "Lars" included in their name. Create a new array called lars that contains them all. Log the result. */
const lars = [];
//your function here
console.log(lars);

// ==== ADVANCED Array Methods ====

/* Request 1: .forEach()
Display both the name and the mass of the character.  Return an array with only the name and mass shown.  The individual values in the array should look like this "Name: Obi-Wan Kenobi, Mass: 77"
*/
const nameMass = [];
//use .forEach()
console.log(nameMass);

/* Request 2: .map()    
Convert all the character names to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.
*/

const lowerCase = [];
//use .map()
console.log(lowerCase);

/* Request 3: .filter() 
Find out which characters have a mass less than 100.
*/
const lightweights = [];
//use .filter()
console.log(lightweights);

/* Request 4: .reduce() 
If all the characters on the list got in a starship, what would their total weight be?  Find the total mass from all the characters using the .reduce() method.
*/
const massTotal = 0;
//use .reduce()
console.log(massTotal);

/* 
Stretch: If you haven't already, convert your array method callbacks into arrow functions.
*/