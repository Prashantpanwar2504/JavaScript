function myinfo(fname, lname, country)
{
    console.log(`
    My Name is ${fname} ${lname}.
    And i am from ${country}.
    `);
}


myinfo("Prashant", "Panwar", "India");

const x = "GeekforGeeks";

console.log(`I like ${x}`);

function geek()
{
    return "Hello";
}

console.log(`${geek()}, Welcome to ${x}`);



function isEven(num)
{
    console.log(`number is ${num%2===0? 'even.' : 'odd.'}`);
    return 0;
}

isEven(73);
