gsap.to("#idk h1",{
  duration:1,
  transform:"translateX(-230%)",
 scrollTrigger:{
  trigger:"#idk",
  scroller:"body",
  start:"top 0",
  end:"top -100%",
  markers:true,
 scrub:1,
 pin:true,
 } 
})