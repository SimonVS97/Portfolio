// Code chunk is responsible for fade out/fade in of nav bar
{
  const nav = document.getElementById("navigation");
  // window.scrollY gives number of pixel someone has scrolled down from the top of the page
  // initially is null
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      // get height of nav bar
      let height = nav.offsetHeight;
      // push navbar out of the screen
      nav.style.transform = `translateY(${-height}px)`;
    } else {
      // put navbar back on to the screen
      let height = nav.offsetHeight;
      nav.style.transform = `translateY(${0}px)`;

    }
    // set new Ausgangswert für scroll
    lastScrollY = window.scrollY;
  });
}