#! /usr/bin/env node
import inquirer from "inquirer";
//Get Name
const userNme = await inquirer.prompt([
    { name: "name", message: "Plaese Enter Your Name : " },
]);
console.log(`Welcome ${userNme.name} let's start : `);
// Generate Random Number
let randomNumber = Math.floor(Math.random() * 10);
//Get Number
let userNumber = await inquirer.prompt([
    {
        name: "number",
        message: "Choose any Number between 1 to 10 : ",
    },
]);
//Display Correct Number
console.log("Correct Number is : " + randomNumber);
// Loop For repeat Game
while (randomNumber !== Number(userNumber.number)) {
    userNumber = await inquirer.prompt([
        {
            name: "number",
            message: "Choose any Number between 1 to 10 : ",
        },
    ]);
    randomNumber = Math.floor(Math.random() * 10);
    console.log("Correct Number is : " + randomNumber);
}
console.log(`Mubarak ho, You are winner ${userNme.name}`);
