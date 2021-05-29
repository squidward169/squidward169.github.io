var audio=document.querySelector(".audio"),
i=1;
function spong(){
    i++
    if (i%2==0){
        audio.pause()
    }
    else{
        audio.play()
    }
}