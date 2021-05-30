function random_manga(){
    var id = names_list[Math.floor(Math.random() * names_list.length)];
    localStorage.setItem("opened", id);
    location="../html/chapters.html"
}
function get_event(event){
    var x= event.which || event.keyCode;
    if (x==13){
      var search=document.querySelector('.search-box'),
      input = search.value.replaceAll(" ","-"),
      input_fin=input.charAt(0).toUpperCase() + input.slice(1);
             if (names_list.includes(input_fin)){
               var id =input_fin;
               localStorage.setItem("opened", id);
               location = "../html/chapters.html";
             }
             else if (input_fin=="Hentai"){
               location = "https://nhentai.to/"
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
  let src="../gifs/"+element.id+'.gif'
  element.setAttribute('src', src);
}
function pic(element){
  let src="../covers/"+element.id+'.jpg'
  element.setAttribute('src', src);
}
  location.href="#";
function alert_prim(){
  alert("Don't buy it it's useless :)")
}
function search(event){
  var x= event.which || event.keyCode;
  if (x==13){
    var search=document.querySelector('.search-box-chapters');
    location.href="#"+search.value

  }
};