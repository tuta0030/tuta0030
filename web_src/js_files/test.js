// TODO 丰富自动生成的html内容
// 导航栏 {主页， 作品展示， 联系}

console.log("Using js file...")

var top_stuff = document.getElementById("top_stuff");
var new_content_node = document.createElement("div");
var new_content_text = document.createTextNode("Banana");
new_content_node.setAttribute("class", "generated_text");
new_content_node.appendChild(new_content_text);
top_stuff.appendChild(new_content_node);
