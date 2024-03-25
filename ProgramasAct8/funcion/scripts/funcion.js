function displayMessage(msgText, msgType) {
    let html = document.querySelector("html");

let panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
html.appendChild(panel);

let msg = document.createElement("p");
msg.textContent = msgText;

panel.appendChild(msg);

let closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);

closeBtn.onclick = function () {
  panel.parentNode.removeChild(panel);
};
}
let html = document.querySelector("html");
let panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
html.appendChild(panel);
let msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

let closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
closeBtn.onclick = function () {
    panel.parentNode.removeChild(panel);
  };

  displayMessage();
  let btn = document.querySelector("button");
  btn.onclick = function () {
    displayMessage("Woo, this is a different message!");
  };