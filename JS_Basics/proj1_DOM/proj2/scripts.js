console.log("Script")


const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");

//gobal object availablecon
// console.log(window.getComputedStyle(red));
// console.log(window.getComputedStyle(red).background);
// console.log(window.getComputedStyle(red).backgroundColor);// give us baclground color


const getBGColor = (selectedElement) => {
    return  window.getComputedStyle(selectedElement).backgroundColor;
}


console.log(getBGColor(red));
console.log(getBGColor(pink));
console.log(getBGColor(violet));
console.log(getBGColor(cyan));



// var color = getBGColor(pink);

// pink.addEventListener('mouseenter', () => {
//     center.style.background = color;
// });

const magicColorChanger = (element, color) => {
    element.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
};



magicColorChanger(red, getBGColor(cyan));
magicColorChanger(cyan, getBGColor(orange));
magicColorChanger(violet, getBGColor(pink));
magicColorChanger(pink, getBGColor(red));
magicColorChanger(orange, getBGColor(violet));
