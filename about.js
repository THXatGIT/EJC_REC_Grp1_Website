let currheight=0;
function restrictscroll(){
if (window.scrollY%559!=0){
    currheight=Math.floor(window.scrollY/559)*559;
    window.scrollTo(0,currheight);
    console.log(currheight)
}
}
function setscroll(){
    if (window.scrollY>currheight){
        currheight=Math.ceil(window.scrollY/559)*559;
        window.scrollTo(0,currheight);
    }
    else if (window.scrollY<currheight){
        currheight=Math.floor(window.scrollY/559)*559;
        window.scrollTo(0,currheight);
    }
    setTimeout(setscroll,700)
}

setTimeout(restrictscroll, 900)
setTimeout(setscroll, 1100)



function gif1(){
    document.getElementById("gif").src="Ikiylia2.png"
    setTimeout(gif2, 500)
}

function gif2(){
    document.getElementById("gif").src="Ikiylia.png"
    setTimeout(gif1, 500)
}

gif1()