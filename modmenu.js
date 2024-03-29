// CC-DMM

var DmmModObject = {};
var Othershit = {};
var Version = 1;

// you should probably remove this part if your forking XD

Othershit.ticker = () => {
    return ['you dirty little hacker!!', 'this man is using hacks what a loser', 'cookie clicker is meant to be fun, yet this man hacks', 'grandma knows your hacking.', 'https://www.github.com/dumorando/CC-DMM'] // /hj
}

Game.registerHook("ticker", Othershit.ticker);

//                                      //

DmmModObject.init = () => {
    if (!"CCDMM-WelcomeAlert" in localStorage) {
        Game.Notify('Welcome!', 'Welcome to CC-DumosModMenu. you can find all the shit by pressing E on your keybored. have fun!');
        localStorage.setItem("CCDMM-WelcomeAlert", "done");
    }
};

//just incase..
if (!"CCDMM-WelcomeAlert" in localStorage) {
    Game.Notify('Welcome!', 'Welcome to CC-DumosModMenu. you can find all the shit by pressing E on your keybored. have fun!');
}

// actual mod menu
let revertamt = null;

let ccdmm = document.createElement("div");
ccdmm.style.position="absolute";
ccdmm.style.zIndex=10000;
ccdmm.style.width="100%";
ccdmm.style.height="100%";
ccdmm.style.backgroundColor = "dodgerblue";
ccdmm.hidden = true;

let htext = document.createElement("h1");
htext.innerText = `CC-DMM v${Version}`

let scbtn = document.createElement("button");
scbtn.innerText = "Set Cookies";
scbtn.addEventListener("click", () => {
    let prmpt = prompt("Enter the amount of cookies you want! (you can also type Infinity, if you relaly want to.)");
    if (!parseInt(prmpt) == NaN) {
        revertamt = Game.cookies;
        Game.cookies = Number(prmpt);
    } else {
        alert("Thats not an integer!")
    }
});

let acbtn = document.createElement("button");
acbtn.innerText = "Add Cookies";
acbtn.addEventListener("click", () => {
    let amount = prompt("Enter the amount of cookies you want to add!");
    if (!parseInt(amount) == NaN) {
        revertamt = Game.cookies;
        Game.cookies += Number(amount);
    } else {
        alert("Thats not an integer!")
    }
});

let sscbtn = document.createElement("button");
sscbtn.innerText = "Cookies²";
sscbtn.addEventListener("click", () => {
    revertamt = Game.cookies;
    Game.cookies = Game.cookies*Game.cookies;
});

let osbtn = document.createElement("button");
osbtn.innerText = "Open sesame";
osbtn.addEventListener("click", () => {
    Game.OpenSesame();
});

let aabtn = document.createElement("button");
aabtn.innerText = "Get All achievements";
aabtn.addEventListener("click", () => {
    let allachievements = Object.keys(Game.Achievements);
    allachievements.forEach((achvement) => {
        Game.Win(achvement);
    })
});

let sabtn = document.createElement("button");
sabtn.innerText = "Specific Achievement";
sabtn.addEventListener("click", () => {
    Game.Win(prompt("Type An Achievmenets name! (it has to be exact)"));
});

let rbtn = document.createElement("button");
rbtn.innerText = "Revert";
rbtn.addEventListener("click", () => {
    if (!revertamt === null) {
        Game.cookies = revertamt;
    } else {
        alert("cannot revert.")
    }
});

let extrabr = document.createElement("br");

let cbtn = document.createElement("button");
cbtn.style.backgroundColor = "red";
cbtn.style.color = "white";
cbtn.innerText = "Close";
cbtn.addEventListener("click", () => {
    ccdmm.hidden = true;
});

let allbuttons = [htext, scbtn, acbtn, sscbtn, osbtn, aabtn, sabtn, rbtn, extrabr, cbtn];
allbuttons.forEach((btn) => {
    ccdmm.appendChild(btn);
    ccdmm.appendChild(document.createElement("br"));
})

document.body.appendChild(ccdmm);

document.addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode === 229) {
        return;
    } //its deprecated but i have to add it -_-

    if (e.key == "e") {
        ccdmm.hidden = !ccdmm.hidden;
    }
});