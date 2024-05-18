import inquirer from "inquirer";
let conversion = {
    "Pkr": {
        "Usd": 0.024,
        "Eur": 0.021,
        "Pkr": 1
    },
    "Usd": {
        "Pkr": 41.5,
        "Eur": 0.84,
        "Usd": 1
    },
    "Eur": {
        "Pkr": 47.5,
        "Usd": 1.19,
        "Eur": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["Pkr", "Eur", "Usd"],
        message: "From which currency you want to convert?"
    },
    {
        type: "list",
        name: "To",
        choices: ["Pkr", "Eur", "Usd"],
        message: "To which currency you want to convert?"
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter the amount: "
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Please enter a valid input");
}
