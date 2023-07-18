import CodeBlock from "../CodeBlock";
import React from "react";

const TimeComplexityExplainedSimple = <>
    <div
        className="text-medium">
        What Is Time Complexity?
    </div>
    <div
        className="text-small text-indent">
        Time complexity is the number of times a statement is executed. The lesser the Time Complexity, the faster the execution.
    </div>
    <div
        className="text-medium">
        O(1) - Constant Time Complexity
    </div>
    <div
        className="text-small text-indent">
        When time complexity is constant, the size of the input does not matter, it will always take the same amount of time to run. This is the fastest time complexity.
    </div>
    <div
        className="text-small text-indent">
        The code below simply checks if the number is even. This code will always take the same amount of time to run, because it only needs to perform one operation, the modulus operation.
    </div>
    <CodeBlock
        code={`const number = 10;
const isEven = number % 2 === 0;`}
        language="typescript" />
    <div
        className="text-medium">
        O(n) - Linear Time Complexity
    </div>
    <div
        className="text-small text-indent">
        When time complexity is linear, the number of statement executions is proportional to the input (n) size.
    </div>
    <div
        className="text-small text-indent">
        The code below simply sums the elements in the array. The number of operations performed by this code is directly proportional to the size of the array, so the time complexity of this code is O(n).
    </div>
    <CodeBlock
        code={`const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0);`}
        language="typescript" />
    <div
        className="text-medium">
        O(log n) - Logarithmic Time Complexity
    </div>
    <div
        className="text-small text-indent">
        When time complexity is logarithmic, it will take a time that is proportional to the logarithm of the size of the input. Logarithmic time complexity happens when the algorithm does not need to go through all the input. This is accomplished by dividing the main problem into sub-problems, solving the sub-problems, and combining the sub-problem answers to the main problem. This is the second-fastest time complexity and is often used when constant time complexity is not achievable.
    </div>
    <div
        className="text-small text-indent">
        The code below performs a binary search on the array to find the target value. The binary search algorithm works by repeatedly dividing the search space in half, until the target value is found or the search space is empty. The number of times the search space is divided is proportional to the logarithm of the size of the array, so the time complexity of the binary search algorithm is O(log n).
    </div>
    <CodeBlock
        code={`function binarySearch(array: number[], target: number): number {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}`}
        language="typescript" />
    <div
        className="text-medium">
        O(n^2) - Quadratic Time Complexity
    </div>
    <div
        className="text-small text-indent">
        When time complexity is quadratic, the number of statement executions is proportional to the square of the input (n) size. Algorithms with a quadratic time complexity don’t scale well and can typically be avoided with a better algorithm.
    </div>
    <div
        className="text-small text-indent">
        The code below sorts the array in ascending order using the bubble sort algorithm. The bubble sort algorithm works by repeatedly comparing adjacent elements in the array and swapping them if they are in the wrong order. The number of times the bubble sort algorithm iterates is proportional to the square of the size of the array, so the time complexity of the bubble sort algorithm is O(n^2).
    </div>
    <CodeBlock
        code={`function bubbleSort(array: number[]): number[] {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}`}
        language="typescript" />
</>;

export default TimeComplexityExplainedSimple;
