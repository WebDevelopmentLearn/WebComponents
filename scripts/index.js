const openModalCreateOrderBtn = document.querySelector(".openCreateOrderModalBtn");
const modalCreateOrderOverlay = document.querySelector(".modalCreateOrderOverlay");
const modalCreateOrderWindow = document.querySelector(".modalCreateOrderWindow");
const createOrderBtn = document.querySelector(".createOrderBtn");
const createOrderForm = document.querySelector(".createOrderForm");

const createOrderAddressInput = document.querySelector(".createOrderAddressInput");
const createOrderPriceInput = document.querySelector(".createOrderPriceInput");
const createOrderRecipientInput = document.querySelector(".createOrderRecipientInput");

const notificationContainer = document.querySelector(".notificationContainer");
const createOrderSuccessfulNotification = document.querySelector("#createOrderSuccessfulNotification");
const createOrderFailedNotification = document.querySelector("#createOrderFailedNotification");
const orderPaidNotification = document.querySelector("#orderPaidNotification");
const orderSentNotification = document.querySelector("#orderSentNotification");
const orderReceivedNotification = document.querySelector("#orderReceivedNotification");

const hasDigits = /\d/; //регулярное выражение, которое проверяет наличие цифр в строке.
const hasLetters = /[a-zA-Z]/; //регулярное выражение, которое проверяет наличие букв в строке.

openModalCreateOrderBtn.addEventListener("click", (event) => {
  // event.preventDefault();
  modalCreateOrderOverlay.classList.add("open");
});

modalCreateOrderOverlay.addEventListener("click", (event) => {
  event.preventDefault();
  modalCreateOrderOverlay.classList.remove("open");
});

modalCreateOrderWindow.addEventListener("click", (event) => {
  event.stopPropagation();
});

createOrderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // if (validateRecipient(createOrderRecipientInput.value) && validatePrice(createOrderPriceInput.value)) {
  //   // setTimeout(() => {

  //   // }, 3000);
  //   modalCreateOrderOverlay.classList.remove("open");
  //   createNotification("green", "Заказ создан", "Ожидайте дальнейшей информации");
  // } else {
  //   console.log(12521521215);
  // }
  modalCreateOrderOverlay.classList.remove("open");
  createNotification("created");
});

function createNotification(type) {
  switch (type) {
    case "created":
      createOrderSuccessfulNotification.style.transform = "translateX(0%)";
      createOrderSuccessfulNotification.addEventListener("click", () => {
        createOrderSuccessfulNotification.style.transform = "translateX(100%)";
      });
      break;
    case "failed":
      createOrderFailedNotification.style.transform = "translateX(0%)";
      createOrderFailedNotification.addEventListener("click", () => {
        createOrderFailedNotification.style.transform = "translateX(100%)";
      });
      break;
    case "paid":
      orderPaidNotification.style.transform = "translateX(0%)";
      orderPaidNotification.addEventListener("click", () => {
        orderPaidNotification.style.transform = "translateX(100%)";
      });
      break;
    case "sent":
      orderSentNotification.style.transform = "translateX(0%)";
      orderSentNotification.addEventListener("click", () => {
        orderSentNotification.style.transform = "translateX(100%)";
      });
      break;
    case "recieved":
      orderReceivedNotification.style.transform = "translateX(0%)";
      orderReceivedNotification.addEventListener("click", () => {
        orderReceivedNotification.style.transform = "translateX(100%)";
      });
      break;
  }
}

function validateRecipient(username) {
  let flag = false;
  for (let i = 0; i < username.length; i++) {
    const element = username[i];
    if (hasDigits.test(element) || !hasLetters.test(element)) {
      flag = true;
      break;
    }
  }
  return !flag && username.length >= 2 && username.length <= 24;
}

function validatePrice(price) {
  return hasDigits.test(price);
}
