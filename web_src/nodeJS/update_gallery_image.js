var fs = require("fs");

var showGalleryImageFiles = {
  images_path: "web_src/images/gallery_images/",
  gallery_images_path: "web_src/js_files/gallery_images_path.js",
  show: function () {
    var files = fs.readdirSync(this.images_path);
    console.log(files);
  },
  get: function () {
    var fs = require("fs");
    var files = fs.readdirSync(this.images_path);
    let files_path = [];
    for (i = 0; i < files.length; i++) {
      files_path.push(this.images_path.concat(files[i]));
    }
    return files_path;
  },
  update: function () {
    let strListItem = [];
    let strListBefore = this.get();
    for (i = 0; i < strListBefore.length; i++) {
      strListItem.push('\n"'.concat(strListBefore[i]).concat('"'));
    }
    let out_content = "define(galleryImageFilesPaths = {paths: ["
      .concat(strListItem)
      .concat("]});");
    fs.writeFile(
      this.gallery_images_path,
      out_content,
      encodeURI("utf-8"),
      function (err) {
        if (err) return console.log(err);
      }
    );
  },
};

module.exports = showGalleryImageFiles;
showGalleryImageFiles.update();
