var t = gsap.timeline();
t.from("h2",{
  y:-30,
  opacity:0,
  duration:0.5,

})
t.from("h4",{
  y:-30,
  opacity:0,
  stagger:0.2
})
t.from("h1",{
  y: 20,
  opacity:0,
  duration:0.5,
  scale:0.2,
  color:"white"
})