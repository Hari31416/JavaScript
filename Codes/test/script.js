const body = document.querySelector("body");
const text = document.createElement("div");
text.classList.add("text");
text.textContent = "Hello World!";
// document.querySelector("body").appendChild(text);

const html = "<p class ='text'>Hello</p>";
console.log(body.innerHTML);

const btn = document.createElement("button");
btn.textContent = "Click Me!";
btn.classList.add("btn");
body.prepend(btn);
btn.addEventListener("click", function () {
  body.append(text);
  body.insertAdjacentHTML("beforeend", html);
});
