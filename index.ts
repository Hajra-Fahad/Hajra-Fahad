#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter you first number", type: "number", name: "firstNumber" },
  { message: "Enter you second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of your operators to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);
// conditional statement

if (answer.operator === "ADDITION") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "SUBTRACTION") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "MULTIPLICATION") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "DIVISION") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select valid operator");
}
