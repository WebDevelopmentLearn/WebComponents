const openModalBtn = document.querySelector(".openModalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");
const input = document.querySelector("input");
openModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.toggle("modalHidden");
});

closeModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.toggle("modalHidden");
    input.value = "";
});


modal.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.toggle("modalHidden");
});

modalBody.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
});


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.checkVisibility()) {
        modal.classList.toggle("modalHidden");
        input.value = "";
    }

    if (event.key === "Enter") {
        modal.classList.toggle("modalHidden");
    }
});









