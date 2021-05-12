const container=document.querySelector('.chapters');
function chapter(chapter_num){
  var chapter=document.createElement('a'),
  div=document.createElement('div'),
  img=document.createElement('img'),
  line=document.createElement('div'),
  chr_chapter=document.createElement('h2'),
  chr_name=document.createElement('h3');
  chapter.id=chapter_num;
  chapter.setAttribute('onclick','getchapter(this.id)')
  chapter.href="../html/pages.html";
  img.src="../img/download.png";
  chr_name.innerHTML=manga_name;
  chr_chapter.innerHTML="- "+chapter_num;
  div.className='chapter';
  line.className="line"
  div.appendChild(chr_name);
  div.appendChild(chr_chapter);
  div.appendChild(line)
  div.appendChild(img)
  chapter.appendChild(div);
  container.appendChild(chapter);
}
for (i=manga_chapters;i>=1;i--){
  chapter(i)
}