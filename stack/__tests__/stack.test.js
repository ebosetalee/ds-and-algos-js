import Stack from "../stack";

test("Empty Stack", () => {
    const stack = new Stack();
    expect(stack.items.head).toBeNull();
    expect(stack.items.tail).toBeNull();
    expect(stack.items.print()).toEqual([]);
});

test("Push to empty stack", () => {
    const stack = new Stack();
    stack.push(2);
    expect(stack.items.head.value).toBe(2);
    expect(stack.items.print()).toStrictEqual([2]);
});

test("Push to non empty stack", () => {
    const stack = new Stack();
    expect(stack.items.head).toBeNull();
    stack.push(3);
    expect(stack.items.head.value).toBe(3);
    stack.push(7);
    expect(stack.items.tail.value).toBe(7);
});

test("Pop from empty stack", () => {
    const stack = new Stack();
    expect(stack.items.head).toBe(null);
    expect(stack.pop()).toBeNull();
});

test("Pop from non empty stack", () => {
    const stack = new Stack();
    stack.push(4);
    stack.push(6);
    expect(stack.pop()).toBe(true);
    expect(stack.items.print()).toStrictEqual([4]);
});

test("Peek from empty stack", () => {
    const stack = new Stack();
    expect(stack.items.head).toBe(null);
    expect(stack.peek()).toBeNull();
});

test("Peek from non empty stack", () => {
    const stack = new Stack();
    stack.push(4);
    stack.push(6);
    expect(stack.peek()).toBe(6);
    expect(stack.items.print()).toStrictEqual([4, 6]);
});
