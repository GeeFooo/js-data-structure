/* Stacks */


// functions : push , pop , peek , length , push

var letters = [];       // this is stack

var word = "elephant";

var rword = "";         // empty string


// put letters of word into stacks

for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}


// pop off the stack in reverse order

for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " is a palindrome.");
}

else {
    console.log(word + " is not a palindrome.")
}


// creates a stack

var Stack = function() {

    this.count = 0;
    this.storage = {} ;


    // adds a value onto the end of the stack

    this.push = function(value) {

        this.storage[this.count] = value;
        this.count++;
    }


    // removes and returns the value at the end of the stack

    this.pop = function() {

        if(this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }


    // returns the value at the end of the stack

    this.peek = function(value) {
        return this.storage[this.count-1];
    }
}


// call object

var myStack = new Stack();


// testing stack manipulation


myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Tom");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());