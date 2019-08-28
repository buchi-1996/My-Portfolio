const harmbugger = document.querySelector('.harmbugger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

harmbugger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})