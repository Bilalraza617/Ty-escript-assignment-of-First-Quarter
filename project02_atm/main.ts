#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\nId : 123, Pin : 1234, Blance : 100\n");

console.log("Plaese enter your Id and Pin.\n");

// Global variable

let curMOney = 100;

///get id and pin

const userId = await inquirer.prompt([
  { name: "id", type: "number", message: "Enter your Id : " },
]);
const userPin = await inquirer.prompt([
  { name: "pin", type: "number", message: "Enter your Pin : " },
]);

if (userId.id === 123 && userPin.pin === 1234) {
  console.log("\nWelcome\n");
  // console.log("What do you want do?");
  const ans = await inquirer.prompt([
    {
      name: "ans",
      message: "What do you want do?",
      type: "list",
      choices: ["Add money", "Cheak balance"],
    },
  ]);
  ans.ans == "Cheak balance"
    ? console.log("\nYour balnce is " + curMOney + "\n")
    : "";

  if (ans.ans === "Add money") {
    const money = await inquirer.prompt([
      {
        name: "money",
        type: "number",
        message: "How many money do you want to add : ",
      },
    ]);
    curMOney = curMOney + money.money;
    console.log("\nNow your balnce is " + curMOney + "\n");
  }
} else {
  console.log("Your Id or Pin is incorrect");
}
