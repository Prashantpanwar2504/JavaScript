var countries = ['India', 'USA', 'Russia', 'Japan'];

var states = new Array("UP", "Delhi", "HP", "Assam");

console.log(countries.length);  // size of the array

console.log(states[3].length); // sze of the string


/*
in Javascriptwe can store differnt type of datatype element in the array.
*/
var user =  new Array("Prashant", 'prashantpanwar2345@gmail.com', 21, 81, true);
console.log(user);
//delete the last element form the array
user.pop();
console.log(user);
//unshift method add one more element to the begining of an array and return the new lenght of the array
user.unshift("MCA");
console.log(user);
//shift method remove the zeroth element from the Array and return the new length of the array.
user.shift();
console.log(user);
/*
indexof method return the index of the passing element.
if we pass a element which is not present in the array then
it will return -1 as a index. 
*/
console.log(user.indexOf(81));
console.log(user.indexOf("fuck you"));


// String into Array
var name1 = "PRASHANT PANWAR";
console.log(Array.from(name1));
console.log(name1);