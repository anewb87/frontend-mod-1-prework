/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

};

var shibaInu = new Dog();
var germanShepherd = new Dog();
console.log(shibaInu)
console.log(germanShepherd)


// Prompt 2: Snack
class Snack {

};

var fruit = new Snack()
var chip = new Snack()
console.log(fruit)
console.log (chip)


// Prompt 3: Shirt
class Shirt {

};

var shortSleeve = new Shirt
var longSleeve = new Shirt
console.log(shortSleeve)
console.log(longSleeve)


//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.
  // ***Note from Lexy: Beacause *Dog*, *Snack*, and *Shirt* were used above and are 'active', the terminal said that they have already been declared. If there's a way to re-declare in later code (like in this instance) I'm not finding it. Consequently, I re-named the classes.

// Prompt 1: Dog
class Pup {
  constructor() {
    this.name = "Chula";
    this.weight = "20 lbs";
    this.age = 6;
  }
};

var beagle = new Pup();
console.log(beagle)

// Prompt 2: Snack
class Morsel {
  constructor() {
    this.food = "chips"
    this.flavor = "salt and vinegar"
    this.amount = "20"
  }
};

var laysPotato = new Morsel();
console.log(laysPotato)

// Prompt 3: Shirt
class Top {
  constructor() {
    this.material = "flannel"
    this.colors = "blue and green"
    this.type = "button up"
  }
};
var fallShirt = new Top ();
console.log(fallShirt)


//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.
  //***Again, same issue as above. Needed to assign a new name to the classed since the code is active above and the previous names are already declared.

// Prompt 1: Dog
class Puppy {
  constructor (name, weight, age) {
    this.name = name;
    this.weight = weight;
    this.age = age
  }
};
var malamute = new Puppy("Lumos", "120 lbs", "2");
var husky = new Puppy("Knox", "40 lbs", "4");
console.log(malamute)
console.log(husky)

// Prompt 2: Snack
class Nibble {
  constructor (foodType, flavor, amount) {
    this.food = foodType
    this.flavor = flavor
    this.amount = amount
  }
};
var ruffles = new Nibble("chips", "sour cream & cheddar", 30)
var grapes = new Nibble("grapes", "concord", 22)
console.log(ruffles)
console.log(grapes)

// Prompt 3: Shirt
class Tunic {
  constructor (material, colors, style) {
    this.material = material
    this.colors = colors
    this.style = style
  }
};
var sweatshirt = new Tunic("polyester", "navy blue with hunter green sleeves and hood", "active/casual")
var blouse = new Tunic("linen", "eggshell white", "business casual")
console.log (sweatshirt)
console.log (blouse)
