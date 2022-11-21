
const button = document.querySelector('.menu');
let showLinks = document.querySelector('.links-box');


function displayLinks() {
    button.addEventListener('click', () => {
        showLinks.classList.toggle('links-box-display');
        if (showLinks.classList.contains('links-box-display')) {
            button.style.color = 'black';
        } else {
            button.style.color = 'white';
        }
    })
}


displayLinks();
