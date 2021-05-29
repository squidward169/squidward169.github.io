const button=document.querySelector('.button-wrapper'),
line=document.querySelector('.inner'),
char=document.querySelector('.character-pic'),
see=document.querySelector('.see'),
text=document.querySelector('.text-box'),
p1=document.querySelector('.p1'),
h1=document.querySelector('.h1'),
nav_num=document.querySelector('.nav_place'),
circle=document.querySelector('#big-circle');
var i = 0;
function change_view(){
    i++
    if (i%2==0){
        circle.style.animation=" circle_to_triangle .5s ease-in forwards"
        line.style.left="50%"
        char.style.opacity="0"
        char.style.right="-99%"
        button.style.transform=" rotate(180deg)"
        text.style.left="30%"
        text.style.transform="scale(1.1)"
        see.innerHTML="See less."
        nav_num.innerHTML="2"
        p1.innerHTML="Are you confused?"
        h1.innerHTML="Let me explain"
        speech_container.innerHTML="<span>&#8223;</span>"+"Pineapple is a website made To advance your knowledge and enjoy you, you can find read books,mangas listen to music , novels ... and a lot more . soo hope you like it , if not you are a piece of shit suck my pp"
        for (x=0;x<=16;x++){
            var pineapple=document.querySelector('#pineapple'+x.toString());
            pineapple.style.display="block"
        }
    }
    else{
        circle.style.animation=" triangle_to_circle .7s  forwards"
        line.style.left="0"
        p1.innerHTML="Let's make the best investments"
        char.style.opacity="1"
        char.style.right="4.5%"
        text.style.left="7%"
        text.style.transform="scale(1)"
        button.style.transform=" rotate(0deg)"
        see.innerHTML="See more."
        h1.innerHTML="READ.."
        speech_container.innerHTML="<span>&#8223;</span>"+char_speech
        nav_num.innerHTML="1"
        for (x=0;x<=16;x++){
            var pineapple=document.querySelector('#pineapple'+x.toString());
            pineapple.style.display="none"
        }
    }
}
