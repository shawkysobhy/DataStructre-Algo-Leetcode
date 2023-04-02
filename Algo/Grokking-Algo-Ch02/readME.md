
# Ch02-Grokking Algorithms

this Chapter Called "Selection Sort" but is mainly talk about Memory and how data is stored in with basic and important data structures **Linked List** & **Array** these two data structure are used to everywhere and make more complex data structure

 ### content 
 
| Array |Linked List  |Selection Sort |
|--|--|--|
|[Array](#array)|[Linked List](#linked-list) | [selection sort](#selection-sort)
|[Array Pros](#array-pros)|[list Pros](#list-pros)|[small foot print](#small-foot-print)
|[Array Cons](#array-cons)|[list Cons](#array-cons)|[selection sort my implemantion](#selection-implemantion)
| [Array Big O](#array-big-o) |[linked list Big O](#linked-list-big-o) |


---

to work with array and linked list and show how they work and pros and cons of them

imagine memory is a chest of drawers each drawer can store an **item** and have an **address** indicate this drawer ,but in case of store multiple items that related we use this most basic way **Array** or **Linked List**

  

---

## Array

### array cons

- in array, items stored contiguously (right next to each other) in memory

*But may be casus a problem?*

> if you reserved 100 contiguous slot in memory and you stored in all of them what should I do if I want to exceed more items

**Ans**

  

you search for more 100 contiguous slots in memory and move items to it and this might be slow because you search then move

and you can reserved extra memory to use array so if you expected you use 100 slots reserved 300 slot but with this option there will a lot of empty reserved space in memory and this is waste of resource

  

--

### array pros

- in array stored items next to each other cause cons I talk about but on the other hand it have pros and this if we know the address of first slot in array we can calculate the address of other elements

**Ex**

Index = Starting Index + (Element Size * (Element Number - 1))

> starting Index :first slot in array

> element Number -1 :because array is zero index in most language so first element in index 0

> element size : ex in cpp integer value size is 4 bytes and each slot is 1 byte so each items reserved 4 slot so if first item in slot 100 ,second item will be in slot 104 to 108

  

## Array Big O

1. Accessing an element: The time complexity of accessing a single element in an array is O(1). This is because we can calculate the memory location of the element using its index, and memory access time is constant.

  

2. Inserting an element: The time complexity of inserting an element into an array depends on the position at which it is inserted. If the element is inserted at the end of the array, the time complexity is O(1). However, if the element is inserted at the beginning or in the middle of the array, all the subsequent elements may need to be shifted to make room, resulting in a time complexity of O(n).

  

3. Deleting an element: The time complexity of deleting an element from an array is similar to that of inserting an element. If the element is deleted from the end of the array, the time complexity is O(1). However, if the element is deleted from the beginning or in the middle of the array, all the subsequent elements may need to be shifted to fill the gap, resulting in a time complexity of O(n).

  

4. Searching for an element: The time complexity of searching for a specific element in an unsorted array is O(n), where n is the size of the array. This is because in the worst case scenario, we may have to examine every element in the array before we find the one we are looking for.

5. Sorting an array: The time complexity of most sorting algorithms is O(n log n) or O(n^2), depending on the algorithm used. This means that as the size of the array grows, the time it takes to sort the array will increase at a rate proportional to n log n or n^2, respectively.

---
## Linked List
with linked list , your items can be stored anywhere in memory not only contiguous slots 
each items in linked list store the address of next items 
### list pros

> if there's space in memory, you have space for  your linked list 

1.  Dynamic size: Unlike arrays, linked lists can grow or shrink in size during runtime, making them more flexible and efficient when dealing with data sets of unknown or changing size.
    
2.  Efficient insertion and deletion: Inserting or deleting an element in a linked list can be much faster than in an array, especially for large datasets. This is because linked lists only need to update the pointers of the adjacent nodes to insert or delete an element, whereas arrays require shifting all the elements to fill the gap.
    
3.  Constant-time insertion and deletion at the beginning: Adding or removing an element at the beginning of a linked list is a constant-time operation, regardless of the size of the list, whereas this is not the case for arrays.
    
4.  Memory efficiency: Linked lists use only the memory required to store their elements and pointers, which can make them more memory-efficient than arrays for sparse datasets or datasets with many null or empty values.
    
5.  Flexibility: Linked lists can be used to implement other data structures, such as stacks, queues, and trees, making them a versatile and useful tool in software development.
---
### list cons
1.  Slow random access: Unlike arrays, linked lists do not provide constant-time access to elements at arbitrary positions. In order to access an element, we need to traverse the list from the beginning or the end, which can take O(n) time in the worst case, where n is the size of the list.
    
2.  Extra memory overhead: Linked lists require extra memory to store the pointers or references between nodes, which can make them less memory-efficient than arrays, especially for small datasets or datasets with a low degree of sparsity.
    
3.  Sequential access: Linked lists are optimized for sequential access, where we traverse the list from one node to the next. However, they are not well-suited for random access or searching, where we need to jump to a specific node based on its value or index.
    
4.  Complexity: Linked lists can be more complex to implement and maintain than arrays or other data structures, especially for operations such as merging or sorting, which require rearranging the nodes and updating their pointers.
    
5.  Fragile: Linked lists can be fragile or prone to errors if the pointers or references between nodes are not properly managed or updated, leading to memory leaks, null pointer errors, or other bugs.

---
### Linked List Big O
1.  Accessing an element by index: O(n) Since linked lists do not provide random access to elements, accessing an element by index requires traversing the list from the beginning until we reach the desired index. In the worst case, this takes O(n) time, where n is the size of the list.
    
2.  Inserting an element at the beginning: O(1) Inserting an element at the beginning of a singly linked list only requires updating the head pointer, which takes constant time, O(1).
    
3.  Inserting an element at the end: O(n) Inserting an element at the end of a singly linked list requires traversing the entire list until we reach the last node, and then updating its next pointer to point to the new element. In the worst case, this takes O(n) time.
    
4.  Inserting an element at a specific index: O(n) Inserting an element at a specific index requires traversing the list from the beginning until we reach the desired index, and then updating the pointers of the adjacent nodes to insert the new element. In the worst case, this takes O(n) time.
    
5.  Deleting an element at the beginning: O(1) Deleting an element at the beginning of a singly linked list only requires updating the head pointer, which takes constant time, O(1).
    
6.  Deleting an element at the end: O(n) Deleting an element at the end of a singly linked list requires traversing the entire list until we reach the last node, and then updating its next pointer to point to null. In the worst case, this takes O(n) time.
    
7.  Deleting an element at a specific index: O(n) Deleting an element at a specific index requires traversing the list from the beginning until we reach the desired index, and then updating the pointers of the adjacent nodes to remove the element. In the worst case, this takes O(n) time.

-----
---
## Selection Sort

Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of an array and moving it to the beginning of the sorted part of the array. Here are the steps to perform selection sort on an array of n elements:

1.  Iterate through the array from the first element to the (n-1)th element.
2.  For each iteration i, find the index j of the minimum element in the unsorted part of the array, which is the subarray from index i to index (n-1).
3.  Swap the ith element with the jth element.
4.  Repeat steps 2-3 until the entire array is sorted.

The time complexity of selection sort is O(n^2) in both the worst case and average case, which makes it inefficient for sorting large arrays. However, selection sort has the advantage of having a small memory footprint and being easy to implement, which can be useful in certain situations where simplicity and low memory usage are more important than efficiency.

---
### Small foot print 
In computer science, "small footprint" refers to a program or algorithm that uses a relatively small amount of memory or disk space compared to other programs or algorithms that perform the same task.

For example, a program with a small footprint might be designed to use minimal memory resources, which can be beneficial for systems with limited memory, such as mobile devices or embedded systems. Similarly, an algorithm with a small footprint might be designed to use a minimal amount of disk space, which can be important for applications that process large amounts of data or have limited storage capacity.

A small footprint program or algorithm can offer several advantages, such as faster execution, reduced power consumption, and improved scalability. However, achieving a small footprint often requires making trade-offs between performance and resource usage, and it can be a challenging task that requires careful optimization and testing

---
## selection Implementation

````/**
* O(N) =>Time Complexity
* O(1)=> Memeory Complexity
* https://visualgo.net/en/sorting?slide=1-3
*/

const  swap  = (arr, min, current) => {
let  temp  =  arr[current];
arr[current] =  arr[min];
arr[min] =  temp;
};
function  selectionSort(arr) {
for (let  current  =  0; current  <  arr.length; current++) {
let  min  =  current;
for (let  i  =  current  +  1; i  <  arr.length; i++) {
if (arr[min] >  arr[i]) {
min  =  i;
}
}
if (min  !=  current) {
swap(arr, min, current);
}
}
return  arr;
} 
// selectionSort([5,3,4,1]);
console.log(selectionSort([34, 22, 10, 19, 17]));
console.log(selectionSort([1, 2, 3, 4, 5, 6, 7, 8]));
```