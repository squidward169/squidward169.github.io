const frame=document.querySelector('.data');
var chapter_opened=localStorage.getItem("chapter_opened"),
manga_name1=localStorage.getItem("manga_opened"),
manga_name=manga_name1.toLocaleLowerCase();

var e=1;
var link="https://www.funmanga.com/"+manga_name+"/"+chapter_opened+"/1";
$(frame).attr('data',link)
function prev(){
    if(e>1){
        e--
    }
    var link="https://www.funmanga.com/"+manga_name+"/"+chapter_opened+"/"+e;
    $(frame).attr('data',link)
}
function next(){
    e++
    var link="https://www.funmanga.com/"+manga_name+"/"+chapter_opened+"/"+e;
    $(frame).attr('data',link)
}

