const SquareZone = document.querySelector('.displayedsquare-wrapper');
const LogZone = document.querySelector('ul');


const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  CreateSquare(e.target.classList[1], getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

function CreateSquare(_class,_log) {
  let sqr = document.createElement('div');
  SquareZone.appendChild(sqr); 
  sqr.setAttribute('class', 'displayedsquare ' + _class);
  sqr.addEventListener("click", CreateAlert);

  log("[" + _log + "] Created a new " + _class + " squart");

}

const CreateAlert = (e) => {
  alert(e.target.classList[1])
}

function log(_log) {
  let log = document.createElement('li');
  log.textContent = _log;

  LogZone.appendChild(log);
}


document.addEventListener("keypress", logKey);
function logKey(e) {
  if (e.code == "Space") {
    
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    document.querySelector('body').style = "background-color: rgb("+r+","+g+","+b+");"

    log("Space is used")


  }
  if (e.code == "KeyL") {
    while (LogZone.children.length > 0) {
      LogZone.children[LogZone.children.length - 1].remove();
    }
  }

  if (e.code == "KeyS") {
    while (SquareZone.children.length > 0) {
      SquareZone.children[SquareZone.children.length - 1].remove();
    }
  }

}

