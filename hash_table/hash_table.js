class HashTable {
    constructor() {
        this.size = 10;
        this.table = new Array(this.size);
    }

    hash(value) {
        // Creates the hash key
        let key = 0;
        value.split("").forEach((cha) => {
            key += cha.charCodeAt();
        });
        return key % this.size;
    }

    get(value) {
        // Searches for the key using a given element or value.
        return this.table.indexOf(value) === -1
            ? null
            : this.table.indexOf(value);
    }

    set(value) {
        // Adds an element to the table using the key
        // Takes notice of collision
        let key = this.hash(value);
        if (this.has(key)) {
            let added = 1;
            while (this.table[key] !== undefined) {
                key += added;
                added + 1;
            }
        }
        this.table[key] = value;
        if (key > this.size) {
            this.size = this.table.length;
        }
    }

    getValues() {
        // Displays the elements or values in the table
        return this.table.filter((item) => item);
    }

    has(key) {
        // Searches if the key is in the table using the given key
        return this.table[key] !== undefined;
    }

    delete(value) {
        // Deletes an element or value and its key using the given element
        const key = this.get(value)
        if (key) {
            this.table[key] = undefined
            return true
        }
        return false
    }
}

export default HashTable;