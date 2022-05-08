let count = 0;

let value = document.querySelector(".value");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const counter = e.currentTarget.classList;
        if (counter.contains("decrease")) {
            count--;
        } else if (counter.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
    });
});