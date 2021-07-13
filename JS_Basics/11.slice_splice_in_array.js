/*
Note: we ever we passing a range to an array,
the first number is inclusive and last number is exclusive
(2,5)
    2 will be included,
    3 will be included,
    4 will be included,
    5 will not be included
*/

/*
slice(): slice function will return a slice of the array accoreding to the given range.
*/

console.log("slice()=================");
var users = ['max', 'ted', 'sam', 'monica', 'ross', 'tobby', 'joey'];
console.log(users.slice(1, 2)); // range index 1 to till 2 but not index 2
console.log(users.slice(1, 4)); // range index 1 to till 4 but not index 4
console.log(users.slice(1)); // range index 1 to till the end cuz range is not given
console.log(users.slice(4)); // range index 4 to the end cuz range is not given
console.log(users.slice(4, 10)); // out of range, but still print from range 4 to end.


/*
splice():this function replace the element from given range with a single element.
splice(1, 2, 'hi');
1= from the index
2= count from the given index(how many element you want to replace)
'hi' = replace with this element
*/
console.log("splice()=================");
var users2 = ['max', 'ted', 'sam', 'monica', 'ross', 'tobby', 'joey'];
console.log(users2);
users2.splice(1, 3, 'Chandler');
console.log(users2);

console.log("======================================")
//replaceing mre than 1 element with two elelemt.
var users3 = ['max', 'ted', 'sam', 'monica', 'ross', 'tobby', 'joey'];
console.log(users3)
users3.splice(1, 4, 'hi', 'bye');
console.log(users3)

console.log("=======================================")
//replaceing mre than 1 element with two elelemt.
var users4 = ['max', 'ted', 'sam', 'monica', 'ross', 'tobby', 'joey'];
console.log(users4)
users4.splice(1, 3, 'hi', 'bye' , 'hlo', 'shot', 'very', 'seeyou');
console.log(users4)