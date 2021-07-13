/*
Loop in java script.
*/

list = ['tom', 'jack', 'ross', 41, 'monica', 'joey', 'ruth'];
for(let i = 0; i < list.length; i++)
{
    if( typeof list[i] != "string")
    {
        continue;
    }
    console.log(list[i]);
}