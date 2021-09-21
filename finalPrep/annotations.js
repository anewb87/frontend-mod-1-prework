// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

//Create a dynamic function with multiple (5) parameters
function buildABear(name, age, fur, clothes, specialPower) {
//Declare a variable (*greeting*) and assign a value that is a string containing the parameter *name* interpolated in.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//Declare a variable (*demographics) and assign the value to an array containing the (elements? parameters? not sure) *name* and *age*.
  var demographics = [name, age];
//Declare a variable (*powerSaying*) and assign the value to a string containing the parameter *specialPower* concatenated in.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//Create an object (*buildBear*). Begin by using the keyword `var` followed by the object's name (*builtBear*).
  var builtBear = {
//Add key (*basicInfo*) value (*demographics*) pair to object. Value is a varible used above.
    basicInfo: demographics,
//Add another key value pair to object. Value is a parameter from above.
    clothes: clothes,
//Add another key value pair to object. Value is a parameter from above.
    exterior: fur,
//Add another key value pair to object. Value is assigned here.
    cost: 49.99,
//Add another key value pair to object. Value is an array of varibales from above and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//Add anotehr key value pair to object. Value is a Boolean.
    isCuddly: true,
//Close of the object (*builtBear*)
  };
//Return the builtBear string value when function is called.
  return builtBear
//Close the function
}

//Add arguments to the dynamic function. This is where we submit specific arguments to the parameters.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//Add new arguements to the dynamic function
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Create a dynamic function with 3 parameters (num1, num2, range)
function fizzBuzz(num1, num2, range) {
//Create a loop. Begin with the keyword `for`. Initialize (var = 0), set the condition (i <= range), and add increment expression (i++).
  for (var i = 0; i <= range; i++) {
//Begin conditional if/ else if/else statement. Set the condition between parenthesis (i % num1 === 0 && i % num2 === 0).
    if (i % num1 === 0 && i % num2 === 0) {
//Print the string *fizzbuzz* to the console if the condition above evaluates to `true`.
      console.log('fizzbuzz');
//Set a second condition (i % num1 === 0) to be read if the statment above evaluates to `false`.
    } else if (i % num1 === 0) {
//Print the string *fizz* to the console if the second condition above evaluates to `true`.
      console.log('fizz');
//Set a third condition (i % num2 === 0) to be read if both of the statements above evaluate to `false`.
    } else if (i % num2 === 0) {
//Print the string *buzz* to the console if the third condition above evaluates to `true`.
      console.log('buzz');
//Present the end of our conditional. If all of the above statements evaluate to `false`...
    } else {
//...Print *i* to the console.
      console.log(i);
//Close the conditional
    }
// Close the loop
  }
//Close the function
}

//Add arguments to the dynamic function. This is where we submit specific arguments to the parameters.
fizzBuzz(3, 5, 100);
//Add new arguments to the dynamic function.
fizzbuzz(5, 8, 400);
