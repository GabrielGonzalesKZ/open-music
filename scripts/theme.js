const buttonDark = document.querySelector(".btt__dark")
const darkBody = document.body
const theme = ":root.dark__mode"
let darkMode;

function themeDark() {
    darkMode = !darkMode;
    darkBody.classList.toggle("dark__mode")
    localStorage.setItem(theme, darkMode)
}

buttonDark.addEventListener("click", themeDark)
function themePreferenceAnalysis() {
    darkMode = JSON.parse(localStorage.getItem(theme));
    if (darkMode) {
        darkBody.classList.toggle("dark__mode")
    }
}
themePreferenceAnalysis();