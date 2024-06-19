const openModalCreateOrderBtn = document.querySelector(".openCreateOrderModalBtn");
const modalCreateOrderOverlay = document.querySelector(".modalCreateOrderOverlay");
const modalCreateOrderWindow = document.querySelector(".modalCreateOrderWindow");
const createOrderBtn = document.querySelector(".createOrderBtn");

const createOrderAddressInput = document.querySelector("createOrderAddressInput");
const createOrderPriceInput = document.querySelector("createOrderPriceInput");
const createOrderRecipientInput = document.querySelector("createOrderRecipientInput");

const hasDigits = /\d/; //регулярное выражение, которое проверяет наличие цифр в строке.
const hasLetters = /[a-zA-Z]/; //регулярное выражение, которое проверяет наличие букв в строке.

openModalCreateOrderBtn.addEventListener("click", (event) => {
  event.preventDefault();
  modalCreateOrderOverlay.classList.add("open");
});

modalCreateOrderOverlay.addEventListener("click", (event) => {
  event.preventDefault();
  modalCreateOrderOverlay.classList.remove("open");
});

modalCreateOrderWindow.addEventListener("click", (event) => {
  event.stopPropagation();
});

createOrderBtn.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateRecipient(createOrderRecipientInput.value) && validatePrice(createOrderPriceInput.value)) {
    console.log("Test");
  }
});

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
