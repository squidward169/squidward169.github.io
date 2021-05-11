const container=document.querySelector('.chapters');

function chapter(chapter_num){
  var chapter=document.createElement('a'),
  div=document.createElement('div'),
  img=document.createElement('img'),
  chr_name=document.createElement('h3');
  chapter.id=chapter_num;
  chapter.setAttribute('onclick','getchapter(this.id)')
  chapter.href="../html/pages.html";
  img.src=photo_link;
  chr_name.innerHTML=manga_name.replaceAll("-"," ")+"-"+chapter_num;
  div.className='chapter';
  div.appendChild(img);
  div.appendChild(chr_name);
  chapter.appendChild(div);
  container.appendChild(chapter);
}
for (i=manga_chapters;i>=1;i--){
  chapter(i)
}