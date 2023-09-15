import CodeBlock from "../CodeBlock";
import React from "react";

const EightEssentialCSharpConcepts = <>
    <div
        className="text-medium">
        Variables
    </div>
    <div
        className="text-small text-indent">
        Variables act as containers that hold information. These containers store information for later use.
    </div>
    <CodeBlock
        code={`int i = 10;
float f = 2.0f;
decimal d = 10.0m;
bool b = true;
char c = 'c';
string str = "a string";
var v = 10;
int[] ints = new int[1, 2, 3];
object obj = null;
long bigint = i;
const int MAX_INT = 2147483647;
float i_to_f = (float)i;
int f_to_i = (int)f;`}
        language="cs" />
    <div
        className="text-medium">
        Operators
    </div>
    <div
        className="text-small text-indent">
        Operators are symbols that represent a process. They are used for manipulating values with math and logic.
    </div>
    <CodeBlock
        code={`int a=10, b=5;
string y="abc", z="def";
int c = a * b;
int d = a / b;
int e = a + b;
string x = y + z;
int f = a - b;
int g = b++;
int h = b--;
bool i = a < b;
bool j = a >= b;
bool k = a == b;
bool l = a != b;
bool m = i && j;
bool n = i || j;
y ?? "String is null";
y ??= "String was null";`}
        language="cs" />
    <div
        className="text-medium">
        Conditionals
    </div>
    <div
        className="text-small text-indent">
        Conditionals are expressions that evaluate as either true or false. They are mostly used to determine a program's flow.
    </div>
    <CodeBlock
        code={`int time = 22;

if (time < 10) {
    Console.WriteLine("Good morning.");
} else if (time < 20) {
    Console.WriteLine("Good day.");
} else {
    Console.WriteLine("Good evening.");
}`}
        language="cs" />
    <CodeBlock
        code={`int day = 4;

switch (day) {
    case 6:
        Console.WriteLine("Today is Saturday.");
        break;
    case 7:
        Console.WriteLine("Today is Sunday.");
        break;
    default:
        Console.WriteLine("Looking forward to the Weekend.");
        break;
}`}
        language="cs" />
    <div
        className="text-medium">
        Loops
    </div>
    <div
        className="text-small text-indent">
        Loops are sequences of instructions that continually repeat until a certain condition is reached.
    </div>
    <CodeBlock
        code={`int j = 0;

while (j < 5) {
    Console.WriteLine(i);
    i++;
}`}
        language="cs" />
    <CodeBlock
        code={`for (int i = 0; i <= 10; i = i + 2) {
    Console.WriteLine(i);
}`}
        language="cs" />
    <CodeBlock
        code={`string[] cars = {"Honda", "BMW", "Tesla", "Mazda"};

foreach (string i in cars) {
    Console.WriteLine(i);
}`}
        language="cs" />
    <div
        className="text-medium">
        Exceptions
    </div>
    <div
        className="text-small text-indent">
        Exceptions are events that disrupt the normal flow of a program's instructions. They should be used for situations where a certain method or function could not execute normally.
    </div>
    <CodeBlock
        code={`int x = 100;
int y = 0;
int result;

try {
    result = x / y;
    Console.WriteLine(result);
} catch {
    Console.WriteLine("There was an error.");
} finally {
    Console.WriteLine("Try is finished.");
}`}
        language="cs" />
    <div
        className="text-medium">
        Strings
    </div>
    <div
        className="text-small text-indent">
        Strings are a sequence of characters. They are useful when communicating information from the program to the user of the program.
    </div>
    <CodeBlock
        code={`string exampleString = "This is an example string.":
string[] exampleStringArray = ["one", "two", "three"];
int stringLength = exampleString.Length;
char thirdChar = exampleString[2];
string concatenatedString = String.Concat(exampleStringArray);
int indexOfAn = exampleString.IndexOf("an");
string replaceExample = exampleString.Replace("example", "awesome");
string moneyAsString = "1,234.56";
float moneyAsFloat = float.Parse(moneyAsString, NumberStyles.Float | NumberStyles.AllowThousands);`}
        language="cs" />
    <div
        className="text-medium">
        Methods
    </div>
    <div
        className="text-small text-indent">
        Methods are sets of code that are referred to by a name and can be invoked at any point in a program.
    </div>
    <CodeBlock
        code={`static float MilesToKm(float miles) {
    float result = miles * 1.6f;
    return result;
}

static void PrintKm(float km) {
    Console.WriteLine(km + "km");
}

static void Main(string[] args) {
    float tenMilesInKm = MilesToKm(10f);
    PrintKm(tenMilesInKm);
}`}
        language="cs" />
    <div
        className="text-medium">
        Classes
    </div>
    <div
        className="text-small text-indent">
        Classes are extensible program code templates for creating objects, member variables, and member functions or methods.
    </div>
    <CodeBlock
        code={`public class Car {
    string _make;
    string _model;
    string _trim;
    int _year;

    public Car(string make, string model, string trim, int year) {
        _make = make;
        _model = model;
        _trim = trim;
        _year = year;
    }

    public string GetDescription() {
        return $"{_make}, {_model}, {_trim}, {_year}";
    }
}

class Program {
    static void Main(string[] args) {
        Car nathansRide = new Car("BMW", "Z3", "2.3", 2000);
        Console.WriteLine(nathansRide.GetDescription());        
    }
}`}
        language="cs" />
</>;

export default EightEssentialCSharpConcepts;
