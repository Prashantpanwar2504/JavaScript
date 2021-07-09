// Operator Precedence : "determine hoe operators are pared concering
// each other. operator with high precedence become operand of the operator with lower 
// precedence."


console.log(3 + 4 * 5) // 3 + 20
//expected O/P = 23

console.log(4 * 3 ** 2) // 4 * 9
// expeted O/P = 36

// here function have high precedence
function echo(name, num)
{
    console.log("Evaluating the "+ name +" side.");
    return num;
}
console.log(echo("Prashant", 8)/echo("Mansi", 2));
console.log(echo("Prashant", 8)**echo("Mansi", 2));
console.log(echo("Prashant", 8)+echo("Mansi", 2), echo("New", 5));


