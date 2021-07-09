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



// === check for Identical equal and same data type

function isEven(num)
{
    console.log(`number is ${num%2===0? 'even.' : 'odd.'}`);
    return 0;
}

isEven(73);



var listing_price = 100;
var selling_price = 20;
var result = listing_price > selling_price;

console.log(typeof result);
console.log(result)