/**
 * @param {number[]} nums
 * @return {number[]}
 */
const mergeArrays = (leftArr, rightArr) => {
	const mergedArr = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			mergedArr.push(leftArr[leftIndex]);
			leftIndex++;
		} else {
			mergedArr.push(rightArr[rightIndex]);
			rightIndex++;
		}
	}
	while (leftIndex < leftArr.length) {
		mergedArr.push(leftArr[leftIndex]);
		leftIndex++;
	}
	while (rightIndex < rightArr.length) {
		mergedArr.push(rightArr[rightIndex]);
		rightIndex++;
	}

	return mergedArr;
};
var sortArray = function(nums) {
    if(nums.length<=1)return nums;
    let mid=Math.floor(nums.length/2);
    let left=sortArray(nums.slice(0,mid))
    let right=sortArray(nums.slice(mid));
    return mergeArrays(left,right);
};