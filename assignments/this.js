/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Refers to the window object(Everything)
* 2. Whatever is before the (.) is what (this) will be bound to
* 3. 
* 4. 
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