function setup_referral_links() {
  console.log("referral.js loaded")
  let referral_table = document.createElement("table");
  let referral_div = document.createElement("div");
  referral_table.className = "referral_img";
  referral_div.id = "referral_div";
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
    "web_src/images/referral_icons/gracg.png",
    "涂鸦王国"
  );
  let habitica = make_referral_link_item(
    "https://habitica.com/groups/guild/fa3929ed-c60a-45fc-82ac-50bce2342035",
    "web_src/images/referral_icons/habitica.png",
    "habitica"
  );

  _items = [bilibili, fiverr, artstation, gracg, habitica]; // 在这里添加传送门元素

  for (i = 0; i < _items.length; i++) {
    let td = document.createElement("td");
    td.appendChild(_items[i]);
    referral_table.append(td);
  }
  let footer = document.getElementById("footer");
  referral_div.appendChild(referral_table);
  footer.appendChild(referral_div);
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


define (function() {
  return {
    setup_referral: setup_referral_links
  }
});
