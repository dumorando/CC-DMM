# CC-DMM
abysmal cookie clicker mod menu<br />

to use it, copy and paste
```js
const mmurl = "https://c.dumo.se/cc-dmm.js";Game.registerMod("dmmloader", {init: () => {let scr = document.createElement("script");scr.onload = () => {Game.registerMod("ccdmm", DmmModObject);};scr.onerror = () => {alert("failed to load ccdmm! your internet is probably down.")};scr.src = mmurl;document.body.appendChild(scr);}});
```
into the console<br />
then press E
