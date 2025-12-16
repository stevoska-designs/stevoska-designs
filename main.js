const overlay = document.querySelector('.overlay');
const body = document.body;
const projectPopup = document.querySelectorAll('.project-popup')
const projectBtn = document.querySelectorAll('.project-btn')
const closePopup = document.querySelectorAll('.close-popup')
// OPEN POPUP
projectBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const popup = btn.closest('.project-item').querySelector('.project-popup');

    body.classList.add('no-scroll');
    overlay.classList.add('js-overlay');
    popup.classList.add('active');
  });
});
closePopup.forEach(btn => {
  btn.addEventListener('click', () => {
    body.classList.remove('no-scroll');
    overlay.classList.remove('js-overlay');
    projectPopup.forEach(p => p.classList.remove('active'));
  });
});

overlay.addEventListener('click', () => {
  body.classList.remove('no-scroll');
  overlay.classList.remove('js-overlay');
  projectPopup.forEach(p => p.classList.remove('active'));
});
const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (currentScroll > lastScroll) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

