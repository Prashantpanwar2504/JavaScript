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
