// Coercion and Falsy Value
/*
1. undefined  |
2. null       |
3. 0           }   Falsy Value 
4. ''         |
5. NaN        |
*/

var user;
console.log(user);  // undefined

if(user) // nothing
{
    console.log(true)
}

user = ''       //Nothing
if(user)
{
    console.log(true)
}

user = ' '  //true
if(user)
{
    console.log(true)
}

user = 'wf'     // true
if(user)
{
    console.log(true)
}



console.log(2 + 2);     //4
console.log(2 + "2");   //22
console.log("2" + 2);   //22
console.log("2" + "2"); //22
console.log(2 + '2');   //22




// Coercion

var num = "2";
if(num == 2)
{
    console.log("True");
}
if( 2 === num)
{
    console.log("True");
}
console.log(2);


// Tarnary Operator

var authenticated = true;
if(authenticated)
{
    console.log("SignIn");
}
else{
    console.log("Not Authenticated");
}

// we can do this using Tarnary operator

function login(authenticated)
{
    authenticated ? console.log("Signin"): console.log("Not Authenticated");
}

login(authenticated);