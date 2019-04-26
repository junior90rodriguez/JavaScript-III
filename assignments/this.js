/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Refers to the window object(Everything)
* 2.Implicit Binding: Whatever is before the (.) is what (this) will be bound to
* 3.New Binding: Made to build object literals
* 4.Explicit Binding: using call or apply
*
* write out a code example of each explanation above
*/

//Principle 1

const myFunction = function () {
    console.log(this);
} 

 myFunction();

// code example for Window Binding

// Principle 2

const junior = {
    name: 'Junior',
    last: 'Rodriguez',
    age: 28,
    greet: function() {
        return `Hello, my name is ${this.name} ${this.last} and I am ${this.age} years old`;
    }
}
 console.log(junior.greet());
//code example for Implicit Binding

// Principle 3

function Boxer(name, lbs, division) {
    this.name = name;
    this.lbs = lbs;
    this.division = division;
    this.class = function() {
      console.log(`This boxer is a ${this.division} class fighter`);
    }
  }
  
  
  
  const canelo = new Boxer('Canelo', 164,'Middleweight');
  const ggg = new Boxer('GGG', 159, 'Light Middleweight');
  
  console.log(canelo);
  console.log(ggg);
  
  canelo.class();
  ggg.class();
  

// code example for New Binding

// Principle 4

const game = {
    name: 'Contra'
}

const consoles = ['SNES', 'Xbox', 'PS2']

function favoriteGame(cons) {
    return `My favorite game is ${this.name}! I like to play on ${cons}. `;
}

console.log(favoriteGame.call(game, consoles));

// code example for Explicit Binding