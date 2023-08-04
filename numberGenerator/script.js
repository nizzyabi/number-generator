// Imports
const prompt = require('prompt-sync')();

let minInput = prompt('Enter a minimum number: ')
let maxInput = prompt('Enter a maximum number: ')

function randomNumber(min, max) {
    while (true){
        min = parseInt(minInput);
        max = parseInt(maxInput);

        if (isNaN(min) || isNaN(max)){
            console.log('Please enter a number')
        } else {
            break;
        }
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Random Number: ${randomNumber(minInput, maxInput)}`)


