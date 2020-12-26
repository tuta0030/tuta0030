// TODO 丰富自动生成的html内容
// 导航栏 {主页， 作品展示， 联系}
// 使用JS 生成传送门html元素

console.log("Using js file")

var top_stuff = document.getElementById("banner_img");
var footer = document.getElementById("footer");
var navigating_bar = document.createElement("div");

function setup_nav_bar () {
    navigating_bar.innerHTML = "Banana";
    navigating_bar.id = "generated_navigating_bar";
};

function setup_referral_links () {
    document.getElementById("footer").innerHTML = " ";
};

setup_referral_links();
setup_nav_bar();
top_stuff.before(navigating_bar);
