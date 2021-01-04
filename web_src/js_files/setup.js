console.log("setup.js loaded.");

require.config({
  baseUrl: "web_src/js_files",
  waitSeconds: 2000,
});

require([
  "top_stuff",
  "nav_bar",
  "referral",
  "gallery",
  "footer",
  "gallery_images_path",
], function (
  setup_top_stuff,
  nav_bar,
  referral,
  gallery,
  footer,
  gallery_images_path
) {
  setup_top_stuff.setup_top_stuff();
  nav_bar.setup_nav_bar();
  gallery.gallery(gallery_images_path);
  footer.setup_footer();
  referral.setup_referral();
});
