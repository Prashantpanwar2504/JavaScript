/*
Loop in java script.
*/
// for loop.
list = ['tom', 'jack', 'ross', 41, 'monica', 'joey', 'ruth'];
for(let i = 0; i < list.length; i++)
{
    if( typeof list[i] != "string") // if the condition is true then it will ignore the 
    {                               //iteration and continue from the next iteration
        continue;
    }
    console.log(list[i]);
}

console.log("==========================")

for(let i = 0; i < list.length; i++)
{
    if( typeof list[i] != "string") // if the condition is true no further execution 
    {                               // of will break the execution.
        break;
    }
    console.log(list[i]);
}
// let datatype: as soon as loop is over, memory of let variavle will be made free.

console.log('===================================')
// for each loop

list2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


list2.forEach((s) => (console.log(s)));

console.log("=====================================")
// for of loop
// for of loop user for traversing through the objects in js.
const socialedia = [
    'youtube',
    'facebook',
    'instagram',
    'tinder',
    'what\'sapp',
    'netflix'
]

for( var n of socialedia) // it will work for let, const, var.
{
    console.log(n);
}


// this is the real example of for of for ocjects.
console.log("for of====================")

const symbol = {
    yt : 'youtube',
    fb : 'facebook',
    nt : 'netflix',
    ig : 'instagram',
};

for(const n in symbol)
{
    console.log(n); // will print the keys of element in the objects.
}
// to print the key, value use this.
for(const n in symbol)
{
    console.log(`key is : ${n} and the value is ${symbol[n]}`);
}

console.log("while loop===========================================")
let i = 0;
 while( i < list2.length) // condition check then print
 {
     console.log(i);
     i++;
 }

 console.log("do while loop=====================================")
 let j = 5;
 do{
     console.log(j);
     j++
 }while(j < 5);