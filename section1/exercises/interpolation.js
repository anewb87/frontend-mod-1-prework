/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/interpolation.js`
*/

// EXAMPLE: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log(`The ${team} are ${name}'s favorite Quidditch team.`);

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";

console.log( `My zoo has ${numberOfCreatures} ${creatures}!`);

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here: This is an interpolation that, when run, will result in: My zoon has 7 unicorns! It's using the interpolation syntax of ${variable_name} rather than in a concatenation where each string or variable name would be connected with a +.




// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";
console.log(`The ${speedy} jumped over the ${slowPoke}`)


// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";
console.log(`In a predictable result, the ${slowPoke} beat the ${speedy}!`)


// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables uisng interpolation.
  var heroine = "Hermione Granger of Gryffindor"
  var gamePiece = "bludger"
  var antagonist = "Draco Malfoy"
  var disclaimer = "That got a bit violent, didn't it? But no worries, Draco lived to annoy another day. "

  console.log(`In our re-telling, ${heroine} snatched the ${gamePiece} as it whizzed by and heaved it at ${antagonist} whereupon it thunked him on the head, launching him from his broomstick.`)
  console.log(disclaimer)

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.
  //Did it! Love that you can check your work so quickly, immediate feedback.
