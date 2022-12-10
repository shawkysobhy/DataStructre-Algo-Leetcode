function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let last: number = nums1.length - 1;
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[last] = nums1[m - 1];
            m--;
        } else {
            nums1[last] = nums2[n - 1];
            n--;
        }
        last--;
    }
    while (n > 0) {
        nums1[last] = nums2[n - 1];
        n--;
        last--;
    }
}
