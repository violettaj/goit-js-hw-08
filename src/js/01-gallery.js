// Add imports above this line


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from "./gallery-items";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((element) => {
  const items = document.createElement("div");
  items.classList.add("gallery__item");
  gallery.append(items);
  const links = document.createElement("a");
  links.classList.add("gallery__link");
  links.href = element.original;
  items.append(links);
  const images = document.createElement("img");
  images.classList.add("gallery__image");
  images.src = element.preview;
  images.alt = element.description;
  images.dataset.source = element.original;
  links.append(images);
});
const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionData: "alt",
  });