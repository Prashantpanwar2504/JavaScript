function isEven1(element)
{
    if(element%2 == 0)
    {
        return true;
    }
    return false;
}

//Arrow function
var isEven2=(element)=>
{
    return element%2 == 0;
}
console.log(isEven2(2));

//callback function
var result = [2,3,6,8].every(isEven2);
console.log(result);

//we can do this too.
var res = [2,8,4,6,8].every((e)=>{
    return e%2===0;
})
console.log(res);

//we can do this too.
var res2 = [2,4,6].every((e) => (e%2===0));
console.log(res2);