const home = document.querySelector("#home .score");
const guest = document.querySelector("#guest .score");

function changeCounter(n, counter) {
    const curr = Number(counter.textContent);
    counter.textContent = curr + n;
    highlight();
}

function highlight() {
    if (Number(home.textContent) > Number(guest.textContent)) {
        home.classList.toggle("leader", true);
        guest.classList.toggle("leader", false);
    } else if (Number(home.textContent) < Number(guest.textContent)) {
        home.classList.toggle("leader", false);
        guest.classList.toggle("leader", true);
    } else {
        home.classList.toggle("leader", false);
        guest.classList.toggle("leader", false);
    }
}

function reset() {
    home.textContent = 0;
    guest.textContent = 0;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "r") {
        reset();
    }
});
