document.addEventListener("wheel",setscroll)

let scrolling=false;
let currheight=window.scrollY;
function restrictscroll(){
if (window.scrollY%559!=0){
    currheight=Math.floor(window.scrollY/559)*559;
    window.scrollTo(0,currheight);
    progbar()
}
}
function setscroll(e){
if (!scrolling){
    if (e.deltaY<0){
        scrolling=true;
        window.scrollTo(0,currheight-559);
        setTimeout(()=>{currheight=window.scrollY;progbar();scrolling=false},500)
    }
    else if (e.deltaY>0){
        scrolling=true;
       window.scrollTo(0,currheight+559);
       setTimeout(()=>{currheight=window.scrollY;progbar();scrolling=false},500)
    }
}
}

setTimeout(restrictscroll, 900)

let color=["red", "orange","yellow", "green", "blue","purple"]

function progbar(){
    document.getElementById("prog").style.backgroundColor=color[Math.floor(currheight/559)]
    document.getElementById("prog").style.top=`${-(1-(Math.floor(currheight/559)+1)/6)*100}%`
}

function gif1(){
    document.getElementById("gif").src="Ikiylia2.png"
    setTimeout(gif2, 500)
}

function gif2(){
    document.getElementById("gif").src="Ikiylia.png"
    setTimeout(gif1, 500)
}

gif1()

// Leyang's code

const a = document.querySelector('.swing-a');
const n = document.querySelector('.swing-n');

async function swingOneWay(el, angle, duration, easing) {
    return el.animate(
        [{ transform: 'rotate(0deg)' }, { transform: `rotate(${angle}deg)` }],
        { duration, easing, fill: 'forwards' }
    ).finished;
}
  
async function swingBack(el, duration, easing) {
    return el.animate(
        [{ transform: el.style.transform }, { transform: 'rotate(0deg)' }],
        { duration, easing, fill: 'forwards' }
    ).finished;
}
  
async function animateCradleLoop() {
    while (true) {
        await swingOneWay(a, 60, 300, 'ease-out');
        await swingBack(a, 300, 'ease-in');
  
        await swingOneWay(n, -60, 300, 'ease-out');
        await swingBack(n, 300, 'ease-in');
    }
}

animateCradleLoop();

function toggleText() {
    const text = document.getElementById('extraText');
    text.style.display = (text.style.display === 'none' || text.style.display === '') ? 'block' : 'none';
}