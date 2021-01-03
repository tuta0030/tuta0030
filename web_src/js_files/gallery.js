function setupGallery() {
  console.log("gallery.js loaded");
  let gallery = document.createElement("div");
  gallery.className = "gallery_div";
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
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  let img = image;
  var modalImg = document.getElementById("img01");
  img.onclick = function () {
    modal.style = "display:block; width:100%;";
    modalImg.src = image.src;
  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };
}

define(function () {
  return { gallery: setupGallery };
});
