const container = document.getElementById('container');
const imageDiv = document.getElementById('imageDiv');
const textDiv = document.getElementById('textDiv');

imageDiv.addEventListener('click', () => {
    container.classList.toggle('initial');
    container.classList.toggle('hidden');
});
