function spin(){
    document.getElementById("about").getElementsByTagName("span")[0].classList.toggle("spin")
}

function swapimg1(){
    document.getElementsByClassName("box")[1].getElementsByTagName("img")[0].src="THX2.jpeg";
}
function swapimg2(){
    document.getElementsByClassName("box")[1].getElementsByTagName("img")[0].src="THX1.jpeg";
}

let clickcounts =0;
function CTF(){
    if (clickcounts<3){
        clickcounts++
    }
    if (clickcounts==3){
        document.getElementById("tbd").classList.toggle("ctf")
        document.getElementById("c").style.color="red";document.getElementById("c").style.transform="translate(-150%)"
        document.getElementById("t").style.color="red";document.getElementById("t").style.transform="translate(575%)"
        document.getElementById("f").style.color="red";document.getElementById("f").style.transform="translate(200%)"
        console.log("CTF! CTF! CTF!")
        CTFsound= new Audio("CTF.mp3")
        CTFsound.play()
    }
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