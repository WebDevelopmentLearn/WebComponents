const dialogWindow = document.querySelector(".dialogWindow");
const openDialogWindowBtn = document.querySelector("button");

function showDialog(event) {
    dialogWindow.classList.remove("dialogWindowHidden");
}

function closeDialog(event) {
    if (event.key === "Escape") {
        dialogWindow.classList.add("dialogWindowHidden");
    }
}

openDialogWindowBtn.addEventListener("click", showDialog);

window.addEventListener("keydown", closeDialog);