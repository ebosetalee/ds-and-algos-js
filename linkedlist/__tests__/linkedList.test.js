//import { expect } from "@jest/globals";
import LinkedList from "../linkedList.js";

test("list is empty", () => {
    linkedList = new LinkedList()
    expect(linkedList.head).toBe(null)
})