import Node from "../node/node.js";
import LinkedList from "../linkedlist/linkedList.js";

class DoublyLinkedList extends LinkedList {
    // Initialize List here
    constructor() {
        super();
    }
    add(value) {
        // Add value to the list
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.head.previous = null;
            return;
        }
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    prepend(value) {
        // Add Value to the start of the list
        const newNode = new Node(value);
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
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
                if (currentNode === this.head) {
                    this.head = currentNode.next;
                    this.head.prepend = null;
                } else if (currentNode === this.tail) {
                    this.tail = previousNode;
                    previousNode.next = null;
                } else {
                    previousNode.next = currentNode.next;
                    currentNode = currentNode.next;
                    currentNode.previous = previousNode;
                }
                return true;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    }

    find(value) {
        // Finds the value in the LinkedList
        // returns the node or null
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

export default DoublyLinkedList;
