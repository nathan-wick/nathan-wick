import CodeBlock from "../CodeBlock";
import HiddenSolution from "../HiddenSolution";
import QuizQuestion from "../QuizQuestion";
import React from "react";

const ProgrammingOneZeroOne = <>
    <div
        className="text-medium">
        What Is Programming?
    </div>
    <div
        className="text-small text-indent">
        Computer programming is the process of creating a set of <b>instructions</b> that tells a computer what to do. If you want to create something with a computer, you need to know how to program it.
    </div>
    <div
        className="text-small text-indent">
        These instructions are written in a <b>language</b> that the computer can understand, called a programming language. Some common programming languages include JavaScript, Python, and C++. Each programming language has its own strengths and weaknesses.
    </div>
    <div
        className="text-medium">
        Why Learn Programming?
    </div>
    <div
        className="text-small">
        Programmers use programming languages for:
        <ul>
            <li>Websites</li>
            <li>Video Games</li>
            <li>Data Science</li>
            <li>Robotics</li>
        </ul>
    </div>
    <div
        className="text-medium">
        Essential Programming Concepts
    </div>
    <div
        className="text-small text-indent">
            Next, we will learn 5 essential programming concepts with JavaScript examples.
    </div>
    <div
        className="text-small text-bold">
            Variables
    </div>
    <div
        className="text-small text-indent">
            Variables act as containers that hold information. These containers store information for later use.
    </div>
    <CodeBlock
        code={`let name = "Nathan";
let age = 22;
let isProgrammer = true;`}
        language="javascript" />
    <div
        className="text-small text-indent">
            JavaScript has a function known as console.log() that is used print a message to the console. The console is a debugging tool that allows you to see the output of your JavaScript code. Using the variables in the example above, what would be the output of the code below?
    </div>
    <CodeBlock
        code={`console.log(name + " is " + age + " years old.");`}
        language="javascript" />
    <QuizQuestion
        solution="Nathan is 22 years old." />
    <div
        className="text-small text-bold">
            Operators
    </div>
    <div
        className="text-small text-indent">
            Operators are symbols that represent a process. They are used for manipulating values with math and logic.
    </div>
    <CodeBlock
        code={`let x = 10;
let y = 5;

// Arithmetic operators
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;

// Comparison operators
let equal = x == y;
let notEqual = x != y;
let greaterThan = x > y;
let greaterThanOrEqual = x >= y;
let lessThan = x < y;
let lessThanOrEqual = x <= y;

// Logical operators
let and = x && y;
let or = x || y;
let not = !x;`}
        language="javascript" />
    <div
        className="text-small text-indent">
            Using the variables in the example above, what would be the output of the codes below?
    </div>
    <CodeBlock
        code={`console.log(sum);`}
        language="javascript" />
    <QuizQuestion
        solution="15" />
    <CodeBlock
        code={`console.log(remainder);`}
        language="javascript" />
    <QuizQuestion
        solution="0" />
    <CodeBlock
        code={`console.log(equal);`}
        language="javascript" />
    <QuizQuestion
        solution="false" />
    <CodeBlock
        code={`console.log(!equal);`}
        language="javascript" />
    <QuizQuestion
        solution="true" />
    <CodeBlock
        code={`console.log(greaterThan && equal);`}
        language="javascript" />
    <QuizQuestion
        solution="false" />
    <CodeBlock
        code={`console.log(greaterThan || equal);`}
        language="javascript" />
    <QuizQuestion
        solution="true" />
    <div
        className="text-small text-bold">
            Conditionals
    </div>
    <div
        className="text-small text-indent">
            Conditionals are expressions that evaluate as either true or false. They are mostly used to determine a program's flow.
    </div>
    <CodeBlock
        code={`let age = 18;
let isAdult = undefined;

if (age >= 18) {
    isAdult = true;
} else {
    isAdult = false;
}`}
        language="javascript" />
    <div
        className="text-small text-indent">
            Using the variables in the example above, what would be the output of the code below?
    </div>
    <CodeBlock
        code={`console.log(isAdult);`}
        language="javascript" />
    <QuizQuestion
        solution="true" />
    <div
        className="text-small text-bold">
            Loops
    </div>
    <div
        className="text-small text-indent">
            Loops are sequences of instructions that continually repeat until a certain condition is reached. Loops are commonly used with arrays. An array is a group of variables of the same type.
    </div>
    <CodeBlock
        code={`let start = 1;
let end = 5;
let numbers = [];

for (let i = start; i <= end; i++) {
    numbers.push(i);
}`}
        language="javascript" />
    <div
        className="text-small text-indent">
            Using the variables in the example above, what would be the output of the codes below?
    </div>
    <CodeBlock
        code={`console.log(numbers[0]);`}
        language="javascript" />
    <QuizQuestion
        solution="1" />
    <CodeBlock
        code={`console.log(numbers[4]);`}
        language="javascript" />
    <QuizQuestion
        solution="5" />
    <CodeBlock
        code={`console.log(numbers[5]);`}
        language="javascript" />
    <QuizQuestion
        solution="undefined" />
    <div
        className="text-small text-bold">
            Methods
    </div>
    <div
        className="text-small text-indent">
            Methods are sets of code that are referred to by a name and can be invoked at any point in a program.
    </div>
    <CodeBlock
        code={`function printNumbers(start, end) {
    let numbers = [];

    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    console.log(numbers);
}`}
        language="javascript" />
    <div
        className="text-small text-indent">
            Using the method in the example above, what would be the output of the codes below?
    </div>
    <CodeBlock
        code={`printNumbers(1, 5);`}
        language="javascript" />
    <QuizQuestion
        solution="[1, 2, 3, 4, 5]" />
    <CodeBlock
        code={`printNumbers(2, 8);`}
        language="javascript" />
    <QuizQuestion
        solution="[2, 3, 4, 5, 6, 7, 8]" />
    <div
        className="text-medium">
        Calculator Website
    </div>
    <div
        className="text-small text-indent">
            Now that we know the basics. Let's create a calculator website! To keep things simple, we will be using CodePen for this project. CodePen is a free, open-source, and easy to use online code editor.
    </div>
    <div
        className="text-small">
        <div
            className="text-bold">
                Start A CodePen Project
        </div>
        <ol>
            <li>
                <button
                    onClick={() => window.open(
                        `https://codepen.io/`,
                        `_blank`,
                    )}>
                    Open CodePen
                </button>
            </li>
            <li>Click the "Start Coding" button</li>
        </ol>
    </div>
    <div
        className="text-small text-bold">
            HTML
    </div>
    <div
        className="text-small text-indent">
            First, we need to add the HTML code for our calculator. HTML code is made up of elements, which are the basic building blocks of a web page. Elements are surrounded by tags, which tell the web browser how to display the content of the element.
    </div>
    <div
        className="text-small text-indent">
            The code below creates the structure a simple calculator. The input tags create two text boxes where you can enter numbers. The button tags create four buttons that you can use to add, subtract, multiply, and divide the numbers in the text boxes. The div tag creates a container where the result of the calculation will be displayed.
    </div>
    <CodeBlock
        code={`<input type="number" id="number1">
<input type="number" id="number2">
<button onclick="add()">+</button>
<button onclick="subtract()">-</button>
<button onclick="multiply()">*</button>
<button onclick="divide()">/</button>
<div id="result"></div>`}
        language="html" />
    <div
        className="text-small text-indent">
            Copy and paste the code above into your CodePen project. As you can see, the structure of the calculator is visible. However, the calculator is not functional.
    </div>
    <div
        className="text-small text-bold">
            JavaScript
    </div>
    <div
        className="text-small text-indent">
            Next, we need to add the JavaScript code for our calculator. JavaScript code is used to make websites more interactive. It can be used to do things like make buttons work, make images move, and make games.
    </div>
    <div
        className="text-small text-indent">
            The code below has four functions: add, subtract, multiply, and divide. Each function takes two numbers as input and returns the result of the calculation.
    </div>
    <CodeBlock
        code={`function add() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 + number2;
    document.getElementById("result").innerHTML = result;
}

function subtract() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 - number2;
    document.getElementById("result").innerHTML = result;
}

function multiply() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 * number2;
    document.getElementById("result").innerHTML = result;
}

function divide() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 / number2;
    document.getElementById("result").innerHTML = result;
}`}
        language="javascript" />
    <div
        className="text-small text-indent">
            Copy and paste the code above into your CodePen project. As you can see, the calculator is functional... or so we think.
    </div>
    <div
        className="text-small text-bold">
            Bug Hunt
    </div>
    <div
        className="text-small text-indent">
            There's a bug within our code that causes our program to function incorrectly. Use the calculator, locate the bug, and attempt to fix it. Once you're ready, click the button below for the solution.
    </div>
    <HiddenSolution
        solution={<>
            <div
                className="text-small text-indent">
                    The problem is that the + operator in JavaScript can be used to concatenate strings as well as add numbers. In our code, the number1 and number2 variables are strings, so the + operator concatenates them instead of adding them.
            </div>
            <div
                className="text-small text-indent">
                    To fix this, we need to convert the number1 and number2 variables to numbers before we add them. We can do this using the parseInt() function.
            </div>
            <div
                className="text-small text-indent">
                    The parseInt() function will convert the string value of the number1 and number2 variables to numbers. Then, the + operator will add the numbers and the result will be stored in the result variable. Finally, the result variable will be displayed in the result element.
            </div>
            <CodeBlock
                code={`function add() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let result = number1 + number2;
    document.getElementById("result").innerHTML = result;
}`}
                language="javascript" />
        </>} />
    <div
        className="text-small text-bold">
            CSS
    </div>
    <div
        className="text-small text-indent">
            Now, let's be real. Our calculator is pretty ugly. Although, this can easily be fixed with a little CSS! CSS is a programming language that is used to style websites.
    </div>
    <div
        className="text-small text-indent">
            The code below is used to style our calculator. The input tag is used to style the text boxes, the button tag is used to style the buttons, the #result tag is used to style the container for the result of a calculation.
    </div>
    <CodeBlock
        code={`input {
    width: 96px;
    height: 26px;
    border: 1px solid #a2d2ff;
}

button {
    width: 100px;
    height: 30px;
    background-color: #a2d2ff;
    border: none;
    cursor: pointer;
}

#result {
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
}`}
        language="css" />
    <div
        className="text-small text-indent">
            Copy and paste the code above into your CodePen project. As you can see, our calculator looks much better. That's it! You've finished your first program!
    </div>
    <div
        className="text-small text-indent">
        Now, is a program ever truly finished? Feel free to use what you've learned today to improve, style, and implement new features of your own to the calculator!
    </div>
</>;

export default ProgrammingOneZeroOne;
