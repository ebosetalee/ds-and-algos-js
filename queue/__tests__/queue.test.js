import Queue from "../queue.js";

test("Queue is empty", () => {
    const queue = new Queue();
    expect(queue.items.head).toBe(null);
    expect(queue.empty()).toBe(true);
});

test("Queue not empty", () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(2);
    queue.enqueue(7);
    expect(queue.empty()).toBe(false);
});

test("Enqueue", () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(2);
    queue.enqueue(7);
    expect(queue.items.print()).toStrictEqual([5, 2, 7]);
});

test("Dequeue", () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(9);
    expect(queue.items.print()).toStrictEqual([2, 5, 9]);
    expect(queue.dequeue()).toBe(2);
    expect(queue.items.head.value).toBe(5);
    expect(queue.items.print()).toStrictEqual[(5, 9)];
});

test("Dequeue list with one Item", () => {
    const queue = new Queue();
    queue.enqueue(6);
    expect(queue.items.print()).toStrictEqual([6]);
    expect(queue.dequeue()).toBe(6);
    expect(queue.empty()).toBe(true);
    expect(queue.items.print()).toStrictEqual([]);
});

test("Dequeue empty list", () => {
    const queue = new Queue();
    expect(queue.empty()).toBe(true);
    expect(queue.dequeue()).toBe(null);
});

test("Peek", () => {
    const queue = new Queue();
    queue.enqueue(6);
    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(9);
    expect(queue.peek().value).toBe(6);
});

test("Peek Item next of Head", () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(9);
    expect(queue.peek().next.value).toBe(5);
});

test("Peek Item next in list of one item", () => {
    const queue = new Queue();
    queue.enqueue(2);
    expect(queue.peek().next).toBe(null);
});
