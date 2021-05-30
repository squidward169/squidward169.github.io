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
        'Tower-of-God',
        'Clover-TETSUHIRO-Hirakawa',
        'Noblesse',
        'The-God-of-High-School',
        'Naruto',
        'one-punch-man',
        'Dr-stone',
        'apotheosis-elevation-to-the-status-of-a-god',
        'The-Gamer',
        'Fairy-Tail',
        'THE-LAST-HUMAN',
        'KINGDOM'
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
