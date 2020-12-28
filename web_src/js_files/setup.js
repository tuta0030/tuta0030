console.log("setup.js loaded.");

var top_stuff = document.getElementById("banner_img");
var footer = document.getElementById("footer");

function setup_nav_bar() {
  let navigating_bar = document.createElement("div");
  navigating_bar.id = "nav_bar";

  let home = make_nav_bar_item("HOME", "?");
  let gallary = make_nav_bar_item("GALLARY", "?");
  let contact = make_nav_bar_item("CONTACT", "?");
  let referral = make_nav_bar_item("LINKS", "?#referral_img");

  _items = [home, gallary, contact, referral];  // 在这里添加导航栏元素

  for (i=0; i<_items.length; i++) {
    navigating_bar.appendChild(_items[i]);
  }

  top_stuff.before(navigating_bar);
}

function setup_referral_links() {
  footer.innerHTML = " "; //removel html content
  let referral_table = document.createElement("table");
  referral_table.setAttribute("class", "referral_img");
  let bilibili = make_referral_link_item(
    "https://space.bilibili.com/2439294",
    "web_src/images/referral_icons/bilibili.jpg",
    "bilibili"
  );
  let fiverr = make_referral_link_item(
    "https://www.fiverr.com/share/4zP8LG",
    "web_src/images/referral_icons/fiverr.png",
    "fiverr"
  );
  let artstation = make_referral_link_item(
    "https://www.artstation.com/tuta0030",
    "web_src/images/referral_icons/artstation.png",
    "artstation"
  );
  let gracg = make_referral_link_item(
    "https://www.gracg.com/user/p1863791951316943",
    "web_src/images/referral_icons/gracg.ico",
    "涂鸦王国"
  );
  let habitica = make_referral_link_item(
    "https://habitica.com/groups/guild/fa3929ed-c60a-45fc-82ac-50bce2342035",
    "web_src/images/referral_icons/habitica.png",
    "habitica"
  );

  _items = [bilibili, fiverr, artstation, gracg, habitica]; // 在这里添加传送门元素

  for (i = 0; i < _items.length; i++) {
    // append items into the referral_table node
    let td = document.createElement("td");
    td.appendChild(_items[i]);
    referral_table.append(td);
  }
  footer.appendChild(referral_table);
}

function make_referral_link_item(referral_link, icon_link, alt_text) {
  let link_item_a = document.createElement("a");
  let link_item_img = document.createElement("img");

  if (alt_text == undefined) {
    alt_text = "undefined alt text";
  }

  link_item_a.href = referral_link;
  link_item_a.target = "_blank";
  link_item_img.src = icon_link;
  link_item_img.alt = alt_text;
  link_item_a.appendChild(link_item_img);
  return link_item_a;
}

function make_nav_bar_item(text, href) {
  let nav_bar_item = document.createElement("a");
  nav_bar_item.href = href;
  nav_bar_item.innerHTML = text;
  return nav_bar_item;
}

setup_referral_links();
setup_nav_bar();
