word = document.querySelectorAll(".word");
meaning = document.querySelectorAll(".meaning");
close = document.querySelectorAll(".close");
reset = document.querySelectorAll(".reset");
console.log(reset);
for (let i = 0; i < word.length; i++) {
  // Showing the meaning
  word[i].addEventListener("click", function () {
    meaning[i].classList.toggle("hidden");
    close[i].classList.toggle("hidden");
    word[i].classList.toggle("clicked");
  });

  // Hiding the meaning by close button
  close[i].addEventListener("click", function () {
    meaning[i].classList.add("hidden");
    close[i].classList.add("hidden");
    word[i].classList.remove("clicked");
  });

  // Hovering over the words
  word[i].addEventListener("mouseover", function () {
    word[i].classList.add("hover");
  });

  word[i].addEventListener("mouseout", function () {
    word[i].classList.remove("hover");
  });

  // Hovering over the close button
  close[i].addEventListener("mouseover", function () {
    close[i].classList.add("hoverClose");
  });

  close[i].addEventListener("mouseout", function () {
    close[i].classList.remove("hoverClose");
  });

  reset[0].addEventListener("click", function () {
    meaning[i].classList.add("hidden");
    close[i].classList.add("hidden");
    word[i].classList.remove("clicked");
  });
}
