## Hash Table : data structre to store key-value parirs

- fast in find / add / removke values 
- key not orderd like array
- object in javascript is special implemenation of Hash table 
- Map in javascirpt is hash table / is called also hash map





 ### Hash Table 

 - we want to use key as human readble/meaningful name to use instead of numbers
 - But??? computer can not work with this type of key computer work with number se we need to convert key into vaild array index

 - and we Do that with HashFunction()


 ### hash function properties
 
 - hashFunction():function convert input(number,array,string,obj)to fixed size values

 - Fast
 - Doesnot cluster outputs at apcific indices, but distrubutes uniformly
 - Deterministic (same input => same output)

### Collisions 

- we deal with Collisions with two way

1-Separte Chaining:use nasted dataStructre [[d,d],d,,d,d,d,d,]

2-Linear probing:use next/previous empty slot


### Set and Get

- Set :
    1-get Key and value
    2-hash key
    3-store key value pairs inside hashTable array via separate chaining

- Get:
     1-get key
     2-Hash key
     3-get from separate chaining array and return &return undefined if not Fount



### Complexity

- insert O(1)
- deletion O(1)
- access O(1)

