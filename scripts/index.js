const openModalCreateOrderBtn = document.querySelector(".openCreateOrderModalBtn");
const modalOverlay = document.querySelector(".modalOverlay");

openModalCreateOrderBtn.addEventListener("click", () => {
  modalOverlay.classList.add("open");
});
