word = document.querySelectorAll(".word");
meaning = document.querySelectorAll(".meaning");
close = document.querySelectorAll(".close");
reset = document.querySelectorAll(".reset");

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

  // Hiding all the meaning by reset button
  reset[0].addEventListener("click", function () {
    meaning[i].classList.add("hidden");
    close[i].classList.add("hidden");
    word[i].classList.remove("clicked");
  });
}
