1. - use word in array as prefix
2. - loop througt array of strings 
3. - not increament loop or move to next element untill process prefix word to match prefix of word
4.- make step 3 in all next element

ex:-
Input: strs = ["flower","flow","flight"]

prefix=flower;
prefix with flow
after slice it prefix = flow 
-----
prefix with flight
 "flow" with flight
 after slice it  prefix =fl;
 return fl
 ------
 ex2:
Input: strs = ["dog","racecar","car"]

dog with racecar there no prefix between them 
dog after slice become "" so return empty string
----
note :-
  prefix=prefix.slice(0,-1) 
	use -1 each iterate not increamtnt beacuse slice not inplace function and we store new value inside prefix then each iterate we discreament one character beacuse we deal with new value every iterate not original value


