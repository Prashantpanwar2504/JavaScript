var countries = ['India', 'USA', 'Russia', 'Japan'];

var states = new Array("UP", "Delhi", "HP", "Assam");

console.log(countries.length);

console.log(states[0].length);

var user =  new Array("Prashant", 'prashantpanwar2345@gmail.com', 21, 81, true);
console.log(user);
user.pop();
console.log(user);
user.unshift("MCA");
console.log(user);
user.shift();
console.log(user);
console.log(user.indexOf(81));
console.log(user.indexOf("fuck you"));


// String into Array
var name1 = "PRASHANT PANWAR";
console.log(Array.from(name1));
console.log(name1);