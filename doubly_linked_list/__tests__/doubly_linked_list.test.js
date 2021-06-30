//import { test } from "jest-circus";
import DoublyLinkedList from "../doubly_linked_list";

test("Empty List", () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
});

test("Add One to the list", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(0);
    expect(linkedList.head.value).toBe(0);
});

test("Add two to the list", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(0);
    linkedList.add("1");
    expect(linkedList.head.next.value).toBe("1");
    expect(linkedList.head.next.value).toBe(linkedList.tail.value);
    expect(linkedList.print()).toStrictEqual([0, "1"]);
});

test("Add to the beginning of the list", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(2);
    linkedList.add(4);
    linkedList.prepend(0);
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.tail.value).toBe(4);
});

test("Remove Item from the head", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(5);
    linkedList.add(20);
    expect(linkedList.remove(5)).toBe(true);
    expect(linkedList.head.value).toBe(20);
});

test("Remove item from Middle", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(2);
    linkedList.add(5);
    linkedList.add(8);
    linkedList.add(10);
    linkedList.add(20);
    expect(linkedList.remove(8)).toBe(true);
    expect(linkedList.print()).toStrictEqual([2, 5, 10, 20]);
});

test("Remove Item from the tail", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(2);
    linkedList.add(5);
    linkedList.add(8);
    linkedList.add(10);
    linkedList.add(20);
    expect(linkedList.remove(20)).toBe(true);
    expect(linkedList.tail.value).toBe(10);
    expect(linkedList.print()).toStrictEqual([2, 5, 8, 10]);
});

test("Remove item not in the list", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(2);
    linkedList.add(5);
    linkedList.add(8);
    linkedList.add(10);
    linkedList.add(20);
    expect(linkedList.remove(6)).toBe(false);
    expect(linkedList.print()).toStrictEqual([2, 5, 8, 10, 20]);
});

test("Find item in the list", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(2);
    linkedList.add(6);
    expect(linkedList.find(2).value).toBe(2);
});

test("Search for item at the head", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(6);
    linkedList.add(5);
    expect(linkedList.search(6)).toBe(true);
    expect(linkedList.head.value).toBe(6);
});

test("Search for item in the middle", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(2);
    linkedList.add(5);
    linkedList.add(8);
    linkedList.add(10);
    expect(linkedList.search(5)).toBe(true);
});

test("Search for item at the tail", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(22);
    linkedList.add(50);
    expect(linkedList.search(50)).toBe(true);
    expect(linkedList.tail.value).toBe(50);
});

test("Search for item not in the list", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(8);
    linkedList.add(10);
    linkedList.add(24);
    linkedList.add(50);
    expect(linkedList.search(12)).toBe(false);
});

test("Print Empty List", () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.print()).toStrictEqual([]);
});

test("Print items in the list", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(2);
    linkedList.add(8);
    linkedList.add(12);
    linkedList.add(20);
    linkedList.add(58);
    linkedList.add(50);
    expect(linkedList.print()).toStrictEqual([2, 8, 12, 20, 58, 50]);
});

test("Print Empty List in reverse", () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.backwards()).toStrictEqual([]);
});

test("Print list backwards", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.add(8);
    linkedList.add(12);
    linkedList.add(20);
    linkedList.add(58);
    linkedList.add(50);
    expect(linkedList.backwards()).toStrictEqual([50, 58, 20, 12, 8]);
});
