const openModalBtn = document.querySelector(".openModalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");
const loginInput = document.querySelector("#loginInput");
const passwordInput = document.querySelector("#passwordInput");

const loginForm = document.querySelector(".loginForm");
const loginBtn = document.querySelector("#loginBtn");
openModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.toggle("modalHidden");
});

closeModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.toggle("modalHidden");
    loginInput.value = "";
    passwordInput.value = "";
});


modal.addEventListener("click", (event) => {
    event.preventDefault();
    if (loginInput.value || passwordInput.value) {
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
        loginInput.value = "";
        passwordInput.value = "";
    }

    if (event.key === "Enter") {
        modal.classList.toggle("modalHidden");
    }
});


loginBtn.addEventListener("click", () => {
    const loginSuccessModal = document.createElement("div");
    const lineDiv = document.createElement("div");
    lineDiv.classList.add("lineDiv");
    loginSuccessModal.classList.add("modal");

    const loginSuccessModalBody = document.createElement("div");
    loginSuccessModalBody.id = "modalBody2";
    const loginSuccessModalPar = document.createElement("p");
    const loginSuccessModalYesBtn = document.createElement("button");
    // const additionModalCancelBtn = document.createElement("button");

    loginSuccessModalYesBtn.addEventListener("click", (event) => {
        event.preventDefault();
        // loginInput.value = "";
        // passwordInput.value = "";
        loginSuccessModal.classList.toggle("modalHidden");
    });


    //background-color: #15ca02;
    //box-shadow: 0px 1px 3px 0px #16df02;

    //background-color: rgb(202 2 2 / 82%);
    //box-shadow: 0px 1px 3px 0px #df0202bd;



    //
    // additionModalCancelBtn.addEventListener("click", (event) => {
    //     event.preventDefault();
    //
    //     additionModal.classList.toggle("modalHidden");
    //     modal.classList.toggle("modalHidden");
    // })
    loginSuccessModalPar.textContent = "Test";
    loginSuccessModalYesBtn.textContent = "Закрыть";
    // loginSuccessModalCancelBtn.textContent = "Отмена";
    loginSuccessModalBody.append(lineDiv, loginSuccessModalPar, loginSuccessModalYesBtn);
    loginSuccessModal.append(loginSuccessModalBody);
    document.body.append(loginSuccessModal);
})



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
        loginInput.value = "";
        passwordInput.value = "";
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
