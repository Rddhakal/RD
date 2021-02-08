const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector('.visual');
const sounds = document.querySelector('audio');
const colors = [
    "linear-gradient(315deg, #734ae8 0%, #89d4cf 74%)",
    "linear-gradient(315deg, #f8ef42 0%, #0fd64f 74%)",
    "linear-gradient(to right top, #6bd197, #94c87d, #b3be6d, #ccb26a, #dda772, #e99d75, #f2937c, #f88a89, #ff7c94, #ff6ea5, #ff64bd, #fb5fd9)",
    "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
    "linear-gradient(to left, #d83310, #de6900, #d99700, #c7c200, #a8eb12)",
    "linear-gradient(to right top, #d86d0b, #d76105, #d65303, #d54503, #d33306, #d72421, #d81433, #d70043, #d00065, #b80089, #8a00ad, #0a34c9)",
    "linear-gradient(to right top, #09a124, #7c8d00, #b46f00, #d9441d, #e2005d, #d6007d, #ba009f, #871bc1, #7424c4, #5e2bc6, #4230c8, #0a34c9)"
]
document.addEventListener('keypress', (e) =>{

        var bubbles = document.createElement('div');
        visual.appendChild(bubbles);
        bubbles.innerHTML = e.key;
        bubbles.classList.add('bubbles');
        bubbles.style.backgroundImage = colors[1];
        bubbles.style.animation = 'animated 1s ease';

        if (e.key == 'r' && e.key == 'l') {
            bubbles.style.backgroundImage = colors[0];
        } else if (e.key == 'u') {
            bubbles.style.backgroundImage = colors[1];
        } else if (e.key == 'p') {
            bubbles.style.backgroundImage = colors[2];
        } else if (e.key == 'e') {
            bubbles.style.backgroundImage = colors[3];
        } else if (e.key == 's') {
            bubbles.style.backgroundImage = colors[4];
        } else if (e.key == 'h') {
            bubbles.style.backgroundImage = colors[5];
        }
        bubbles.addEventListener('animationend', ()=>{
            visual.removeChild(bubbles);
        })
    })
pads.forEach((pad, index) =>{
    pad.addEventListener('click', ()=>{
        createBubbles(index);
        sounds.play();
    })
})
function createBubbles(index) {
    var bubbles = document.createElement('div');
    visual.appendChild(bubbles);
    bubbles.style.backgroundImage = colors[index];
    bubbles.style.animation = `animated 1s ease`;
    bubbles.addEventListener('animationend', ()=>{
        visual.removeChild(bubbles);
    })
}