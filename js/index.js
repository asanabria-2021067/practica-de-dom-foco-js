const luz = document.getElementById("luz");
const encenderBtn = document.getElementById("encenderBtn");
const apagarBtn = document.getElementById("apagarBtn");
const body = document.body
encenderBtn.addEventListener("click", () => {
    luz.style.backgroundColor = "yellow";
    body.classList.remove("cuarto");
    body.classList.add("light");
});

apagarBtn.addEventListener("click", () => {
    luz.style.backgroundColor = "#ccc";
    body.classList.remove("light");
    body.classList.add("cuarto");
});
