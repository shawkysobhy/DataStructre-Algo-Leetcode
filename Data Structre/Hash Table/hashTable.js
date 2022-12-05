const hash = (key, arrLength) => {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = total + value;
    }

    total = total % arrLength;
    console.log(total);
};

/// imporving Hash function

const hash2 = (key, arrLength) => {
    //arrLength when is prime reudce collisions
    const PrimeNumber = 33;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        //use Math.min with 100 to not loop more than 100 char and this make function nearly have constant time

        let value = key[i].charCodeAt(0);
        total = total * PrimeNumber + value;
    }
    total = total % arrLength;
    console.log(total);
};
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    hash(key) {
        let total = 0;
        let randomPrimeNumber = 33;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key[i].charCodeAt(0);
            total = total * randomPrimeNumber + value;
        }
        total = total % this.keyMap.length;
        return total;
    }

    Set(key, value) {
        let hashedKey = this.hash(key);
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, value]);
    }
    Get(key) {
        let hashedKey = this.hash(key);
        if (!this.keyMap[hashedKey]) return undefined;
        if (this.keyMap[hashedKey]) {
            for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
                if (key == this.keyMap[hashedKey][i][0]) {
                    return this.keyMap[hashedKey][i][1];
                }
            }
        }
        return undefined;
    }

    Keys() {
        let keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) continue;
            for (let j = 0; j < this.keyMap[i].length; j++) {
                keys.push(this.keyMap[i][j][0]);
            }
        }

        console.log(keys);
    }
    Values() {
        let values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) continue;
            for (let j = 0; j < this.keyMap[i].length; j++) {
                values.push(this.keyMap[i][j][1]);
            }
        }

        console.log(values);
    }
}

let myHashTable = new HashTable(4);
console.log(myHashTable);

myHashTable.Set("name", "shawky sobhy gouda");
myHashTable.Set("college", "BFCAI");
myHashTable.Set("favourite color", "SkyBlue");

let result = myHashTable.Get("college");
console.log(result);
myHashTable.Keys();
myHashTable.Values();
