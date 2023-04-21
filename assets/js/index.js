if (localStorage.getItem("token") == null) {
    window.location.href = "./assets/html/signin.html";
}

let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

let logged = document.querySelector("#logged");
logged.innerHTML = `Hi, ${loggedUser.name}`;

function exit() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedUser");
    window.location.href = "";
}