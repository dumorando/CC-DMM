// This is the script that will usually be shared around to load the mod menu, but it wont have this comment or anything.
//All this does is registers a mod that loads the actual mod menu.
//IMPORTANT: if you change the objects name from DmmModObject to something else, you will have to change it in this script as well

const mmurl = "https://c.dumo.se/cc-dmm.js";Game.registerMod("dmmloader", {init: () => {let scr = document.createElement("script");scr.onload = () => {Game.registerMod("ccdmm", DmmModObject);};scr.onerror = () => {alert("failed to load ccdmm! your internet is probably down.")};scr.src = mmurl;document.body.appendChild(scr);}});