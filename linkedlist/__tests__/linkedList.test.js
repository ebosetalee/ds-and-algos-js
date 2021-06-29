import LinkedList from "../linkedList.js";

test("list is empty", () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
});
