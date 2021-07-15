/*
this keyword: for all regular function calls, this point to window object.
*/

console.log(this);

// on browserit will give us window object.
console.log("this keyword=============================================")
var user = {
    first : 'prashant',
    class : 16,
    getclass : function()
    {
        console.log("line 14:", this);
    }
}

user.getclass();
console.log("regular()================================================")
// regular function
function sayHello()
{
    console.log("Line 23:", this); //sience this is the regular function in th function, 'this' is returning window object.
    console.log("Hello")
}
sayHello();


console.log("================================================")
console.log("when we define a regular finction in the object, this regular function \n will also point to the window object.");
var user2 = {
    first : 'prashant',
    age : 21,
    getInfo : function() {
        console.log("line 35:", this); // user object.
        function sayHello()
        {
            console.log("line 38: inside object, ",this);
            console.log("hello.")
        }
        sayHello();
    }
}

user2.getInfo();