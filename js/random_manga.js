function random_manga(){
    var id = names_list[Math.floor(Math.random() * names_list.length)];
    localStorage.setItem("opened", id);
    location="../html/chapters.html"
}
function get_event(event){
    var x= event.which || event.keyCode;
    if (x==13){
      var search=document.querySelector('.search'),
      input = search.value.replaceAll(" ","-"),
      input_fin=input.charAt(0).toUpperCase() + input.slice(1);
             if (names_list.includes(input_fin)){
               var id =input_fin;
               localStorage.setItem("opened", id);
               location = "../html/chapters.html";
             }
             else if (input_fin=="Hentai"){
               alert("bro wtf")
             }
  
    }
  
  };
  function hover(element) {
    let src="../"+"img/"+element.id+"_hover"+".png"
    element.setAttribute('src', src);
  }
  
function unhover(element) {
    let src="../"+"img/"+element.id+".png"
    element.setAttribute('src', src);
  }

function gif(element){
  let src="../manga_gif/"+element.id+'.gif'
  element.setAttribute('src', src);
}
function pic(element){
  let src="../manga_covers/"+element.id+'.jpg'
  element.setAttribute('src', src);
}
  location.href="#";