import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

// * add elements in gallery

const galleryEl = galleryItems
  .map((el) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${el.original}">
        <img
          class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
        />
      </a>
    </div>`;
  })
  .join("");

galleryBox.insertAdjacentHTML("afterbegin", galleryEl);

// * delegation of events

let instance = basicLightbox.create(`<img width='800' height='600'></img>`);

function openGalleryImg(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const srcOnOriginal = e.target.dataset.source;
  const elem = instance.element().lastElementChild.lastElementChild;

  elem.setAttribute("src", srcOnOriginal);

  instance.show();

  document.addEventListener("keydown", closeModal);
}

galleryBox.addEventListener("click", openGalleryImg);

// * close modal

function closeModal(e) {
  if (e.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", closeModal);
  }
}
