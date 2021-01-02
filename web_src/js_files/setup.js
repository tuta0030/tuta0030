console.log("setup.js loaded.");

// var top_stuff = document.getElementById("banner_img");
// var footer = document.getElementById("footer");

require.config({
  baseUrl: "web_src/js_files",
  waitSeconds: 200
});

function setup_top_stuff() {
  let footer = document.getElementById("footer")
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
setup_top_stuff();

function setup_footer () {
  let footer = document.createElement("div");
  footer.id = "footer";
  
}

require(["nav_bar", "referral", "gallery"], function (nav_bar, referral, gallery) {
  nav_bar.setup_nav_bar();
  referral.setup_referral();
  gallery.gallery();
});
