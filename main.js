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
  heroImage.style.display="none";
  video.style.opacity = "1";
  video.style.height = "200px";
});

let onTopSection = true;
let y = window.scrollY || window.pageYOffset;
if(y <= 10){
    onTopSection = true;
}else{
    onTopSection = false;
}

window.addEventListener('scroll', () => {
  let y = window.scrollY || window.pageYOffset
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  if(y >= 800 && onTopSection){
    document.body.style.backgroundColor = "#1C193F";
    onTopSection = false;
}else if (y < 800 && !onTopSection){
    document.body.style.backgroundColor = "#F8DCDA"; 
    onTopSection = true;
  }
})