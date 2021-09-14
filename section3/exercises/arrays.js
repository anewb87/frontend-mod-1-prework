/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);


// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals[2] = "Gorilla"
console.log(animals)


//As far as I understand, *reassign* is telling me to SWAP OUT the last item from Elephant to Gorilla. So that's what I did.
//If *reassign* is actually telling me to add Gorilla on the end, I would have done this:
//var addGorilla = animals.push('Gorilla')
//console.log(animals)
//Perhaps what you meant was to get rid of the old by using `pop` and putting in the new with the `push` I wrote above.
//Just trying to cover all my basis since I'm not 100% sure what you mean by reassign.


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals[3] = "Koala"
console.log(animals)

//I did this one two ways, checked them both, and they both seemed to work.
//I don't believe the method I used above was in any of my reading, I just did it and it worked.
//The method I used below works because position 3 would become the last position for this array. Before this exercise, there were only 2 positions (0, 1, 2) in this array. Consequently using `push` to create and end item works for the 3rd position.
//var addKoala = animals.push('Koala')
//console.log(animals)

// YOU DO: Write code that will log the String "Elephant" in the animals array
//I got ride of *Elephant* in an above exercise when I was asked to reassign the last element (*Elephant*) to *Gorilla*.
//Consequntly, I need to add it back first and then write code that will log it.
var addElephant = animals.push('Elephant')
console.log(animals [4])

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["apple", "orange", "banana", "grape"];
console.log(foods);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
var addBroccoli = foods.push('broccoli')
console.log(foods)

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
var last =foods.pop()
console.log(foods)

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
var newLength = foods.unshift('noodles', 'bread', 'mango');
console.log(foods)

// YOU DO: Remove the food that is in index position 0.
var first = foods.shift()
console.log(foods)

//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: eBay- Watching is a list of items that you've marked as ones you are keeping your eye on
// 2: Masterclass- My Saved Lessons is a list of lessons that you marked for reference later
// 3: Podcasts (that's the name of my podcast app)- Library is an array of arrays that contains lists of shows, saved, downloaded, latest episodes, etc- all of which are their own lists


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
The can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here
//This line begins my conditional statement. I'm starting off with the % of battery left in the phone because it's the least common denominator, so to speak.  If there's enough battery (the statement evaluates to `true`) then that's it, the subsequent code block is executed and the person understands they they will be able to call an Uber.)
if (percentBatteryLeft >= 15){
//I'm logging this information so that the person understands that they do have enough battery to call an Uber *if* the conditional above evaluates to `true`.
    console.log("Congratulations! You have enough battery to call an Uber. Get home safe now, ya hear?");
//All is not lost if there isn't enough battery. The directions called for an even more complex *else if* statement. If condition 1 evaluated to `false`, there is still a way to call an Uber, so I needed a second condition that would show that.
//Additionally, this is a logical AND operation- &&. The person needs to posess a charger and the charger needs to be one for a car. I need to use the *strictly equal* `===` comparison operator here so that it's comparing the variable to the value; not the `=` because that would reassign the variable's value right there.
} else if ((hasCharger === true) && (chargerType === "car")){
//I'm logging this information again so that the person understands that they can still charge their phone since they've got the correct kind of charger with them.
    console.log("Congratulations! You might not have enough battery power currently, but you've got a car charger and can get some juice in that phone. Go ahead and call that Uber.")
//If both our first and second conditions evaluate to `false` then we need a last command that prepares what we are to log.
  } else {
//This last line is logged so that the person without enough battery who also doesn't have a charger or the right kind of charger, will know what to do.
    console.log("Major bummer. Looks like you're walking tonight.")
  }


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
//Ran it. I had some issues but was able to work them out since I ran it (again and again and again).
