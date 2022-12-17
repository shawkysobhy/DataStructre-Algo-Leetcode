function helper(nums: number[], target: number, left: number, right: number) {
    if (left > right) {
        return -1;
    }

    let middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
        return middle;
    }

    if (target < nums[middle]) {
        return helper(nums, target, left, middle - 1);
    } else {
        return helper(nums, target, middle + 1, right);
    }
}
function search(nums: number[], target: number) {
    return helper(nums, target, 0, nums.length - 1);
}
