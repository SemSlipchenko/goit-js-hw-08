// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(items) {
    return items.map(({preview, original, description}) => { 
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/></a>`;
    }).join('');
};

new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: "bottom",
});
