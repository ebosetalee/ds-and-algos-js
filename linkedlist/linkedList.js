import Node from "../node/node.js";

class LinkedList {
    // Initialise the LinkedList here
    constructor() {
        this.head = null;
        this.tail = this.head;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    add(value) {
        // Insert value to the end of the LinkedList
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        const currentNode = this.tail;
        currentNode.next = newNode;
        this.tail = currentNode.next;
    }

    prepend(value) {
        // Insert value to the beginning of the LinkedList
        const newNode = new Node(value);
        const currentNode = newNode;
        currentNode.next = this.head;
        this.head = currentNode;
    }

    remove(value) {
        // Finds the value and removes it
        // returns true or false
        if (!this.head) {
            return false;
        }
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode) {
            if (currentNode.value === value) {
                if (previousNode) {
                    previousNode.next = currentNode.next;
                    if (currentNode === this.tail) {
                        this.tail = previousNode;
                    }
                } else {
                    this.head = currentNode.next;
                }
                return true;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    search(value) {
        // Finds the value in the LinkedList and returns true or false
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    print() {
        // Display the values in LinkedList
        const elements = [];
        let currentNode = this.head;
        while (currentNode) {
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return elements;
    }

    backwards() {
        // Display the values in the LinkedList in reverse
        const elements = this.print();
        return elements.reverse();
    }
}

export default LinkedList;
