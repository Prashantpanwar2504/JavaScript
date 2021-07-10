var temperature;

//TODO: Go to google and get the data

temperature = 23;
var result = (temperature < 20) ? "Cold" : "Hot";
console.log(result);


// if/else statement
if(temperature === 2)
{
    console.log("It's so Cold out there.")
}
else{
    console.log("IT's Hot out there.");
}


// elseif statement
var temp2 = 43;
if(temp2 < 18)
{
    console.log("Cold");
}
else if(temp2 > 18 & temp2 < 30)
{
    console.log("Normal");
}
else{
    console.log("Hot");
}


// switch statement
var age = 11;
switch(age)
{
    case 5:
        console.log("Kid");
        break;
    case 10:
        console.log("Good Kid");
        break;
    case 25:
        console.log("Man");
        break;
    case 50:
        console.log("Senior citizen");
        break;
    default:
        console.log("Dead");
}

/*
if we don't provid the break; then their
will be a full through.
*/
console.log("switch without break=============================")
var age = 10;
switch(age)
{
    case 5:
        console.log("Kid");
    case 10:
        console.log("Good Kid");
    case 25:
        console.log("Man");
    case 50:
        console.log("Senior citizen");
    default:
        console.log("Dead");
}