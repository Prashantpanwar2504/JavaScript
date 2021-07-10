function Hello(name)
{
    console.log("Hello Prashant");
    console.log("Hello, " +name);
}

Hello();
Hello("Mansi")


function hellothere(name)
{
    console.log(`Hello there, ${name}. How are you?`);
}
hellothere("Prashant")

//Return value
function namastey()
{
    return "Namastey.";
}

var greeting = namastey();
console.log(greeting);
console.log(namastey());

// Function with argument
function getuserRole(name, role)
{
    switch(role)
    {
        case "admin":
            return `${name} ia admin with all the access.`;
            break;
        case "subadmin":
            return `${name} ia sunadmin with access to create and delete.`;
            break;
        case "user":
            return `${name} is user.`;
            break;
        default:
            return `${name} is a triql user.`;
    }
}
console.log(getuserRole("Prashant", "oidahf"));

console.log("======================================================================")
// Uniqe feature of Javascript
var getuserrole = function(name, role)
{
    switch(role)
    {
        case "admin":
            return `${name} ia admin with all the access.`;
            break;
        case "subadmin":
            return `${name} ia sunadmin with access to create and delete.`;
            break;
        case "user":
            return `${name} is user.`;
            break;
        default:
            return `${name} is a trial user.`;
    }
}

console.log(getuserrole("Prashant", "oidahf"));

console.log("===================================================================")
// function declaretion is saves and made available for calling
//Context in javascript.
calling();          
function calling()
{
    console.log(`Hello World i am calling.`);
}

// Once the function is Register than that function is wrapped up
// and put inside the global context.


// Global Context : Collecting info from everything and about everything in mejarity of the cases. it's
// window object available. window object is tide majority with the Browser

console.log("Context=========================================================")
/*
Execution Context: 
1. Variable Object,
2. Scope Chain,
3. This Keyword.
*/

/*
2 Rule for Excution Context.
    1. Fuction declairation are scanned and made available example calling() funtion
    2. Variable Declairation are scanned and made undefined. 
*/
var name = "Prashant" // Rule 1
calling2(name);
function calling2(n)
{
    console.log(`hello ${n}.`);
}
// Rule 2.
// calling3("Prashant");
// var calling3 = function(name)  this code will raise the error Calling3 is not defined.
// {
//     console.log(`Hello ${name}`);
// }
/*
Currently global context can't tide
the function, cuz it is consider it as a variable
and made it undefined.

So we can do this.
*/

var calling4 = function(name)
{
    console.log(`hello ${name}.`);
}
calling4("PRashant");

// for clarifying the 2 rule
console.log(name1);
var name1 = "Prashant";
console.log(name1);



/*
                                Scope chaning

Scope is the way of accessing variable function and objects in some particulare
part of your code during runtime.
                                with scope we provide some level of security to our code.
we have access to the stuff we need at a time

There are two kinds of scope.
    1. Global scope
    2. Local scope

Scope chaining: establish scope for the given function. each function defined, has it's own 
nested scope within another function has a local scope which is linked to the outer function
this link is collled chaining.
*/

//Global scope
console.log("Global scope======================================================")
var v1 = "Prashant";
console.log("line 151:"+v1);
function sayname()
{
    console.log("line 154:" +v1);
}
sayname();

// Local scope
console.log("Local scope======================================================")
var v2 = "Prashant";
console.log("line 161:"+v2);
function sayName()  // if the function have local varible the prioty is 
{                   // given to the local varialbe not to global variable.                    
    var v2 = "MR P";
    console.log("line 165:"+v2);
}
sayName();

// Note: { } in the statement like in if, for, switch, while, not consiider as a scope.
// { } in the function will be consider as a scope.

console.log("{ }==========================================================");
var x1="prashant";
console.log("line174:" +x1);
function sayname3()
{
    var x1 = "Mr P";
    console.log("line 178:"+x1);
    sayname4();
    function sayname4()
    {
        console.log("inside function: line 182:" +x1);
    }
}
sayname3();


/*
when every function has the var in their scope then the prioty will be given the them.
*/

console.log("scope==========================================================")
var Name = "prsshant";
console.log("line 194:"+Name); //global scope

function sayname5()
{
    var Name="Mr. PP";
    console.log("line 199:"+Name);  //local scope with in the fuction
    sayname6();
}
function sayname6()
{
    var Name = "MR. Prashant Panwar";
    console.log("line 206:"+Name); //locla scope within this function
}
sayname5();


/*
this keyword: is the reference variable the t refer to the current object.
*/
console.log("this=======================================================");
console.log(this);
