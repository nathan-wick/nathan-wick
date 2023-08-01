import CodeBlock from "../CodeBlock";
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
let sum = x + y; // 15
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
        className="text-small text-bold">
            Loops
    </div>
    <div
        className="text-small text-indent">
            Loops are sequences of instructions that continually repeat until a certain condition is reached.
    </div>
    <CodeBlock
        code={`let start = 1;
let end = 5;

for (let i = start; i <= end; i++) {
    console.log(i);
}`}
        language="javascript" />
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
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

printNumbers(1, 5);
printNumbers(2, 8);`}
        language="javascript" />
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
            Add HTML Code
    </div>
    <div
        className="text-small text-indent">
            First, we will need to add the HTML code for our calculator. The HTML code tells the computer the structure of our website.
    </div>
    <CodeBlock
        code={`<div id="calculator">
    <input type="number" id="number1">
    <input type="number" id="number2">
    <button onclick="add()">+</button>
    <button onclick="subtract()">-</button>
    <button onclick="multiply()">*</button>
    <button onclick="divide()">/</button>
    <div id="result"></div>
</div>`}
        language="html" />
    <div
        className="text-small text-indent">
            https://codepen.io/Nathan-Wick-the-vuer/pen/vYQvpXQ
    </div>
</>;

export default ProgrammingOneZeroOne;
