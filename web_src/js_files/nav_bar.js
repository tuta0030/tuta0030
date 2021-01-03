function setup_nav_bar() {
  let navigating_bar = document.createElement("div");
  navigating_bar.id = "nav_bar";

  let home = make_nav_bar_item("HOME", "?");
  let gallary = make_nav_bar_item("GALLARY", "?");
  let contact = make_nav_bar_item("CONTACT", "?");
  let referral = make_nav_bar_item("LINKS", "#referral_img");

  _items = [home, gallary, contact, referral]; // 在这里添加导航栏元素

  for (i = 0; i < _items.length; i++) {
    navigating_bar.appendChild(_items[i]);
  }

  let mainTitle = document.getElementById("mainTitle");
  mainTitle.appendChild(navigating_bar);
}

function make_nav_bar_item(text, href) {
  let nav_bar_item = document.createElement("a");
  nav_bar_item.href = href;
  nav_bar_item.innerHTML = text;
  return nav_bar_item;
}

// 定义导航栏设置模组
define(function () {
  console.log("nav_bar.js loaded");
  return {
    setup_nav_bar: setup_nav_bar,
  };
});
