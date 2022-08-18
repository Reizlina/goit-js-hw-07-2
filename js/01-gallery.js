import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");
let instance;
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

function openGalleryImg(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  console.log(e.target.dataset.source);

  instance = basicLightbox.create(
    `<img src='${e.target.dataset.source}' width='800' height='600'></img>`
  );

  instance.show();

  window.addEventListener("keydown", closeModal);
}

galleryBox.addEventListener("click", openGalleryImg);

// * close modal

function closeModal(e) {
  console.log();
  if (e.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", closeModal);
  }
}
