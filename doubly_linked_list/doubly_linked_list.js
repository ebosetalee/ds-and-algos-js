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
// const my_list = new DoublyLinkedList();
// console.log(my_list.head);
// console.log(my_list.add(2));
// console.log(my_list.head.value);
// my_list.add(5);
// console.log(my_list.search(7));
// my_list.prepend(0);
// my_list.add(7);
// console.log(my_list.remove(0));
// console.log(my_list.getHead());
// console.log(my_list.getTail());
// console.log(my_list.find(5).previous.value); // Interesting!!!
// console.log(my_list.print());
// console.log(my_list.backwards());

export default DoublyLinkedList;
