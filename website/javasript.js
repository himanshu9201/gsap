
var tl = gsap.timeline()

tl.from("nav h1,nav h4, nav button",{
  y:-30,
  duration:0.5,
  opacity:0,
  stagger:0.15
})

tl.from(".center-part1 h1",{
  x:-1200,
  duration:0.8
},"-0.3")
tl.from(".center-part1 p",{
  x:-1200,
  duration:0.8
},"-0.1")
tl.from(".center-part1 button",{
  opacity:0,
  duration:0.5
})
tl.from(".center-part2 img",{
  x:200,
  opacity:0,
delay:0.1
 },"-=1")







var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger :".section2 ",
    scroller:"body",
     start:"top 90%",
     end :"top 10%",
     scrub:2,
  }
})

tl2.from(".section1bottom img",{
  opacity:0,
  y:30,
  stagger:0.15,
  duration:0.4,


 })

 tl2.from(".services",{
  x:-200,
  opacity:0,
  duration:0.4,
 })
 

 tl2.from(".elem.line1.left",{
  x:-300,
  opacity:0,
  duration:0.3,

 },"up")
 tl2.from(".elem.line1.right",{
  x:300,
  opacity:0,
  duration:0.3,
  
 },"up")

 tl2.from(".elem.line2.left",{
  x:-300,
  opacity:0,
  duration:0.3,

 },"down")
 tl2.from(".elem.line2.right",{
  x:300,
  opacity:0,
  duration:0.3,
  
 },"down")



 var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger :".section3",
    scroller:"body",
     start:"top 90%",
     end :"top 40%",
     scrub:2,
  }
})

tl3.from(".section3",{
  x:1000,
  opacity:0,
  duration:2,
})





var tl4 = gsap.timeline({
  scrollTrigger:{
    trigger :".section5",
    scroller:"body",
     start:"top 80%",
     end :"top 50%",
     scrub:2,
  }
})

tl4.from(".case-study",{
  x:200,
  opacity:0,
  duration:0.3,
 })
 tl4.from("footer",{
  x:1000,
  opacity:0,
  duration:2,
})
