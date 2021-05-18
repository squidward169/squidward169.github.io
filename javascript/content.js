let container=document.querySelector('.content_container')
function automate(x){
    const link="../covers/";
    const ext=".jpg";
    var name=names_list[i].replaceAll('-',' '),
    link_name=names_list[i],
    rating_num=information_list[names_list.indexOf(link_name)][2],
    anime_container = document.createElement('div'),
    image_container = document.createElement('div'),
    rating= document.createElement('span'),
    star= document.createElement('i'),
    image = document.createElement('img'),
    a=document.createElement('a');
    a.href="../html/chapters.html";
    //classes
    anime_container.className='post';
    rating.className="rated-poster"
    star.className="fa fa-star"
    //image clases--------------
    rating.appendChild(star)
    rating.innerHTML+=rating_num
    image_container.className='post -photo';
    image.className='post -photo -image';
    image_container.appendChild(image)
    a.appendChild(image_container);
    a.appendChild(rating)
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
  