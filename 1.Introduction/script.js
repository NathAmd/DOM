/*
*/

console.log(document.querySelector("header").querySelector("h1").textContent);

document.querySelector("header").querySelector("h1").textContent = "Modifying the DOM";

let r = Math.random() * 255;
let g = Math.random() * 255;
let b = Math.random() * 255;
document.querySelector("body").style = 'background-color: rgb(' + r + ',' + g + ',' + b + ')';

GetAllChild(document.querySelector("body"))


function GetAllChild(Arg){
    for (let child of Arg.children) {
        console.log(child);
        GetAllChild(child)
    }
}