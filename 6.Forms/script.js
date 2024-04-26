let lastpwd = "";
let ObjectPassword = null;

let Editname = (e) => {
    document.getElementById("display-firstname").textContent = e.target.value;
}

let Editage = (e) => {
    if (parseInt(e.target.value) >= 18) {
        document.getElementById("a-hard-truth").style = "visibility: visible;"
    } else {
        document.getElementById("a-hard-truth").style = "visibility: hidden;"
    }
}

let Editpwd = (e) => {
    lastpwd = e.target.value;
    if (lastpwd.length < 6) {
        e.target.style = "border: solid 2px rgb(255,0,0)"

        if (ObjectPassword == null) {
            ObjectPassword = document.createElement("p");
            ObjectPassword.textContent = "minimum 6 characters.";
            ObjectPassword.style = "color: rgb(255,0,0);";
            e.target.parentNode.insertBefore(ObjectPassword, e.target.nextSibling);
        }
    } else {
        e.target.style = "border: solid 2px rgb(0,0,0)"

        if (ObjectPassword != null) {
            ObjectPassword.parentNode.removeChild(ObjectPassword);
            ObjectPassword = null;
        }
    }
}

let Editpwdconfirm = (e) => {
    if (e.target.value != lastpwd) {
        e.target.style = "border: solid 2px rgb(255,0,0)"
    } else {
        e.target.style = "border: solid 2px rgb(0,0,0)"
    }
}

let Editdarkmode = (e) => {
    if (e.target.value == "dark") { document.querySelector("body").style = "background-color: rgb(20,20,20);color: rgb(200,200,200);"; }
    if (e.target.value == "light") { document.querySelector("body").style = "background-color: rgb(200,200,200);color: rgb(20,20,20);"; }
}

let get = document.getElementById("firstname");
get.addEventListener("keyup", Editname);

get = document.getElementById("age");
get.addEventListener("keyup", Editage);

get = document.getElementById("pwd");
get.addEventListener("keyup", Editpwd);

get = document.getElementById("pwd-confirm");
get.addEventListener("keyup", Editpwdconfirm);

get = document.getElementById("toggle-darkmode");
get.addEventListener("change", Editdarkmode);
