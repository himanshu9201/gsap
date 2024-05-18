 
var tl = gsap.timeline()
tl.to("#full",{
  right:0,
  duration:0.3,
})

tl.from("#full h4",{
  x:100,
  duration:0.2,
  stagger:0.2,
  opacity:0
  })




tl.from("#full i",{
  opacity:0
})
tl.pause();
document.querySelector("#nav i").addEventListener("click",function(){
  tl.play();
})

document.querySelector("#full i").addEventListener("click",function(){
  tl.reverse();
})









function breakthetext(){
  var p = document.querySelector("#para")
  console.log(p)
  var paraText = p.textContent;
  var splittedPara = paraText.split('');
  var clutter =""
  splittedPara.forEach(function(elem,idx){
    if(idx<splittedPara.length/2){
      clutter += `<span class="a">${elem}</span>`
    }
    else{
      clutter += `<span class="b">${elem}</span>`
    }

  console.log(elem)
  })
  p.innerHTML=clutter;
}


breakthetext()

gsap.from(".a",{
  y:50,
  opacity:0,
  duration:0.4,
  stagger:0.15,
})

gsap.from(".b",{
  y:50,
  opacity:0,
  duration:0.4,
  stagger:-0.15,
})