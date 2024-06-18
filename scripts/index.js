const sidebarBtn = document.querySelector(".sidebarBtn");

const sidebarContainer = document.querySelector(".sidebarContainer");
const closeSidebarBtn = document.querySelector(".closeSidebar");

sidebarBtn.addEventListener("click", () => {
  sidebarContainer.classList.add("open");
});

closeSidebarBtn.addEventListener("click", () => {
  sidebarContainer.classList.remove("open");
});
