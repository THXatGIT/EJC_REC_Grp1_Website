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