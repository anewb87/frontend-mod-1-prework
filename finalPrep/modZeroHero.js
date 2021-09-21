// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Jean Gray/Phoenix"
var specialAbility = "telepathy"

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Well howdy" + heroName + "!"
var catchphrase = `I am the queen of ${specialAbility}!`


// Declare two variables - power AND energy - set to integers
var power = 8
var energy = 10

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500
var fullEnergy = energy + 150


// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true
var identityConcealed = true

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Thanos", "The Joker", "Lex Luthor"]
var sidekicks = ["Robin", "Chewbacca", "Samwise Gamgee"]

// Print the first sidekick to your console
console.log(sidekicks[0])

// Print the last archEnemy to the console
console.log(archEnemies[2])

// Write some code to add a new archEnemy to the archEnemies array
var newLength = archEnemies.push("James Moriarty")

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies)

// Remove the first sidekick from the sidekicks array
var newLength = sidekicks.shift()

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks)
//**Above you asked us to REMOVE the first sidekick and here you're asking us to log to ensure that we ADDED a sidekick. I'm going to assume you meant to log to make sure I removed it.**


// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse){
  if (dangerLevel > 50){
    console.log(badExcuse);
  } else if (dangerLevel >= 10 && dangerLevel <=50) {
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.")
  }
}

var gotThis = "Aren't I grand? I just saved the day!"
var afraid = "That's a bit too rich for my blood!"

assessSituation(9, gotThis, afraid)
assessSituation(25, gotThis, afraid)
assessSituation(60, gotThis, afraid)


// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."



// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Mike Wazowski",
  smell: "Listerine",
  weight: 45,
  citiesDestroyed: ["Bedrock", "Bikini Bottom", "Coolsville", "Peaceful Pines"],
  luckyNumbers: [13, 133, 1313],
  address:{
    number: 444,
    street: "Scream Row",
    State: "Wisconsin",
    Zip: 22332
  }
};
 console.log(scaryMonster)
 //never done an object in an object before- I think this is right. It logs ok.

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class SuperHero {
  constructor (name, superpower, age){
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(){
    console.log("I am " + this.name + "!");
  }
  maximizeEnergy(){
    this.energyLevel = this.energyLevel + 950;
  }
  gainPower(powerIncrease){
    this.powerLevel = this.powerLevel + powerIncrease;
  }
}

var hercules = new SuperHero ("Hercules", "strength", "25");
hercules.maximizeEnergy();
console.log(hercules)

var thor = new SuperHero ("Thor", "magic hammer", "35");
thor.gainPower(7);
console.log(thor)

var wonderWoman = new SuperHero ("Wonder Woman", "magic lasso", "30");
wonderWoman.sayName()
console.log(wonderWoman)


// Reflection
// What parts were most difficult about this exerise?
//Wow. I should have studied before that. It took me more than 30 minutes to be sure, but the more I practice, the quicker I'll get.
//The class part- I struggled with the gainPower arguement. I couldn't get it to add to a number that I defined in the instance. It kept spitting out NAN.
//The functions were the hardest for me. They were on the prework as well.
// What parts felt most comfortable to you?
//The top bits were easy, very elementary, delcaring variables.
// What skills do you need to continue to practice before starting Mod 1?
//All of it! I do have the variable delcaration down I think, and the classes and arrays are coming on fine. Functions though, I need the most practice with them.
