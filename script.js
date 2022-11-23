
const button = document.querySelector('.menu');
let showLinks = document.querySelector('.links-box');



button.addEventListener('click', () => {
  button.classList.toggle('active');
  showLinks.classList.toggle('links-box-display');
})
