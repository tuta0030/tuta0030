function setupGallery() {
  console.log("gallery.js loaded");
  let gallery = document.createElement("div");
  gallery.id = "gallery_div";
  getGalleryImages(gallery);
  document.getElementById("top_stuff").after(gallery);
}

function getGalleryImages(parent_node) {
  let img = "web_src/images/gallery_images/";
  for (i = 1; i < 11; i++) {
    let image = document.createElement("img");
    let div = document.createElement("div");
    image.src = img.concat(i.toString()).concat(".jpg");
    modal(image);
    div.className = "gallery_image";
    div.appendChild(image);
    parent_node.appendChild(div);
  }
}

function modal(image) {
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];
  let modalImg = document.getElementById("img01");

  image.onclick = function () {
    modal.style = "display:block; width:100%;";
    modalImg.src = image.src;
  };

  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      modal.style.display = "none";
    }
  };

  span.onclick = function () {
    modal.style.display = "none";
  };
}

define(function () {
  return { gallery: setupGallery };
});
