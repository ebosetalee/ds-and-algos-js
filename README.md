# Data Structure and Algorithms In JavaScript
In this repository, the following are the data structures implemented:

1. Linked List
2. Doubly Linked List
3. Queue
4. Stack
5. Hash Table

## LINKED LIST
A Linked List is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a group of nodes which together represent a sequence. 

### Basic Operations:
1. Insertion − Adds an element at the end of the list.
2. Prepend − Adds an element at the beginning of the list.
3. Display − Displays the complete list.
4. Search − Searches for an element using the given key.
5. Delete − Deletes an element using the given key.
6. Reverse - Moves the head list to the last node.

## DOUBLY LINKED LIST
Doubly Linked List is a variation of Linked list whereby traversion can be done in both ways, either forward and backward compared to Single Linked List. Therefore, has previous, link and next.
### Basic Operations:
1. Insertion − Adds an element at the end of the list.
2. Prepend − Adds an element at the beginning of the list.
3. Display − Displays the complete list.
4. Display backward − Displays the complete list in a backward manner.
5. Search − Searches for an element using the given key.
6. Delete − Deletes an element using the given key.
7. Delete Last − Deletes an element from the end of the list.
8. Reverse - Moves the head list to the last node.


## QUEUE
Queue is an abstract data structure that follows the __First-In-First-Out methodology__, i.e., the data item stored first will be accessed first. Therfore, one end is always used to insert data (enqueue) and the other is used to remove data (dequeue).

### Basic Operations:

1. `enqueue()` − add (store) an item to the queue.
2. `dequeue()` − remove (access) an item from the queue.
3. `peek()` − Gets the element at the front of the queue without removing it.
4. `isempty()` − Checks if the queue is empty.

## STACK
Stack is a simple data structure that allows adding and removing elements in one particular order which is__LIFO(Last in First out)__ structure or __FILO(First in Last out)__.

### Basic Operations:

1. `push()` - Adds value to the stack
2. `pop()` - Remove the last value added to the stack
3. `peek()` - Returns the last item in the stack without removing it

## HASH TABLE
A hash table implements a structure that maps keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

### Hash Algorithm:
1. input the string argument n
2. find the ascii value of each character in n
3. add the ascii values as value
4. return the remainder of value divided by 1000

### Basic Operations:
1. `get` - Searches for the key using a given element or value.
2. `set`- Adds an element to the table using the key;
3. `delete` - Deletes an element or value;
4. `has` - Searches if the key is in the table using the given key;
5. `hash` - Creates the hash key;
6. `get_values` - Displays the elements or values in the table.

For More Information on Data Structure check this [ReadMe.md](https://github.com/ebosetalee/ds-and-algos/blob/5b7b48beb91354724c81f22836298d214493deff/README.md)