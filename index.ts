import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
  {
    name: "userguessinggame",
    type: "number",
    message: "Please enter a number betweeen 1-6",
  },
]);
if (answers.userguessinggame === randomNumber) {
  console.log("Congratulation ! you won!");
} else {
  console.log("Better luck next time.");
}