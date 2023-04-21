import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
const galleryList = document.querySelector('.gallery');
galleryList.style.listStyle = 'none';
const markup = [...galleryItems]
  .map(
    ({ preview, original, description } = el) =>
      `<li class="gallery__item"><a href="${original}" 
class="gallery__link"><img src="${preview}" 
alt="${description}" 
title="${description}" 
class="gallery__image"></a></li>`
  )
  .join('');
console.log(markup);
galleryList.insertAdjacentHTML('beforeend', markup);
let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 });
