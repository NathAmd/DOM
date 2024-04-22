/*
*/

let article = document.querySelector("article");

NewLearner("learner name 'a' ");
NewLearner("learner name 'b' ");
NewLearner("learner name 'c' ");
NewLearner("learner name 'd' ");
NewLearner("learner name 'e' ");
NewLearner("learner name 'f' ");


let learner = document.getElementsByClassName("learner");

console.log(learner);

for (learn of learner) {
    article.insertBefore(learn,learner[Math.floor(Math.random() * (learner.length - 0.1))]);
}


function NewLearner(name) {
    let newText = document.createTextNode(name)

    newSection.appendChild(newText);

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    newSection.style = "background: rgb(" + r + "," + g + "," + b + ") ; color: " + (r > 127.5 || g > 127.5 || b > 127.5 ? "black" : "white");
    newSection.setAttribute("class", "learner");

    article.appendChild(newSection);
}
