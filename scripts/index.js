const root = document.querySelector("#root");

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
];

const frame = document.createElement("div");
const cards = document.createElement("div");
const prevousImageBtn = document.createElement("div");
prevousImageBtn.classList.add("prevousImageBtn");
const nextImageBtn = document.createElement("div");
nextImageBtn.classList.add("nextImageBtn");

frame.classList.add("frame");
cards.classList.add("cards");

frame.append(cards, prevousImageBtn, nextImageBtn);
root.append(frame);

images.forEach((image) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url(${image})`;
  cards.append(card);
});

let currentImg = 0;

prevousImageBtn.addEventListener("click", () => {
  const card = document.querySelector(".card");
  if (card) {
    let width = Number(getComputedStyle(cards).left.split("px")[0]);
    if (width <= -500 && width !== 0 && width % 500 === 0 && currentImg != 0) {
      currentImg--;
      width += 500;
      // console.log(width);
      cards.style.left = `${width}px`;
    }
  }
});

nextImageBtn.addEventListener("click", () => {
  const card = document.querySelector(".card");
  if (card) {
    let width = Number(getComputedStyle(cards).left.split("px")[0]);
    // console.log(currentImg < images.length - 1);
    if (width % 500 === 0 && currentImg < images.length - 1) {
      currentImg++;
      width -= 500;
      cards.style.left = `${width}px`;
    }
    // console.log(cards.style.left);
  }
});
