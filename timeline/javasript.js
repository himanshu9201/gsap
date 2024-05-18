// gsap.to("#box1",{
//   x:1000,
//   duration:2,
//   delay:2,
//   rotate:360,
//   backgroundColor: "green",
//   borderRadius:"50%",
//   yoyo:true,
// })
// gsap.to("#box2",{
//   x:1000,
//   duration:2,
//   delay:4,
//   rotate:360,
//   backgroundColor: "lightred",
//   borderRadius:"50%",
//   yoyo:true,
// })
// gsap.to("#box3",{
//   x:1000,
//   duration:2,
//   delay:6,
//   rotate:360,
//   backgroundColor: "lightgreen",
//   borderRadius:"50%",
//   yoyo:true,
// })
var tl = gsap.timeline()
tl.to("#box1",{
    x:1000,
    duration:2,
    delay:2,
    rotate:360,
    backgroundColor: "green",
    borderRadius:"50%",

  })
 tl.to("#box2",{
  x:1000,
  duration:2,
  delay:1,
  rotate:360,
  backgroundColor: "lightred",
  borderRadius:"50%",

})
tl.to("#box3",{
  x:1000,
  duration:2,
  delay:1,
  rotate:360,
  backgroundColor: "lightgreen",
  borderRadius:"50%",

})