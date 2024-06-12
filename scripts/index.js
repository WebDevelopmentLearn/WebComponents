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
    if (input.value) {
        console.log(2121);
        openAdditionModal();
    }
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


function openAdditionModal() {
    const additionModal = document.createElement("div");
    additionModal.classList.add("modal");
    
    const additionModalBody = document.createElement("div");
    additionModalBody.id = "modalBody2";
    const additionModalPar = document.createElement("p");
    const additionModalYesBtn = document.createElement("button");
    const additionModalCancelBtn = document.createElement("button");

    additionModalYesBtn.addEventListener("click", (event) => {
        event.preventDefault();
        input.value = "";
        additionModal.classList.toggle("modalHidden");
    })

    additionModalCancelBtn.addEventListener("click", (event) => {
        event.preventDefault();

        additionModal.classList.toggle("modalHidden");
        modal.classList.toggle("modalHidden");
    })
    additionModalPar.textContent = "Вы уверены, что хотите закрыть это окно? Введенные данные будут утеряны";
    additionModalYesBtn.textContent = "Закрыть";
    additionModalCancelBtn.textContent = "Отмена";
    additionModalBody.append(additionModalPar, additionModalYesBtn, additionModalCancelBtn);
    additionModal.append(additionModalBody);
    document.body.append(additionModal);
}








