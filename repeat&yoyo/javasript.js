gsap.to("#box1",{
  x:1000,
  duration:2,
  delay:2,
  rotate:360,
  backgroundColor: "green",
  borderRadius:"50%",
  repeat:-1,
  yoyo:true,
})
// gsap.from("#box2",{
//   x:1000,
//   duration:2,
//   delay:2,
//   rotate:360,
//   backgroundColor: "white"
//   ,
//   borderRadius:"50%"
// })

gsap.from("h1",{
   opacity:0,
  duration:1,
  delay:2,
  y:30,
  repeat:-1,
  yoyo:true,
stagger:1
})