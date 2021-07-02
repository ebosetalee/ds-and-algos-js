import LinkedList from "../linkedlist/linkedList.js";

class Queue {
    constructor() {
        this.items = new LinkedList();
    }

    empty() {
        return this.items.head === null;
    }

    enqueue(value) {
        return this.items.add(value);
    }

    dequeue() {
        const currentNode = this.items.head;
        if (this.items.head === null) {
            return null;
        }
        this.items.head = this.items.head.next;
        return currentNode.value;
    }

    peek() {
        // returns the item at the front of the queue without removing it
        return this.items.head;
    }
}

export default Queue;
