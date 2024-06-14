const dialogWindow = document.querySelector(".dialogWindow");
const openDialogWindowBtn = document.querySelector("button");
const sendInfoBtn = document.querySelector(".sendInfoBtn");
const usernameInput = document.querySelector("#username");
const cuponInput = document.querySelector("#cupon");
function showDialog(event) {
    if (dialogWindow) {
        const dialog = document.querySelector(".dialogWindow.open");
        if (dialog) {
            closeDialog(event);
        }
        dialogWindow.classList.add("open");
    }
}

function closeDialogEscape(event) {
    if (dialogWindow) {
        if (event.key === "Escape") {
            dialogWindow.classList.remove("open");
        }
    }
}

function closeDialog(event) {
    event.preventDefault();
    if (dialogWindow) {
        dialogWindow.classList.remove("open");
        usernameInput.value = "";
        cuponInput.value = "";
    }
}


openDialogWindowBtn.addEventListener("click", showDialog);
sendInfoBtn.addEventListener("click", closeDialog);

window.addEventListener("keydown", closeDialogEscape);