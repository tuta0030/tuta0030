console.log("setup.js loaded.");

// var top_stuff = document.getElementById("banner_img");
// var footer = document.getElementById("footer");

require.config({
  baseUrl: "web_src/js_files",
  waitSeconds: 2000,
});

require(["top_stuff", "nav_bar", "referral", "gallery", "footer"], function (
  setup_top_stuff,
  nav_bar,
  referral,
  gallery,
  footer
) {
  setup_top_stuff.setup_top_stuff();
  nav_bar.setup_nav_bar();
  gallery.gallery();
  footer.setup_footer();
  referral.setup_referral();
});
