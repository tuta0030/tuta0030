function setupGallary () {
    console.log("Setting up gallary");
    let gallary = document.createElement("div");
    gallary.id = "gallary";
    getGallaryImages();
}

function getGallaryImages() {
    let imgsDir = "web_src/images/gallary_images/";
    for (i=1; i<11; i++) {
        let image = document.createElement("img");
        image.src = imgsDir.concat(i.toString()).concat(".jpg");
        document.body.appendChild(image);
    }
}

define(function () {
  return { banana: setupGallary };
});
