const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', scrollReveal);
// Trigger once on load
window.addEventListener('load', scrollReveal);
