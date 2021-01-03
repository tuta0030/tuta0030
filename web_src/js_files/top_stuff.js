
function setup_top_stuff() {
  console.log("top_stuff.js loaded");
  let footer = document.getElementById("footer");
  let topStuff = document.createElement("div");
  let mainTitle = document.createElement("h1");
  let banner_img = document.createElement("img");
  banner_img.id = "banner_img";
  topStuff.id = "top_stuff";
  mainTitle.id = "mainTitle";
  banner_img.src = "web_src/images/banner.png";
  banner_img.draggable = false;
  mainTitle.innerHTML = "TUTA";
  topStuff.appendChild(mainTitle);
  topStuff.appendChild(banner_img);
  document.body.insertBefore(topStuff, footer);
}

// setup_top_stuff();

define (function() {
    return {
        setup_top_stuff: setup_top_stuff
    }
  });
