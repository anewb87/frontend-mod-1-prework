/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers != numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
//The comparison operator used here is a 'less than' operator. The code is asking if 4 is less than 9. Since 4 IS less than 9, the comparison will evaluate to true.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//The comparison operator used here, again, is the 'less than' operator. The code is asking if 4 is less than the value of the variable *book*.
//Since the value of the variable *book* is 3, and since 4 is actually greater than 3, the comparison will evaulate to false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//The comparison operator used here is the 'greater than' operator. The code is asking if the variable *friends*'s value is greater than the value of the variable *siblings*.
//Since the value of the variable *friends* is 6 and the value of the variable *siblings* is 2, then the comparison will evaluate to true: 6 > 2.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
//The comparison operator used here is the 'not equal to' operator. The code is asking if the variable *attendees*'s value is not equal to the value of the variable *meals*.
//Since the value of the variable *attendees* is 9 and the value of the varable *meals* is 8, the comparison will evaluate to true since 9 and 8 are not equal.

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
//logs: true

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
//logs: false

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);
//logs: true

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && (age <=2))
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line of code evaluated to true, as I had expected it to.
//First, I personally had to decide the parameters (age) of a puppy. After a Google search, I decided that a puppy is a dog aged 2 and under.
//I then wrote code asking if the dog loves to play AND if it's age is equal to or less than 2, since that's what I determined a puppy's age to be.
//Since the value of the variable lovesToPlay is true AND the value of the variable age is 1, which is equal to or less than 2, both are true and the code evaluates to true.
//I honestly was not sure if this would evaluate becuase I am not yet familiar with the order of operations for code.
//`console.log(lovesToPlay && age <=2)` and `console.log(lovesToPlay && (age <=2))` both evaluated to true, and I can see why they both did. I've asked a friend and he said that both are correct and read correctly.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
//Sure did! I would run it as I went to make sure I was on the right track. Two thumbs up!
