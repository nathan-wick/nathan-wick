import CodeBlock from "../CodeBlock";
import React from "react";

const EightEssentialTypescriptDataStructures = <>
    <div
        className="text-medium">
        What Are Data Structures?
    </div>
    <div
        className="text-small text-indent">
        A data structure is a way of organizing data so that it can be accessed and processed efficiently. Data structures are used in almost every program or software system.
    </div>
    <div
        className="text-medium">
        Array
    </div>
    <div
        className="text-small text-indent">
        An array is a linear data structure that stores a collection of elements of the same data type. The elements in an array are stored in contiguous memory locations, and they can be accessed using an index.
    </div>
    <div
        className="text-small text-indent">
        Arrays are a very versatile data structure. They can be used to store a variety of data, such as numbers, strings, objects, and even other arrays. Arrays are also very efficient, and they can be accessed and updated very quickly.
    </div>
    <CodeBlock
        code={`const myArray = [1, 2, 3, 4, 5];

const length = myArray.length; // 5

myArray.push(6); // Add an element to the end of the array
myArray.shift(); // Remove the first element from the array

// Iterate over the array
for (const element of myArray) {
    console.log(element);
}`}
        language="typescript" />
    <div
        className="text-medium">
        Stack
    </div>
    <div
        className="text-small text-indent">
        A stack is a linear data structure that follows a particular order in which the operations are performed. The order is LIFO (Last In First Out). This means that the last item that is added to the queue is the first item that is removed.
    </div>
    <div
        className="text-small text-indent">
        As you can see below, the pop method returns the top item from the stack, which is "World" in this case. The pop method then removes the item from the stack, so the next time we call pop, the item that is returned will be "Hello".
    </div>
    <CodeBlock
        code={`class Stack<T> {
    private storage: T[] = [];

    public push(item: T) {
        this.storage.push(item);
    }

    public pop(): T | undefined {
        const item = this.storage.pop();
        return item;
    }
}`}
        language="typescript" />
    <CodeBlock
        code={`const stack = new Stack<string>();

stack.push("Hello");
stack.push("World");

const item1 = stack.pop(); // "World"
const item2 = stack.pop(); // "Hello"`}
        language="typescript" />
    <div
        className="text-medium">
        Queue
    </div>
    <div
        className="text-small text-indent">
        A queue is a linear data structure that follows a particular order in which the operations are performed. The order is FIFO (First In First Out). This means that the first item that is added to the queue is the first item that is removed.
    </div>
    <div
        className="text-small text-indent">
        As you can see below, the dequeue method returns the first item from the queue, which is "Hello" in this case. The dequeue method then removes the item from the queue, so the next time we call dequeue, the item that is returned will be "World".
    </div>
    <CodeBlock
        code={`class Queue<T> {
    private storage: T[] = [];

    public enqueue(item: T) {
        this.storage.push(item);
    }

    public dequeue(): T | undefined {
        const item = this.storage.shift();
        return item;
    }
}`}
        language="typescript" />
    <CodeBlock
        code={`const queue = new Queue<string>();

queue.enqueue("Hello");
queue.enqueue("World");

const item1 = queue.dequeue(); // "Hello"
const item2 = queue.dequeue(); // "World"`}
        language="typescript" />
    <div
        className="text-medium">
        Hash Table
    </div>
    <div
        className="text-small text-indent">
        A hash table is a data structure that maps keys to values. Hash Tables are efficient when there is a need to search for a value. This is because values can be found with a key instead of a loop.
    </div>
    <div
        className="text-small text-indent">
        The code below will first add three key-value pairs to the hash table. Then, it will retrieve the values associated with the keys "Nate", "John", and "Chad".
    </div>
    <CodeBlock
        code={`class HashTable<K, V> {
    private storage: { [key: K]: V } = {};

    public set(key: K, value: V) {
        this.storage[key] = value;
    }

    public get(key: K): V | undefined {
        return this.storage[key];
    }
}`}
        language="typescript" />
    <CodeBlock
        code={`const peopleNumbers = new HashTable<string, number>();

peopleNumbers.set("Nate", 5646);
peopleNumbers.set("John", 6283);
peopleNumbers.set("Chad", 1413);

const value1 = peopleNumbers.get("Nate"); // 5646
const value2 = peopleNumbers.get("John"); // 6283
const value3 = peopleNumbers.get("Chad"); // 1413`}
        language="typescript" />
    <div
        className="text-medium">
        Linked List
    </div>
    <div
        className="text-small text-indent">
        A linked list is a data structure that stores data in a linear order, but the elements are not stored in contiguous memory locations. Instead, each element in a linked list contains a pointer to the next element in the list.
    </div>
    <div
        className="text-small text-indent">
        The code below will first add elements for the make, model, and trim of a car to the linked list. Then, it will print all of the elements in their linked order.
    </div>
    <CodeBlock
        code={`class Node<T> {
data: T;
    next: Node<T> | undefined;

    constructor(data: T) {
        this.data = data;
        this.next = undefined;
    }
}

class LinkedList<T> {
    head: Node<T> | undefined;
    tail: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
    }

    public add(data: T) {
        const newNode = new Node<T>(data);

        if (this.head === undefined) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    public print() {
        const currentNode = this.head;
        while (currentNode !== undefined) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}`}
        language="typescript" />
    <CodeBlock
        code={`const car = new LinkedList<string>();

car.add("BMW");
car.add("Z3");
car.add("2.3");

car.print(); // "BMW" "Z3" "2.3"`}
        language="typescript" />
    <div
        className="text-medium">
        Tree
    </div>
    <div
        className="text-small text-indent">
        A tree is a data structure that represents a hierarchical relationship between data. A tree is composed of nodes, each of which can have zero or more child nodes. The nodes at the top of the tree are called the root nodes, and the nodes at the bottom of the tree are called the leaf nodes.
    </div>
    <div
        className="text-small text-indent">
        The code below will create Nathan"s family tree. The tree will start with the root node (Larry) to represent Nathan"s grandpa. Then, two child nodes (Chad and Jeremy) will be added to the root node (Larry) to represent Nathan"s father and uncle. Finally, four child nodes (Nathan, Jonathan, Maggie, and Dalton) will be added to the previous child nodes (Chad and Jeremy) to represent Nathan"s sibling and cousins.
    </div>
    <CodeBlock
        code={`class TreeNode<T> {
    data: T;
    children: TreeNode<T>[] = [];

    constructor(data: T) {
        this.data = data;
    }

    public add(child: TreeNode<T>) {
        this.children.push(child);
    }
}`}
        language="typescript" />
    <CodeBlock
        code={`const grandpa = new TreeNode<string>("Larry");

const father = new TreeNode<string>("Chad");
const uncle = new TreeNode<string>("Jeremy");

grandpa.add(father);
grandpa.add(uncle);

const me = new TreeNode<string>("Nathan");
const sibling = new TreeNode<string>("Jonathan");
const cousin1 = new TreeNode<string>("Maggie");
const cousin2 = new TreeNode<string>("Dalton");

father.add(me);
father.add(sibling);
uncle.add(cousin1);
uncle.add(cousin2);

const secondGeneration = grandpa.children; // ["Chad", "Jeremy"]
const thirdGeneration = father.children.concat(uncle.children); // ["Nathan", "Jonathan", "Maggie", "Dalton"]
        `}
        language="typescript" />
    <div
        className="text-medium">
        Trie
    </div>
    <div
        className="text-small text-indent">
        A trie, also called a digital tree, radix tree, or prefix tree (as prefixes can search them), is an ordered tree data structure that is used for pattern matching. Tries are often used to store and retrieve strings.
    </div>
    <div
        className="text-small text-indent">
        The code below will first add two words to the trie. Then, it will search for each word in the trie.
    </div>
    <CodeBlock
        code={`class TrieNode {
    children: TrieNode[] = [];
    isWord: boolean = false;
    
    constructor() {}
    
    public addWord(word: string) {
        for (const character of word) {
            const child = this.children.find((child: TrieNode) => child.data === character);
            if (!child) {
                child = new TrieNode();
                this.children.push(child);
            }
    
        child.isWord = child.isWord || word === character;
        }
    }
    
    public searchWord(word: string): boolean {
        for (const character of word) {
            const child = this.children.find((child: TrieNode) => child.data === character);
            if (!child) {
                return false;
            }
        }
    
        return this.isWord;
    }
}`}
        language="typescript" />
    <CodeBlock
        code={`const words = new TrieNode();

words.addWord("hello");
words.addWord("world");

const helloIsWord = words.searchWord("hello"); // true
const worldIsWord = words.searchWord("world"); // true
const helloworldIsWord = words.searchWord("helloworld"); // false`}
        language="typescript" />
    <div
        className="text-medium">
        Graph
    </div>
    <div
        className="text-small text-indent">
        A graph is a data structure that represents a set of objects (called vertices or nodes) that are connected by links (called edges or arcs). Graphs are used to model many different real-world scenarios, such as social networks, transportation networks, and computer networks.
    </div>
    <div
        className="text-small text-indent">
        The code below creates a graph that represents a street map. The vertices in the graph represent streets, and the edges in the graph represent connections between streets.
    </div>
    <CodeBlock
        code={`class Graph {
    vertices: Set<string> = new Set();
    edges: Map<string, Set<string>> = new Map();

    public addVertex(vertex: string) {
        this.vertices.add(vertex);
    }

    public addEdge(source: string, destination: string) {
        const sourceVertices = this.edges.get(source);
        if (!sourceVertices) {
            sourceVertices = new Set();
            this.edges.set(source, sourceVertices);
        }

        sourceVertices.add(destination);

        const destinationVertices = this.edges.get(destination);
        if (!destinationVertices) {
            destinationVertices = new Set();
            this.edges.set(destination, destinationVertices);
        }

        destinationVertices.add(source);
    }

    public getNeighbors(vertex: string): Set<string> {
        return this.edges.get(vertex);
    }
}`}
        language="typescript" />
    <CodeBlock
        code={`const streets = new Graph();

streets.addVertex("Main");
streets.addVertex("1st");
streets.addVertex("2nd");
streets.addVertex("3rd");
streets.addVertex("Shady");
streets.addVertex("Maple");
streets.addVertex("Ash");

streets.addEdge("1st", "Main");
streets.addEdge("Main", "3rd");
streets.addEdge("3rd", "Ash");
streets.addEdge("3rd", "Maple");
streets.addEdge("Maple", "Shady");
streets.addEdge("Shady", "1st");
streets.addEdge("Maple", "2nd");
streets.addEdge("2nd", "Main");

streets.getNeighbors("Main"); // ["1st", "2nd", "3rd"]`}
        language="typescript" />
</>;

export default EightEssentialTypescriptDataStructures;
