const root = document.querySelector("#root");

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",

  "../assets/gallery/image1.jpg",
  "../assets/gallery/image2.jpg",
  "../assets/gallery/image3.jpg",
  "../assets/gallery/image4.jpg",
  "../assets/gallery/image5.jpg",
  "../assets/gallery/image6.jpg",
  "../assets/gallery/image7.jpg",
  "../assets/gallery/image8.jpg",
  "../assets/gallery/image9.jpg",
  "../assets/gallery/image10.jpg",
  "../assets/gallery/image11.jpg",
  "../assets/gallery/image12.jpg",
];

const frame = document.createElement("div");
const cards = document.createElement("div");
const prevousImageBtn = document.createElement("img");
prevousImageBtn.src = "../assets/previous_arrow.svg";
prevousImageBtn.classList.add("prevousImageBtn");
const nextImageBtn = document.createElement("img");
nextImageBtn.src = "../assets/next_arrow.svg";
nextImageBtn.classList.add("nextImageBtn");

frame.classList.add("frame");
cards.classList.add("cards");

frame.append(cards, prevousImageBtn, nextImageBtn);
root.append(frame);

images.forEach((image) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.onerror = function () {
    card.style.src = `url(../assets/example.png)`;
  };
  card.style.backgroundImage = `url(${image})`;
  cards.append(card);
});

let currentImg = 0;
let isAnimating = false;

prevousImageBtn.addEventListener("click", previousImage);

nextImageBtn.addEventListener("click", nextImage);

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      previousImage();
      break;
    case "ArrowRight":
      nextImage();
      break;
  }
});

function previousImage() {
  if (isAnimating) return;
  const card = document.querySelector(".card");
  if (card) {
    let width = Number(getComputedStyle(cards).left.split("px")[0]);
    if (currentImg != 0) {
      isAnimating = true;
      currentImg--;
      width += 500;
    } else if (currentImg <= 0) {
      isAnimating = true;
      currentImg = images.length - 1;
      width -= 500 * currentImg;
    }
    cards.style.left = `${width}px`;
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }
}
function nextImage() {
  if (isAnimating) return;
  const card = document.querySelector(".card");
  if (card) {
    let width = Number(getComputedStyle(cards).left.split("px")[0]);
    if (currentImg < images.length - 1) {
      isAnimating = true;
      currentImg++;
      width -= 500;
    } else if (currentImg >= images.length - 1) {
      isAnimating = true;
      currentImg = 0;
      width = 0;
    }
    cards.style.left = `${width}px`;
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }
}
