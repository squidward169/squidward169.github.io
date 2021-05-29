const char_container=document.querySelector('.character-pic'),
speech_container=document.querySelector('.p2');
var num=Math.floor(Math.random() *character_photo_link_list.length),
char_photo_link ="../img/main_statues/"+character_photo_link_list[num][0],
char_speeche_num=character_photo_link_list[num][1],
char_width=character_photo_link_list[num][2],
char_speech=character_speech_list[num][Math.floor(Math.random() *char_speeche_num)];
char_container.src=char_photo_link
char_container.setAttribute("width",char_width)
speech_container.innerHTML="<span>&#8223;</span>"+char_speech