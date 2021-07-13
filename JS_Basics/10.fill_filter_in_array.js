/*
fill():it will al the value with the given parametre in the fill().
*/
//fill entire array with 'A'
var array = [1,2,3,4,5,6,7,8,9,10];
console.log(array.fill('A'));
console.log("==================================");
// fill after the index
var array1 = [1,2,3,4,5,6,7,8,9,10];
console.log(array1.fill('A', 5));

console.log("==================================");
//fill from the starting range to till the ending range but not end range.
// in js range parameter are inclusive and exclusive, it will include index from where range start
//but not include where range end
var array2 = [1,2,3,4,5,6,7,8,9,10];
console.log(array2.fill('A', 3 /*starting index*/, 9 /*ending index but exclusive*/))

console.log("filter()==================================");
/*
filter(): when we want to create a copy of the array and don't want to have some element form the 
array then we use filter().
*/
var array3 = [1,2,3,4,5,6,7,8,9,10];
const array4 = array3.filter((num) => num != 6/*element not eual to 6 will we inserted in the new array*/);
const array5 = array3.filter((num) => num >= 6);
const array6 = array3.filter((num) => num < 6);
console.log(array4);
console.log(array5);
console.log(array6);