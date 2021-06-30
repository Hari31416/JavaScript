word = document.querySelectorAll(".word");
meaning = document.querySelectorAll(".meaning");
close = document.querySelectorAll(".close");
// // console.log(word);
// const open = function (i) {
//   meaning[i].classList.remove("hidden");
// };
// meaning[0].addEventListener("click", open(0));
// console.log(meaning[0]);
// for (let i = 0; i < word.length; i++) {
//   word[i].addEventListener("click", open);
// }
console.log(word.length);
for (let i = 0; i < word.length; i++) {
  word[i].addEventListener("click", function () {
    meaning[i].classList.remove("hidden");
  });

  close[i].addEventListener("click", function () {
    meaning[i].classList.add("hidden");
  });
}
