function toggleTheme() {
    let element = document.body;
    let button = document.getElementById("theme-button");
    element.classList.toggle("dark-theme");

    // Toggle icon
    if (button.className == "lni lni-sun") {
        button.className = "lni lni-night";
    } else {
        button.className = "lni lni-sun";
    }
}