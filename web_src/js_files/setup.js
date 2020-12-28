// TODO 丰富自动生成的html内容
// 导航栏 {主页， 作品展示， 联系}
// 使用JS 生成传送门html元素

console.log("setup.js loaded.");

var top_stuff = document.getElementById("banner_img");
var footer = document.getElementById("footer");

function setup_nav_bar() {
  // TODO 写导航栏的代码
  let navigating_bar = document.createElement("div");
  navigating_bar.innerHTML = "Banana";
  navigating_bar.id = "generated_navigating_bar";
  return navigating_bar;
}

function setup_referral_links() {
  footer.innerHTML = " "; //removel html content
  let referral_table = document.createElement("table");
  referral_table.setAttribute("class", "referral_img");
  let bilibili = make_referral_link_item(
    "https://space.bilibili.com/2439294",
    "https://timg01.bdimg.com/timg?pacompress=&imgtype=0&sec=1439619614&autorotate=1&di=523c545539c4be354eb38d7175bd3673&quality=90&size=b200_200&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fa4aaec607be3cc6ff3b97212c057d4de.jpeg",
    "bilibili"
  );
  let fiverr = make_referral_link_item(
    "https://www.fiverr.com/share/4zP8LG",
    "//external-content.duckduckgo.com/ip3/www.fiverr.com.ico",
    "fiverr"
  );
  let artstation = make_referral_link_item(
    "https://www.artstation.com/tuta0030",
    "//external-content.duckduckgo.com/ip3/www.artstation.com.ico",
    "artstation"
  );
  let gracg = make_referral_link_item(
    "https://www.gracg.com/user/p1863791951316943",
    "//external-content.duckduckgo.com/ip3/www.gracg.com.ico",
    "涂鸦王国"
  );
  let habitica = make_referral_link_item(
    "https://habitica.com/groups/guild/fa3929ed-c60a-45fc-82ac-50bce2342035",
    "//external-content.duckduckgo.com/ip3/habitica.com.ico",
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

setup_referral_links();
top_stuff.before(setup_nav_bar());
