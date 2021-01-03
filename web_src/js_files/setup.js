console.log("setup.js loaded.");

// var top_stuff = document.getElementById("banner_img");
// var footer = document.getElementById("footer");

require.config({
  baseUrl: "web_src/js_files",
  waitSeconds: 2000
});

function setup_footer () {
  let footer = document.createElement("div");
  footer.id = "footer";
}

require(["top_stuff", "nav_bar", "referral", "gallery"], function (setup_top_stuff, nav_bar, referral, gallery) {
  setup_top_stuff.setup_top_stuff();
  nav_bar.setup_nav_bar();
  gallery.gallery();
  referral.setup_referral();
});
