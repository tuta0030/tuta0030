console.log("setup.js loaded.");

// var top_stuff = document.getElementById("banner_img");
// var footer = document.getElementById("footer");

require.config({
  baseUrl: "web_src/js_files",
  waitSeconds: 200
});

require(["nav_bar", "referral"], function (nav_bar, referral) {
  nav_bar.setup_nav_bar();
  referral.setup_referral();
});
