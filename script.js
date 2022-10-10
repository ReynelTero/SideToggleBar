const showToggle = document.querySelector('.nav-toggle');
const closeToggle = document.querySelector('.close-btn');
const toggleContainer = document.querySelector('.toggle-container');


showToggle.addEventListener('click', () => {
    toggleContainer.classList.add('viewtoggle');
    showToggle.classList.add('hide-toggle');
});

closeToggle.addEventListener('click', () => {
    toggleContainer.classList.remove('viewtoggle');
    showToggle.classList.remove('hide-toggle');
});