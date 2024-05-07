#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user imput for guessing number
// 3) computer user input with computer generated number and show number 

const randomNumber = Math.floor(Math.random() * 5+1);

console.log("welcome to number Guessing Game ");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
if(answers.userGuessedNumber === randomNumber){
    console.log("congratulation! you guess the right number");
}else {
    console.log("you guessed wrong number");
}
