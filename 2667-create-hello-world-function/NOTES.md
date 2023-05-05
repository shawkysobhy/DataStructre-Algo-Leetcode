```
const result = (function(a, b) {
const sum = a + b;
return sum;
})(3, 4);
console.log(result); // 7
​
const result=(function sumNums(a,b){
return a+b
})(5,6)
​
const result2=(function sumNums(x1,x2){
return x1+x2+5;
})(5,5)
console.log(result)
console.log(result2)
```
##### Why would you write code like this? It gives you the opportunity to encapsulate a variable within a new scope. For example, another developer can immediately see that sum can't be used anywhere outside the function body.
​
​
​