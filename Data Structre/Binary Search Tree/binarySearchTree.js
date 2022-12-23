class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (current.value === value) return this;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (current.left === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    /**
     * Time Complextiy
     * O(log n)
     */
    search(value) {
        if (!this.root) return false;
        let current = this.root;
        while (true) {
            if (current.value == value) return true;
            if (value < current.value) {
                if (current.left === null) return false;
                current = current.left;
            } else {
                if (current.right === null) return false;
                current = current.right;
            }
        }
    }
    /**
     * Time Complextiy
     * O(log n)
     */
}
let tree = new BinarySearchTree();
tree.insert(100);
tree.insert(80);
tree.insert(60);
tree.insert(40);
tree.insert(30);
tree.insert(0);
// console.log(tree.search(30));
// console.log(tree);
console.log(tree);
/**
 *        10
 *     5          15
 *   1    null
 *     3
 *
 */
