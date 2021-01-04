function setup_footer () {
    console.log("footer.js loaded")
    let footer = document.createElement("div");
    let textDiv = document.createElement("div");
    let hr = document.createElement("hr");
    footer.id = "footer";
    textDiv.className = "portal";
    // textDiv.style = "text-align: center; color: rgb(136, 136, 136); padding-top: 5vh"
    textDiv.innerHTML = "LINKS"
    footer.appendChild(textDiv);
    footer.appendChild(hr);
    document.body.appendChild(footer);
  }

define (function () { return {setup_footer: setup_footer}});