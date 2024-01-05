// Section 1
// Variables and Data types
const myName = "Malamin Waggeh";
let favoriteLanguage = "Python";
let newFavoriteLanguage = "JavaScript";
favoriteLanguage = newFavoriteLanguage;
newFavoriteLanguage = favoriteLanguage;
console.log(
  `My name is ${myName} and my favorite programming language is ${favoriteLanguage}.`
);

//Strings
let firstVariable = "Hello World";
firstVariable = 200;
let secondVariable = firstVariable;
secondVariable = "Im tired";
console.log(firstVariable);
let yourName = "Jon Doe";
let greeting = "Hello, my name is " + yourName;
console.log(greeting);

//Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";
console.log(a < b);
console.log(c !== d);
console.log("Name" === "Name");
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false && false);
console.log(e === "Kevin");
console.log(a < b && b < c);
console.log(a === a && a !== d);
console.log(48 === "48");

// The Farm
let animal = "cow";

if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

//Drivers Ed
let personAge = 25;
if (personAge >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

console.log("==================================");
//Section II.
//Loops
/*for (let i = 0; i <= 10; i++) {
    console.log(i);
  }*/

/*for (let i = 10; i <= 400; i++) {
    console.log(i);
  }*/

/*for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
  }  
*/
// Get even
/*for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is an even number`);
    } else {
      console.log(i);
    }
  }*/

//Give me Five
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`I found a ${i}. High five! Three is a crowd`);
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`);
  }
}

// Section 3 Arrays & Control flow
let quotes = ["Quote 1", "Quote 2", "Quote 3"];

//Functions
function printGreeting(name) {
  let greeting = `Hello there, ${name}!`;
  return greeting;
}

console.log(printGreeting("Slimer"));

function printCool(name) {
  let coolMessage = `${name} is cool!`;
  return coolMessage;
}

console.log(printCool("Slimer"));

function calculateCube(num) {
  return num ** 3;
}
console.log(calculateCube(5));

function isVowel(character) {
  const lowerCaseCharacter = character.toLowerCase();

  return "aeiou".includes(lowerCaseCharacter);
}

console.log(isVowel("A"));
console.log(isVowel("b"));
console.log(isVowel("E"));

function getTwoLengths(s1, s2) {
  return [s1.length, s2.length];
}

console.log(getTwoLengths('Hank', 'Hippopoplous'));

function getMultipleLengths(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  console.log(newArr);
}

getMultipleLengths(["hello", "what", "is", "up", "dude"]);

console.log(maxOfThree(63,9,10));
