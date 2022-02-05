const panels = document.querySelectorAll(".panel");

function openClass() {
    this.classList.toggle("open");
}

panels.forEach(panel => panel.addEventListener("click", openClass));