function toggleTheme() {
    let element = document.body;
    element.classList.toggle("dark-theme");

    if (document.getElementById("theme-button").className == "lni lni-sun") {
        document.getElementById("theme-button").className = "lni lni-night";
    } else {
        document.getElementById("theme-button").className = "lni lni-sun";
    }

}