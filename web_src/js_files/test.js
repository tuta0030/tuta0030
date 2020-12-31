function addFileDiv() {
  let fileDiv = document.createElement("div");
  let input = document.createElement("input");
  let content = document.createElement("h3");
  let pre = document.createElement("pre");
  pre.id = "file-content";
  content.innerHTML = "contents of the file: ";
  input.type = "file";
  input.id = "file-input";
  content.appendChild(pre);
  input.appendChild(content);
  fileDiv.appendChild(input);
  document.body.appendChild(fileDiv);
}

function readSingleFile(e) {
  console.log("Using test.js");
  addFileDiv();

  let file = e.target.files[0];
  if (!file) {
    return;
  }

  let reader = new FileReader();
  reader.onload = function (e) {
    let content = e.target.result;
    displayContent(content);
  };
  reader.readAsText(file);
}

function displayContent(contents) {
  let element = document.getElementById("file-content");
  element.textContent = contents;
  window.open("data:text/html," + encodeURIComponent(data), "_blank");
}

// document
//   .getElementById("file-input")
//   .addEventListener("change", readSingleFile, false);

define(function () {
  return { banana: readSingleFile };
});
