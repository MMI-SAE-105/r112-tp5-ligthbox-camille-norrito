// *** LIGHTBOX ***
const thumbnails = document.querySelectorAll('ul li img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (evt) => {
        lightboxImg.src = thumbnail.dataset.fullImg;
        lightbox.showModal();
    });
});

lightbox.addEventListener('click', (evt) => {
    lightbox.close();
});