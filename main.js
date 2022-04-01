var callout = document.querySelector("#openToAll");
var texts = ["COME ONE <BR/> COME ALL", "BRING A<BR/> FRIEND","OPEN TO <BR/> ALL","NO TO-GO<BR/>CUPS","SEE YOU<BR/>THERE","MAKE A<BR/>FRIEND","SMILES<BR/>ONLY","OPEN TO<BR/>COLLABS"];
var currPos = 0;

window.setInterval(changeText,2000);

function changeText(){
    currPos++;
    if(currPos >= texts.length){
        currPos = 0;
    }
    callout.innerHTML = texts[currPos];
}

// Load video animation once video canplay
const video = document.querySelector('.hero');

video.addEventListener('canplay', (event) => {
  console.log("video loaded");
  video.style.animation = "reveal 1000ms ease-in-out forwards"
});