import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector(".gallery");
galleryList.style.listStyle = "none";
const galleryListItems = [...galleryItems].map(
  ({ preview, original, description } = el) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const image = document.createElement("img");
    listItem.classList.add("gallery__item");
    link.href = original;
    link.classList.add("gallery__link");
    image.src = preview;
    image.alt = description;
    image.title = description;
    image.classList.add("gallery__image");
    link.appendChild(image);
    listItem.appendChild(link);
    return listItem;
  }
);
galleryList.append(...galleryListItems);
let gallery = new SimpleLightbox('.gallery a', {captionDelay: 250});

