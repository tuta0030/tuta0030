function setupGallery () {
    console.log("Setting up gallery");
    let gallery = document.createElement("div");
    gallery.className = "gallery_div";
    getGalleryImages(gallery);
    document.getElementById("top_stuff").after(gallery);
}

function getGalleryImages(parent_node) {
    let img = "web_src/images/gallery_images/";
    for (i=1; i<11; i++) {
        let image = document.createElement("img");
        let div = document.createElement("div");
        image.src = img.concat(i.toString()).concat(".jpg");
        div.className = "gallery_image";
        div.appendChild(image);
        parent_node.appendChild(div);
    }
}

define(function () {
  return { gallery: setupGallery };
});
