var callout = document.querySelector("#openToAll");
var texts = ["COME ONE <BR/> COME ALL", "BRING A<BR/> FRIEND","OPEN TO <BR/> ALL","NO TO-GO<BR/>CUPS","SEE YOU<BR/>THERE","MAKE A<BR/>FRIEND","SMILES<BR/>ONLY","OPEN TO<BR/>COLLABS"];
var currPos = 0;

window.setInterval(changeText,1600);
window.scrollTo(0, 0);

function changeText(){
    currPos++;
    if(currPos >= texts.length){
        currPos = 0;
    }
    callout.innerHTML = texts[currPos];
}

// Load video animation once video canplay
const video = document.querySelector('#heroVideo');
const heroImage = document.querySelector('#heroImage');
const nextEvent = document.querySelector('#nextEvent');

video.addEventListener('canplay', (event) => {
  console.log("video loaded");
  video.style.opacity = "1";
  video.style.height = "200px";
  heroImage.style.display="none";
});