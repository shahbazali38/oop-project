#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
;
class Person {
    student = [];
    addStudent(obj) {
        this.student.push(obj);
    }
}
;
const persons = new Person();
const programeStart = async (persons) => {
    do {
        console.log(chalk.bold.italic.blue("----------Welcome to Amjad Ali GIAIC project----------"));
        const answer = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Who would you like to talk to?",
                choices: ["Self", "Student", "Exit"]
            }
        ]);
        if (answer.opt === "Exit") {
            console.log(chalk.red.italic("Exitig..."));
            process.exit();
        }
        if (answer.opt === "Self") {
            console.log(chalk.green.italic("Hi, I'm talking to myself"));
            console.log(chalk.green.italic("I am in good health"));
        }
        if (answer.opt === "Student") {
            const ansewr2 = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Which student do you want to talk to?"
            });
            const student = persons.student.find(val => val.name === ansewr2.student);
            if (!student) {
                const addStudent = new Student(ansewr2.student);
                persons.addStudent(addStudent);
                console.log(`Hellow I,am ${addStudent.name}`);
                console.log("How are you");
                console.log(persons.student);
            }
            if (student) {
                console.log(`Hellow i am ${student.name}, or me thk hoon..............`);
                console.log(chalk.bold.green.italic("---Student Data---"));
                console.log(persons.student);
            }
        }
    } while (true);
};
programeStart(persons);
