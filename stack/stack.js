import LinkedList from "../linkedlist/linkedList.js";

class Stack {
    constructor() {
        // Initializing Stack with an empty LinkedList
        this.items = new LinkedList();
    }

    push(value) {
        // Adds value to the stack
        this.items.add(value);
    }

    pop() {
        // Remove the last value added to the stack
        // returns true or false
        if (!this.items.head) {
            return null;
        }
        const value = this.items.tail.value;
        return this.items.remove(value);
    }

    peek() {
        // returns the last item in the stack without removing it
        if (!this.items.tail) {
            return null;
        }
        return this.items.tail.value;
    }
}

export default Stack;
