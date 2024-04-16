/*
*/

let objects = document.getElementsByClassName("important");
for (let object of objects) {
    object.setAttribute("title", "This is an important item")
    

}

let imgs = document.querySelectorAll("img");

for (let img of imgs) {
    if (img.className !== "important") {
        img.style = "display: none";
    }
}

let pars = document.querySelectorAll("p");

for (let par of pars) {
    console.log((par.className !== "" ? "[" + par.className + "] ":"") +  par.textContent)

    if (par.className === "") {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        par.style = "color: rgb("+r+","+g+","+b+")";
    }
}

