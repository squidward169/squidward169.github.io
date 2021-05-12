let container=document.querySelector('.content')
function automate(x){
    const link="../manga_covers/";
    const ext=".jpg";
    var name=names_list[i].replaceAll('-',' '),
    link_name=names_list[i],
    anime_container = document.createElement('div'),
    image_container = document.createElement('div'),
    image = document.createElement('img'),
    a=document.createElement('a');
    a.href="../html/chapters.html";
    //classes
    anime_container.className='post';
    //image clases--------------
    image_container.className='post -photo';
    image.className='post -photo -image';
    image_container.appendChild(image)
    a.appendChild(image_container);
    anime_container.appendChild(a);
    image.src=link+link_name+ext;
    x.appendChild(anime_container);
    image.id=link_name;
    anime_container.id=link_name;
    anime_container.setAttribute('onclick','give_name(this.id)')
    image.setAttribute('onmouseover','gif(this)')
    image.setAttribute('onmouseout','pic(this)')
  }
  for (i=0;i<=names_list.length;i++){
    automate(container);
  }
  