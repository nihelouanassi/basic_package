const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = ['Task 1', 'Task 2', 'Task 3'];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/addTask', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function tania(){
   return "Hey ! It's the basic Tania ;)";
}

const readline = require('node:readline').createInterface({
   input: process.stdin,
   output: process.stdout,
 });

function startCalculation(name) {
   readline.question(`\nAlright ! What type of equation do you want to use (addition, substraction, multiplication, division) ? \n`, equation => {
      let chosenEquation = "";

      readline.question(`\nNext, what is your first number ? \n`, num1 => {
         readline.question(`\nLastly, what is your second number ? \n`, num2 => {
            let answer = 0; 
            const firstNumber = parseFloat(num1);
            const secondNumber = parseFloat(num2);

            if(equation === "addition") {
               chosenEquation = "+";
               answer = firstNumber + secondNumber;
             }
             else if(equation === "substraction") {
               chosenEquation = "-";
               answer = firstNumber - secondNumber;
             }
             else if(equation === "multiplication") {
               chosenEquation = "*";
               answer = firstNumber * secondNumber;
             }
             else if(equation === "division") {
               chosenEquation = "/";
               answer = firstNumber / secondNumber;
             }

            console.log(`\nOkay, i've counted it for you. The answer of ${firstNumber} ${chosenEquation} ${secondNumber} is ${answer}`)

            readline.question(`\nDo you want to calculate other numbers ? (yes, no) \n`, continueCalculation => {
               if(continueCalculation === "yes") {
                  startCalculation();
               }
               else {
                  console.log(`\nOkay ! See you next time, ${name} :)`);
                  readline.close();
               }
            });
         });
      });
  });
}

function getName(name) {
   readline.question(`\nHi ${name}! Do you want to start the counting now ? (yes, no) \n`, start => {
         if(start === "yes") {
            startCalculation(name);
         }
         else {
            console.log(`\nSee you next time, ${name} :)`);
            readline.close();
         }   
   });
}

function demandName() {
   readline.question(`\nSorry but i need your name please :) So, what's your name ? If you want to quit, write "quit" \n`, answer => {
      if(answer === "quit") {
         console.log(`\nSee you next time, stranger :)`);
         readline.close();
      }
      else {
         answer !== "" ? getName(answer) : demandName();
      }
   });
}

function calculator() {
    readline.question(`Welcome to the Calculator World ! Who am i talking to right now ? \n`, name => { 
      if(name !== "") {
        getName(name);
      }
      else {
        demandName();
      }
    });
}

module.exports = { sayHello, tania, calculator };
