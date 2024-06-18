const root = document.querySelector("#root");

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",

  //   "../assets/gallery/image1.jpg",
  //   "../assets/gallery/image2.jpg",
  //   "../assets/gallery/image3.jpg",
  //   "../assets/gallery/image4.jpg",
  //   "../assets/gallery/image5.jpg",
  //   "../assets/gallery/image6.jpg",
  //   "../assets/gallery/image7.jpg",
  //   "../assets/gallery/image8.jpg",
  //   "../assets/gallery/image9.jpg",
  //   "../assets/gallery/image10.jpg",
  //   "../assets/gallery/image11.jpg",
  //   "../assets/gallery/image12.jpg",
];

const frame = document.createElement("div");
const cards = document.createElement("div");
const triggers = document.createElement("div");
const previousImageBtn = document.createElement("button");
const nextImageBtn = document.createElement("button");

triggers.classList.add("triggers");
previousImageBtn.classList.add("prevousImageBtn");
nextImageBtn.classList.add("nextImageBtn");
frame.classList.add("frame");
cards.classList.add("cards");

previousImageBtn.textContent = "<";
nextImageBtn.textContent = ">";

triggers.append(previousImageBtn, nextImageBtn);
frame.append(cards, triggers);
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
previousImageBtn.addEventListener("click", previousImage);

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
  if (currentImg != 0) {
    currentImg--;
  } else if (currentImg <= 0) {
    currentImg = images.length - 1;
  }
  cards.style.left = `${-1 * currentImg * 500}px`;
}
function nextImage() {
  if (currentImg < images.length - 1) {
    isAnimating = true;
    currentImg++;
  } else if (currentImg >= images.length - 1) {
    isAnimating = true;
    currentImg = 0;
  }
  cards.style.left = `${-1 * currentImg * 500}px`;
}

//============== rounds ========================

function createRounds() {
  const container = document.createElement("div");
  container.classList.add("rounds");

  images.forEach((el, index) => {
    const round = document.createElement("button");
    container.append(round);

    const allBtns = round.parentElement.children;
    if (index === 0) {
      round.classList.add("active");
    }
    round.addEventListener("click", () => {
      currentImg = index;
      for (let index = 0; index < allBtns.length; index++) {
        const element = allBtns[index];
        element.classList.remove("active");
      }
      round.classList.add("active");
      cards.style.left = `${-1 * currentImg * 500}px`;
    });
  });
  frame.append(container);
}
createRounds();
