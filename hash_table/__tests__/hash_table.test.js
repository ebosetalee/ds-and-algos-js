import HashTable from "../hash_table";

describe("Hash Table Operations", () => {
    test("Table Size", () => {
        const hashTable = new HashTable();

        expect(hashTable.table.length).toBe(10);
        expect(hashTable.size).toBe(10);
    });

    test("Table is empty", () => {
        const hashTable = new HashTable();

        expect(hashTable.getValues()).toStrictEqual([]);
    });

    test("Hash Value to Key", () => {
        const hashTable = new HashTable();

        expect(hashTable.hash("baskets")).toBe(9);
    });

    test("Get value, not in the table to return null", () => {
        const hashTable = new HashTable();

        expect(hashTable.get("basket")).toBeNull();
    });

    test("Set value uses hashed key to add value to the table", () => {
        const hashTable = new HashTable();

        hashTable.set("basket");
        expect(hashTable.getValues()).toStrictEqual(["basket"]);
    });

    test("Get value returns the hashed key", () => {
        const hashTable = new HashTable();

        hashTable.set("basket");
        expect(hashTable.get("basket")).toBe(4);
    });

    test("Set collision, chooses next available key", () => {
        const hashTable = new HashTable();

        hashTable.set("baskets");
        hashTable.set("bassket");
        expect(hashTable.get("baskets")).toBe(9);
        expect(hashTable.hash("bassket")).toBe(9);
        expect(hashTable.get("bassket")).not.toBe(9);
    });

    test("Get collision, returns the key to the value", () => {
        const hashTable = new HashTable();

        hashTable.set("baskets");
        hashTable.set("bassket");
        expect(hashTable.hash("bassket")).toBe(9);
        expect(hashTable.get("bassket")).not.toBe(9);
        expect(hashTable.get("bassket")).toBe(10);
    });

    test("Collision outside the table's length, increases the table size by 2", () => {
        const hashTable = new HashTable();

        hashTable.set("baskets");
        hashTable.set("bassket");
        expect(hashTable.get("baskets")).toBe(9);
        expect(hashTable.get("bassket")).toBe(10);
        expect(hashTable.size).toBe(10);
        hashTable.set("ketbass");
        expect(hashTable.get("ketbass")).toBe(11);
        expect(hashTable.size).toBe(12);
    });

    test("Get Values returns all values in the table in asc order", () => {
        const hashTable = new HashTable();

        hashTable.set("baskets");
        hashTable.set("bassket");
        hashTable.set("ketbass");
        expect(hashTable.getValues()).toStrictEqual([
            "baskets",
            "bassket",
            "ketbass"
        ]);
    });

    test("Collision values are stored in table using has", () => {
        const hashTable = new HashTable();

        hashTable.set("baskets");
        hashTable.set("bassket");
        expect(hashTable.has(hashTable.get("bassket"))).toBeTruthy();
    });

    test("Has, a key has a value returns true", () => {
        const hashTable = new HashTable();

        hashTable.set("baskets")
        hashTable.set("Jane Francis")
        expect(hashTable.has(9)).toBeTruthy()
        expect(hashTable.has(4)).toBeTruthy()
    });

    test("Has, a key has no value returns false", () => {
        const hashTable = new HashTable();

        hashTable.set("baskets")
        hashTable.set("Jane Francis")
        expect(hashTable.getValues()).toStrictEqual(["Jane Francis", "baskets"])
        expect(hashTable.has(10)).toBeFalsy()
    });

    test("Delete value and key in the table returns true", () => {
        const hashTable = new HashTable();

        hashTable.set("Saints")
        hashTable.set("Jane Francis")
        expect(hashTable.delete("Saints")).toBeTruthy()
        expect(hashTable.getValues()).toStrictEqual(["Jane Francis"])
    });

    test("Delete value and key not in the table returns false", () => {
        const hashTable = new HashTable();

        hashTable.set("Baskets")
        expect(hashTable.delete("James")).toBeFalsy()
        expect(hashTable.delete("basskets")).toBeFalsy()
    });

    test("Delete collision values and keys not in the table returns true", () => {
        const hashTable = new HashTable();

        hashTable.set("baskets");
        hashTable.set("bassket");
        expect(hashTable.getValues()).toStrictEqual(["baskets", "bassket"])
        hashTable.delete("bassket")
        expect(hashTable.get("bassket")).toBeNull()
        expect(hashTable.has(9)).toBeTruthy()
        expect(hashTable.getValues()).toStrictEqual(["baskets"])
    });
});
