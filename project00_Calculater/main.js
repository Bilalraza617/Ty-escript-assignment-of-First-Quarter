#! /usr/bin/env node
// import inquirer
import inquirer from "inquirer";
// get answer
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "PLease Enter First Number : ",
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Please enter Second Number : ",
    },
    {
        name: "operater",
        type: "list",
        message: "Please enter Operater : ",
        choices: ["+", "-", "*", "/", "%"],
    },
]);
// Operaions
let OperaionsAns;
switch (answer.operater) {
    case "+":
        OperaionsAns = answer.firstNumber + answer.secondNumber;
        break;
    case "-":
        OperaionsAns = answer.firstNumber - answer.secondNumber;
        break;
    case "*":
        OperaionsAns = answer.firstNumber * answer.secondNumber;
        break;
    case "/":
        OperaionsAns = answer.firstNumber / answer.secondNumber;
        break;
    case "%":
        OperaionsAns = answer.firstNumber % answer.secondNumber;
        break;
}
// Show Operation Ans
console.log(OperaionsAns);
