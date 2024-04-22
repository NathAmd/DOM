/*
*/

const ol = document.querySelector('ol');

let LastElement = ol.lastElementChild;
ol.prepend(LastElement);

//---

const h2 = document.querySelectorAll('h2');

const p1 = h2[1].parentElement;
const p2 = h2[2].parentElement;

p1.appendChild(h2[2]);
p2.appendChild(h2[1]);

p1.prepend(p1.lastElementChild);
p2.prepend(p2.lastElementChild);


//---


document.querySelector('body').lastElementChild.remove();