
var lastScrollTop = 0;
window.addEventListener("scroll",function(){
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
  





    gsap.to(".marque",{
      transform:"translateX(0%)",
        duration:4,
        repeat:-1,
        ease:"none",
        });
        gsap.to(".marque img",{
          rotate:0
            })

  } else {
    gsap.to(".marque",{
      transform:"translateX(-200%)",
        duration:4,
        repeat:-1,
        ease:"none",
        })

        gsap.to(".marque img",{
          rotate:180
            })
  }
  lastScrollTop = st;
})



