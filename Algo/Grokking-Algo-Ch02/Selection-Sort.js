/**
 * O(N) =>Time Complexity
 * O(1)=> Memeory Complexity
 * https://visualgo.net/en/sorting?slide=1-3
 */
const swap = (arr, min, current) => {
  let temp = arr[current];
  arr[current] = arr[min];
  arr[min] = temp;
};
function selectionSort(arr) {
  for (let current = 0; current < arr.length; current++) {
    let min = current;
    for (let i = current + 1; i < arr.length; i++) {
      if (arr[min] > arr[i]) {
        min = i;
      }
    }
    if (min != current) {
      swap(arr, min, current);
    }
  }
  return arr;
}

// selectionSort([5,3,4,1]);
console.log(selectionSort([34, 22, 10, 19, 17]));
console.log(selectionSort([1, 2, 3, 4, 5, 6, 7, 8]));
