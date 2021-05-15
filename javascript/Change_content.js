var main_list={
    "Popular":[
        "Solo-Leveling",
        "The-Beginning-After-The-End",
        "Jujutsu-Kaisen",
        'Shingeki-no-Kyojin',
        "Boku-no-Hero-Academia",
        "Berserk",
        'black-clover',
        'One-piece',
        'Tokyo-Ghoul',
        'Tales-of-Demons-and-Gods',
        'Nanatsu-no-Taizai',
        'Haikyuu',
        'Jojos-Bizarre-Adventure',
        'kimetsu-no-yaiba',
        'yakusoku-no-neverland',
        'Spirit-Blade-Mountain',
        'The-Ravages-of-Time',
        'Bleach',
        'Tower-of-God'
    ],
    "My list":[],
    "Updated": [
        "Solo-Leveling",
        "The-Beginning-After-The-End",
    ],
    "Alphabetical":names_list.sort(),
    "Hentai":[

    ]
};
function automate(op,x){
    const link="../covers/";
    const ext=".jpg";
    var name=op[i].replaceAll('-',' '),
    link_name=op[i],
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
function change_dir(clicked){
    var active=document.querySelector('.active'),
    place=document.querySelector(".content_location");
    place.innerHTML=clicked.innerHTML;
    active.className='Notactive'
    clicked.className='active'
    var open=main_list[clicked.innerHTML];
    container.innerHTML='';
    for (i=0;i<=open.length;i++){
        automate(open,container);
      }
}
