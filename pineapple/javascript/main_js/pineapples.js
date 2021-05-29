var main=document.querySelector('main'),
haveIt=[];
function pineapples(container,left,top,link,index){
    var img=document.createElement('img')
    img.src="../img/logos/"+link
    img.className="pineapple"
    img.id="pineapple"+i
    img.setAttribute("onclick",'spong()')
    img.style.transform="rotate("+Math.floor(Math.random() *180).toString()+"deg)";
    img.style.userSelect="none"
    left_var=positions_x[i]
    top_var=positions_y[i]
    img.style.zIndex=index
    img.style.left=left_var.toString()+"vh";
    img.style.top=top_var.toString()+"vh";
    container.appendChild(img)
}
for (i=0;i<=16;i++){
    if (i<=7){
        pineapples(main,0,0,"logo.png",1)
    }
    else{
        pineapples(main,110,0,"logo_black.png",7)
    }
}
console.log(haveIt)