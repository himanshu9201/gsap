
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