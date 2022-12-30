// Code chunk is responsible for fade out/fade in of nav bar

const nav = document.getElementById("navigation");
const navGerman = document.getElementById("navigationGerman")
// window.scrollY gives number of pixel someone has scrolled down from the top of the page
// initially is null
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    // get height of nav bar
    let height = nav.offsetHeight;
    let heightGerman = navGerman.offsetHeight;
    // push navbar out of the screen
    nav.style.transform = `translateY(${-height}px)`;
    navGerman.style.transform = `translateY(${-heightGerman}px)`;
  } else {
    // put navbar back on to the screen
    let height = nav.offsetHeight;
    nav.style.transform = `translateY(${0}px)`;
    navGerman.style.transform = `translateY(${0}px)`;
  }
  // set new Ausgangswert für scroll
  lastScrollY = window.scrollY;
});

// code chunk for switching language
const germanButton = document.getElementsByClassName("germanButton")[0];

germanButton.addEventListener("click", () => {
  const englishElem = document.getElementsByClassName("english");
  const germanElem = document.getElementsByClassName("german");
  for (let i = 0; i < englishElem.length; i++) {
    englishElem[i].classList.toggle('hidden');
  }
  for (let i = 0; i < germanElem.length; i++) {
    germanElem[i].classList.toggle('hidden');
  }
})

const englishButton = document.getElementsByClassName("englishButton")[0];

englishButton.addEventListener("click", () => {
  const englishElem = document.getElementsByClassName("english");
  const germanElem = document.getElementsByClassName("german");
  for (let i = 0; i < englishElem.length; i++) {
    englishElem[i].classList.toggle('hidden');
  }
  for (let i = 0; i < germanElem.length; i++) {
    germanElem[i].classList.toggle('hidden');
  }
})





