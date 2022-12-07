function groupAnagrams(strs: string[]): string[][] {
    let map = {};
    for (let ele of strs) {
        let sortedWord = ele.split("").sort().join("");
        map[sortedWord] ? map[sortedWord].push(ele) : (map[sortedWord] = [ele]);
    }
    return Object.values(map);
}
