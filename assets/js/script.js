function toggleTheme() {
    let body = document.querySelector('body');
    body.classList.toggle('dark-mode');

    let button = document.querySelector('[id^="toggleButton"]');
    let buttonActive = button.id.includes("inactive");

    // active = lightmode -> darkmode
    // inactive = darkmode -> lightmode
    if (!buttonActive) {
        button.id = "toggleButton inactive";
        button.src = "assets/img/lightmode.svg";
    } else {
        button.id = "toggleButton active";
        button.src = "assets/img/darkmode.svg";
    }
}


let toggleBttnVariable = document.querySelector('[id^="toggleButton"]');
toggleBttnVariable.onclick = toggleTheme;
