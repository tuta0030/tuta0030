function setupGallery () {
    console.log("Setting up gallery");
    let gallery = document.createElement("div");
    gallery.className = "row";
    getGalleryImages(gallery);
    document.getElementById("top_stuff").appendChild(gallery);
}

function getGalleryImages(parent_node) {
    let imgsDir = "web_src/images/gallery_images/";
    for (i=1; i<11; i++) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = imgsDir.concat(i.toString()).concat(".jpg");
        div.className = "gallery_image";
        div.appendChild(image);
        parent_node.appendChild(div);
    }
}

define(function () {
  return { banana: setupGallery };
});
