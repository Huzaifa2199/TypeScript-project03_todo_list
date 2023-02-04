#!/usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while(loop){
    const answers : {
        ToDo: string,
        addMore: boolean
    } = await inquirer.prompt([
        {
            type: "input",
            name: "ToDo",
            message: "What do you want to add in your ToDo list?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more in your ToDo list?",
            default: false
        },
    ])
    const {ToDo, addMore} = answers;
    loop = addMore
    if(ToDo) {
        todos.push(ToDo)
    } else {
        console.log("Kindly add items")
    }
}

if(todos.length > 0) {
    console.log("Your ToDo list:")
    todos.forEach(todo => {
        console.log(todo)
    });
} else {
    console.log("Empty List")
}