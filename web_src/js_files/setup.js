console.log("setup.js loaded.");

// var top_stuff = document.getElementById("banner_img");
// var footer = document.getElementById("footer");

require.config ({
  baseUrl: "web_src/js_files",
  waitSeconds: 200,
  paths: {
    setup: "web_src/js_files/setup.js"
  }
})

require(["nav_bar", "referral"],
function (nav_bar, referral) {

  // setup_referral_links();
  // setup_nav_bar();

})


