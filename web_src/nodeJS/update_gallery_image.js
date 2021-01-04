var fs = require("fs");
var showGalleryImageFiles = {
  show: function () {
    var files = fs.readdirSync("web_src/images/gallery_images/");
    console.log(files);
  },
  get: function () {
    var fs = require("fs");
    var files = fs.readdirSync("web_src/images/gallery_images/");
    let files_path = [];
    for (i = 0; i < files.length; i++) {
      files_path.push("web_src/images/gallery_images/".concat(files[i]));
    }
    return files_path;
  },
  update: function () {
    let strListItem = [];
    let strListBefore = this.get();
    for (i = 0; i < strListBefore.length; i++) {
      strListItem.push('"'.concat(strListBefore[i]).concat('"'));
    }
    let out_content = "define(galleryImageFilesPaths = {paths: ["
      .concat(strListItem)
      .concat("]});");
    fs.writeFile(
      "web_src/js_files/gallery_images_path.js",
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
