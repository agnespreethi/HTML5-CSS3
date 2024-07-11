// Keywords - let, const, var

// Data Types  - Number, String, Boolean, undefined, Null, Symbol, BigInt

// Operators - Arithmetic, Assignment, Comparison

/* Template literal string -  ${} Uses
       -- should use `` (backticks) 
       -- no need to use + operator to concat
       -- no need to give extra spaces
       -- Esxi feature                                
*/

// new line - \n\  or backticks

// Type conversion (manual coversion) - ex: Number(year)

console.log(Number('Joe'));   // NaN (Not a number)
console.log(typeof NaN);    // Number  -- invalid number

// Type Coercion

console.log('I am ' + 21 + ' years old'); // I am 21 years old
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;  // 11  (concat)
console.log(n);
n = n - 1;
console.log(n);  // 10

console.log(2 + 3 + 4 + '5');  // 9 + '5' --> 95 (concat)

// Falsy Values  --> 0, '', undefined, null, NaN

// Equality operator --> == vs === and != vs !==

const num = 18;
const str = '18';

console.log(num == str);  // true - The values are the same after type conversion
console.log(num === str); // false - The values are different types and not equal

const bool = true;
const num2 = 1;

console.log(bool == num2); // true - The boolean value true gets converted to 1
console.log(bool === num2); // false - The values are different types and not equal

// To get user input --> prompt();

// swith case

let day = 4
switch (day) {
   case 1:
      console.log('Monday');
      break;
   case 2:
      console.log('Tuesday');
      break;
   case 3:
      console.log('Wednesday');
      break;
   case 4:
      console.log('Thursday');
      break;
   case 5:
      console.log('Friday');
      break;
   case 6:
      console.log('Saturday');
      break;
   default:
      console.log('Sunday');
}

// conditional (Ternary) operator

const age = 18
age >= 18 ? console.log('Right Age to vote') : console.log('Need to wait for few years');

// strict mode - 'use strict';

// function  

function juiceShop(apples, mangoes) {
   const juice = `I want ${apples} apples and ${mangoes} mangoes`;
   return juice;
}

console.log(juiceShop(5, 0));

// function Declaration

function calcAge1(birthyear) {
   return 2024 - birthyear;
}
const age1 = calcAge1(1998);

// function expression
const calcAge2 = function (birthyear) {
   return 2024 - birthyear;
}
const age2 = calcAge2(1999);

console.log(age1, age2);

// Arrow Function
const calcAge3 = birthyear => 2024 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthyear, firstname) => {
   const age = 2024 - birthyear;
   const retirement = 65 - age;
   // return yearUntilRetirement;  
   return `${firstname} retires in ${birthyear}`;
}

console.log(yearUntilRetirement(1991, 'Santo'));
console.log(yearUntilRetirement(1998, 'Preethi'));


// Function calling other function

function pieces(fruit) {
   return fruit * 4;
}

function juiceProcessor(apples, beetroot, carrot) {
   const applepieces = pieces(apples)
   const beetrootpieces = pieces(beetroot)
   const carrotpieces = pieces(carrot)
   //const juiceIteam =  `I want ${apples} apples and ${beetroot} beetroots and ${carrot} carrots`;
   const fruitpieces = `I want ${applepieces} pieces of apples and ${beetrootpieces} pieces of beetroots and ${carrotpieces} pieces of carrots`;
   //return juiceIteam;
   return fruitpieces;
}

console.log(juiceProcessor(2, 1, 3));

// Array

const years = new Array(1994, 1991, 1998, 2000, 1999);
console.log(years);

const students = ['Iyappan', 'Esai', 'Preethi', 'Robin', 'Ajo', 'Loy'];
console.log(students[1]);
console.log(students.length);
console.log(students[students.length - 1]);

students[2] = 'Agnes';
console.log(students);

const firstName = 'Priya';
const values = [firstName, 'Dharshini', students, 2024 - 1998];
console.log(values);
console.log(values.length);

// Array Exercise
const calcAge = function (birthYear) {
   return 2024 - birthYear;
}

const yearss = [2000, 1999, 1970, 1964, 1990];
const a1 = calcAge(yearss[0]);
const a2 = calcAge(yearss[1]);
const a3 = calcAge(yearss[yearss.length - 1]);
console.log(a1, a2, a3);

const allAges = [calcAge(yearss[0]), calcAge(yearss[1]), calcAge(yearss[yearss.length - 1])];
console.log(allAges);

// Array Methods 
/* 
   push() --> adding elememts to the end of an array
   unshift() --> adding elements to the front
   pop() --> last element will remove
   shift() --> first element will remove
   indexOf() --> will give index of an element
   includes() --> if it is there return true otherwise false
*/


// Adding Elements
// push()
const friends = ['joseph', 'stella', 'rani'];
const newfriends = friends.push('selva');
console.log(friends);
console.log(newfriends);
// unshift()
friends.unshift('moni');
console.log(friends);

// Removing elements
// pop()
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);
// shift()
friends.shift();
console.log(friends);

// indexOf()
console.log(friends.indexOf('stella'));
console.log(friends.indexOf('moni'));

// includes()
friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes('stella'));
console.log(friends.includes('moni'));

if (friends.includes('stella')) {
   console.log('you have a friend called stella');
}

// object
const b = {
   firstPerson: 'preethi',
   lastPerson: 'selva',
   age: 25,
   job: 'Developer',
   friends: ['Loy', 'Ajo', 'Esai']
};
console.log(b);

// Dot and Brackets
console.log(b.firstPerson);
console.log(b['lastPerson']);

const nameKey = 'Person';
console.log(b['first' + nameKey]);

const interestedIn = prompt('What do you want to know about b? choose between firstPerson, lastPerson, age, job, friends');
console.log(b[interestedIn]);

if (b[interestedIn]) {
   console.log(b[interestedIn]);
} else {
   console.log("Wrong Information choose between firstPerson, lastPerson, age, job, friends");
}

b.office = 'Eviden';
b['mobile'] = 9226387819;
console.log(b);

// coding 
// b has 3 friends and her best friend name called esai
console.log(`${b.firstPerson} has ${b.friends.length} friends and her best friend name called ${b.friends[2]}`); 

// Object Methods
const c = {
   first_Name: 'Agnes',
   last_Name: 'Robin',
   birthOfYear: 1998,
   jobPosition: 'Tester',
   colluges: ['Loy', 'Ajo', 'Esai', 'Iyappan'],
   hasLicense: true,

   // calculateAge: function(birthOfYear){
   //    return 2024 - birthOfYear
   // }
   
   // calculateAge: function(){
   //    console.log(this);
   //    return 2024 - this.birthOfYear
   // }

   calculateAge: function(){
      this.newAge = 2024 - this.birthOfYear;
      return this.newAge;
   },

   // write a code for Agnes is 25-years old tester and she has license
   getSummary: function(){
      return `${this.first_Name} is a ${this.calculateAge()}-years old ${this.jobPosition} and she has ${this.hasLicense ? 'a' : 'no'} license`
   }
};

console.log(c.calculateAge());
console.log(c.newAge);
//console.log(c['calculateAge'](1998));

console.log(c.getSummary()); 

// For loop
for(let i=1; i<=10; i++){
   console.log(i);
}

// Looping Arrays
const d = [
   'preethi',
   'selva',
   25,
   'Developer',
   ['Loy', 'Ajo', 'Esai'],
   true
];

for(let j=0; j< d.length; j++){
   console.log(d[j], typeof(d[j]));
}