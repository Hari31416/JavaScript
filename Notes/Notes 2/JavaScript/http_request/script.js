const form = document.querySelector("#searchForm");
const image = document.querySelector("#image");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  query = document.querySelector("#query").value;
  res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
  createImage(res);
});
// console.log(form);

const createImage = (res) => {
  for (let i = 0; i < res.data.length; i++) {
    const img = document.createElement("img");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", res.data[i].show.url);
    anchor.setAttribute("target", "_blank");
    anchor.textContent = "Click";
    img.src = res.data[i].show.image.medium;
    image.appendChild(anchor);
    image.appendChild(img);
  }
};
