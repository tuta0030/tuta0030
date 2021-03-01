function setupGallery(gallery_images_path) {
  console.log("gallery.js loaded");
  let gallery = document.createElement("div");
  gallery.id = "gallery_div";
  getGalleryImages(gallery_images_path, gallery);
  document.getElementById("top_stuff").after(gallery);
}

function getGalleryImages(gallery_images_path, parent_node) {
  let files = gallery_images_path.paths;
  console.log("current gallery image files: ");
  for (i = files.length-1; i > -1; i--) {
    console.log(files[i]);
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = files[i];
    modal(image);
    div.className = "gallery_image";
    div.appendChild(image);
    parent_node.appendChild(div);
  }
}

function make_modal() {
  let myModal = document.createElement("div");
  let close = document.createElement("span");
  let image = document.createElement("img");
  myModal.id = "myModal";
  myModal.className = "modal";
  close.className = "close";
  close.innerHTML = "&times;";
  image.className = "modal-content";
  image.id = "img01";
  myModal.appendChild(close);
  myModal.appendChild(image);
  document.body.appendChild(myModal);
}

function modal(image) {
  make_modal();

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
