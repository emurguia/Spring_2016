
# Week 3 Objectives

## Rescources
http://eloquentjavascript.net/03_functions.html

## Objectives
- I can use string an array functions and properties to manipulate data.
- I can build functions with for loops to iterate over an array.
- I can define objects, retrieve object properties, and call their functions.
- I can build object constructors to define object types

##Do Now
Write a function that takes two arguments, a name and a greeting, and returns a string.
+ex. If the name was 'adam' and the greeting was 'hola', the function would return the string "hola adam"

###BONUS
Write a new related function. It now should only take a name. The function should randomly choose a greeting from a list of possible greetings. 
+ex1. When called, the function returns 'Guten tag adam'
+ex2. When called a second time, the function returns 'What's up adam'

## Function review
- review funcitons
- why are they important?
- when do we use functions
- reference dry
- use rock paper scissors as an example?

## Mini-Lesson 1, string and arrays, properties and methods
### strings
- strings have built in properties and methods
- `string.length' gives the length property of the string.
```
	var tester = prompt("Type something!");

	alert("your string is " + tester.length + " characters long")
```
- show `string.charAt()`
- show `string.toLowerCase()`
- show `string.toUpperCase()`
- show `string.indexOf()`
- show `string.split()`, this creates an array.

```javacript
	var word = 'barnard';

	var wordsLetters = word.split(); //doesn't work as expected why?

	var wordsLetters = word.split(''); //creates an array of the string 

	var letterIndex = wordsLetters.indexOf('a')

	wordsLetters.splice(letterIndex, 1); //gets rid of that letter in the array

	wordsLetters;

	//keep in mind that all of that is useful for the hangman game that you ladies will be building

	//explain what arrays are to your partner
```

### arrays
- Review arrays
- Arrays are a list
- We use an index to reference where something is in an array. 
- First index is 0, not 1 
- Each list item can hold any type of data; strings, numbers, functions, even other arrays!
- Arrays also have properties and methods.

#### 10 minutes I do (arrays)
```javascript
	var animals = ['parrot', 'cat', 'dog'];

	animals.length();

	animals[1];

	animals[2];

	animals[animals.length()];
	
	animals[animals.length()-1];

	animals.indexOf('bear'); 

	animals.indexOf('parrot'); 

	//
	//check if something exists in an array or not
	if (animals.indexOf('bear') == -1) {
		alert('not in the list man');
	}else{
		alert('in the list man')
	}

	//choose random option from an array
	var randomComputerOption = animals[Math.floor(Math.random() * animals.length)];

	animals.push('bear') //pushes to the end

	animals.unshift('rabbit') //pushes to beginning // returns the new array length

	animals.pop() //removes the last element of the array //also returns that element as a value

	animals[0] = 'lion'; //replaces a value in an array
```

#### EX 1.1, 10 minutes you do
- make a list of 5 of your favorite bands/musicians and put it inside of an array and store that into a variable called myFavoriteMusicalArtists (make all your options lower case)
- ask the user for a band/artist, turn the user input lower case and then tell the user if you like the band too

#### EX 1.2, 10 minutes we do
```javascript
		// ### Array Manipulation - 20 minutes

		var gameboy = [ 'Game Boy', 'nintendo', 149.99 ];
		var pokemon = [ 'Pokemon Blue', 'nintendo', 49.99 ];
		var tetris = [ 'Tetris', 'SEGA', 49.99 ];

		// How would you:

		// Without touching the above code:
		// * Change the name of the gameboy to be `Game Boy Color`.
		// * Change the company of the pokemon game to be capitalized.
		// * Remove the price of Tetris and store it in a variable oldPrice, then put in a new price 9000.99 into the tetris array.
		// * Set the company of the tetris array to Nintendo instead of SEGA

#### EX 1.3 Nested Arrays, 10 minutes we do!
- As a mentioned, arrays can hold any data, include other arrays. 
```javascript
// ### Nested Arrays - 20 minutes

//PART ONE
	// Create a new variable called cart. Add the gameboy, pokemon, and tetris arrays into the cart array.

	// How would you:

	// * Access the name of the pokemon game through the cart variable.
	// * Access the price of the tetris game.
	// * Change the price of the tetris game to be 9012.
	// * Change the name of the Game Boy in the cart to Game Boy Advance.

	var gameboy = [ 'Game Boy', 'nintendo', 149.99 ];
	var pokemon = [ 'Pokemon Blue', 'nintendo', 49.99 ];
	var tetris = [ 'Tetris', 'SEGA', 49.99 ];

//PART TWO:
	// * Look at the original variables and look at the values stored in the cart array.
	// * Did changing the array values in the cart array affect the values of the original arrays?
	// * Why?

// Solution

	var cart = [gameboy, pokemon, tetris];
	//cart.push(gameboy, pokemon, tetris)

	cart[1][0]; //name of the pokemon game
	cart[2][2] //price of the tetris game
	cart[2][2] = 9012; 

// **Bonus Solution**
// When we use a variable we are referencing the original value stored there. Cart is just an array, holding references to the three original arrays. If we change the arrays within cart it is the same as changing the original arrays directly.

// slice will give us a copy of the array -> safer.
```

## Mini-Lesson 3, for loops
### I Do, 10 minutes or less
- For loops are used to execute a block of code repeatedly, as long as a condition remains true
```javascript
	
	for(var i = 0; i < 10; i++){
		console.log("i is " + i);
	}
```
- We can think of i as the index of the loop.
- We can put more complex code inside the for loop
```javascript
	
	for(var i = 0; i < 10; i++){
		if(i == 8){
			console.log('eight');
		} else{
			console.log(i);
		}
	}
```

### You Do, Pair Programming Style
- If you have programming experience outside this class raise your hand.
- If you don't have programming experience, find a partner that does
- Pair programming is a common practice of Agile Development, some of the explicit benefits...
	1. better code quality, talking out loud, debugging, less 'blind alleys'
	2. expanding knowledge base, makes it so one person is not the only knowledgeable person on a feature or code base.
	3. transfer of skills from more experienced to less experience developers
	4. lower coordination costs
- Driver: The person with their hands on the computer, doing the typing
- Navigator: the person focused on the overall directions of the code. 

#### Task 1
- Write a for loop that will print to the console whether a number is even or odd.
- i.e. '11 is odd'

#### Task 2
- Write a function `lengths` that accepts an array as a single parameter.
- The function should return an array of numbers where each number is the length of the corresponding string.

## Mini-Lesson 4, Objects Part 1
-  Objects allow us to group values—including other objects—together and thus build more complex structures.
- Objects are made of up key value pairs
- We can access the data of an object by using the key.
- Anatomy,
```javascript
var person = {
	name: 'adam',
	job: 'teacher'
}

console.log(person.name);
//prints adam
```

Objects can also have functions that are given to them.

```javascript
	var myCar = {
		make: 'Honda',
		model: 'Accord',
		year: '1984',
		color: 'white',
		'miles driven': 0,

		drive: function (distance) {
			this['miles driven'] += distance;
		}
	}
```

### You Do, Movie objects
- Make a movie object, fill with info from your favorite movie
- Have the following data
	1. title, the title of the show
	2. director, the person who directed the movie
	3. year, the year that the movie was made
	3. stars, a list of the actors in the movie
	4. genre, a list of the categories this movie fits into, i.e. drama, mystery, comedy
	5. watched, the number of times that you have seen this movie
	5. watch, a function that increases the watched property by one, alerts to the broswer that you are watching a movie.
- Test out your object in the console, make sure that it is working as expected.
- Bonus, create a function that loops through the characters, printing a message 'i.e. Keaunu Reeves Rocks! Patrick Swayze Rocks'

## Mini-Lesson 5, Objects Part 2
- Both examples have just created just one object
- Object become more powerful when we create object types, then we can use this over and over again.
- Lets create a Car object type that we can use to create new cars

```javascript
var Car = function (make, model, year, color, miles) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;	 
	this.miles = miles
};

//create a new car
var firstCar = new Car('Oldsmobile', 'Cutlass', 1991, 'white', 28000)
``` 
- We could just add functions inside the constructor, but the proper way to do this is to use a prototype function. 

```javascript
//anatomy
class_name.prototype.method_name = function(first_argument) {
	// body...
};

//example
Car.prototype.drive = function(distance){
	this.miles += distance;	
};
```

## Homework
- Hangman in the Console
- Euler 6









