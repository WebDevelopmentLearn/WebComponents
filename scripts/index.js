const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector("#modal");

openModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.toggle("modalHidden");
})

modal.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target === modal) {
        modal.classList.toggle("modalHidden");
    }
})











