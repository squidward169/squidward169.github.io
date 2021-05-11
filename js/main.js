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
$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      auto:true,
      pauseOnHover: true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      }
  });
  
});
var x=0;
function random_item(items){
  return items[Math.floor(Math.random()*items.length)];   
}
function star(){
  var list=["stop","it's not a button stop","Really!!!!","Go get a life"]
  x++
  if (x>5){
    alert(random_item(list))
  }
}