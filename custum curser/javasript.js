var main = document.querySelector("#main");
var curser = document.querySelector("#curser");

var overlay  = document.querySelector("#overlay");
main.addEventListener("mousemove",function(dets){
  gsap.to(curser,{
    x:dets.x,
    y:dets.y,
    duration:1,
    
  })
})



overlay.addEventListener("mouseover",function(){
  curser.textContent = "view more"
  gsap.to(curser,{
  scale:2,
  })
 
})

overlay.addEventListener("mouseleave",function(){
  curser.innerHTML = ""
  gsap.to(curser,{
    scale:1
  })
})