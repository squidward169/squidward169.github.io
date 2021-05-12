const photo_box=document.querySelector('.cover'),
name_box=document.querySelector('.name'),
country_box=document.getElementById('country'),
trailer=document.querySelector(".link"),
state_box=document.getElementById('state'),
discbox=document.querySelector('.dis_box'),
rating_box=document.getElementById('rating');

let manga_opened=localStorage.getItem("opened"),
manga_index=names_list.indexOf(manga_opened),
manga_name=names_list[manga_index],
manga_code=information_list[manga_index][0],
manga_chapters=information_list[manga_index][1],
manga_rating=information_list[manga_index][2],
manga_country=information_list[manga_index][3],
manga_lan=information_list[manga_index][4],
trailer_link=information_list[manga_index][5],
manga_state=information_list[manga_index][6],
manga_disc=information_list[manga_index][7],
photo_link="../manga_covers/"+manga_name.replaceAll('_','-')+".jpg";
localStorage.setItem('manga_opened',manga_code)



photo_box.src=photo_link;
discbox.innerHTML=manga_disc
rating_box.innerHTML=manga_rating;
country_box.innerHTML=manga_country;
state_box.innerHTML=manga_state;
trailer.href=trailer_link;
name_box.innerHTML=manga_name.replaceAll('-'," ");
