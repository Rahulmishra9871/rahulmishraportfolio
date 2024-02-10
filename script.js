var tl = gsap.timeline();

tl.from("nav h2,nav ul", {
  y: -100,
  opacity: 0,
  duration: 2,
  stagger: 1,
});
tl.from(".container .about-left h1", {
  x: -100,
  opacity: 0,
  duration: 1,
});
tl.from(".container .about-left p", {
  opacity: 0,
  duration: 2,
});
tl.from(".container .about-right img", {
  scale: 0,
  opacity: 0,
  duration: 1,
});
tl.from(".myskills h3,.html", {
  y: 100,
  opacity: 0,
  duration: 1,
});

let m_icon = document.querySelector(".menu");
let c_icon = document.querySelector(".close");
let x = document.querySelector(".links");

function openMenu() {
  x.style.display = "inline-block";
  c_icon.style.display = "block";
  m_icon.style.display = "none";
}
function closeMenu() {
  x.style.display = "none";
  c_icon.style.display = "none";
  m_icon.style.display = "block";
}
