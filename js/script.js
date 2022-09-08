/*let lastScrollPosition = 0;
document.addEventListener('scroll', (event) => {
  let navbar = document.getElementById("navigation");
  if (window.scrollY > lastScrollPosition) {
    navbar.remove("fixed-top");
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.add("fixed-top");
  }
  lastScrollPosition = window.scrollY;
}); */

// Enable hidden nav bar
{
  const nav = document.getElementById("navigation");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      //nav.classList.add("navigation--hidden")
      //alert(nav.offsetHeight);
      let h = nav.offsetHeight;
      nav.style.transform = `translateY(${-h}px)`;
    } else {
      //nav.classList.remove("navigation--hidden");
      let h = nav.offsetHeight;
      nav.style.transform = `translateY(${0}px)`;

    }

    lastScrollY = window.scrollY;
  });
}