
import actions from '../reducers/boundActionCreators';

export default function setTheme(theme) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");

    if (theme) {
        // save new theme
        localStorage.setItem("theme", theme);
        actions.updateTheme(theme);

        // use new theme
        toggleThemeClass(theme);

    } else {

        // use theme from local storage if present
        if (currentTheme) {
            toggleThemeClass(currentTheme);
            actions.updateTheme(currentTheme);

        // use dark theme based on browser default
        } else if (prefersDarkScheme) {
            toggleThemeClass('dark');
            //save theme
            localStorage.setItem("theme", 'dark');
            actions.updateTheme('dark');

        // use light theme
        } else {
            toggleThemeClass('light');
            //save theme
            localStorage.setItem("theme", 'light');
            actions.updateTheme('light');
        }
    }
}

function toggleThemeClass(theme) {
    const regex = new RegExp(/(.+-theme)(?!\S)/g);
    var body = document.getElementsByTagName("body")[0];

    if (body.className.match(regex)) {
        body.className = body.className.replace(regex, '')
    }
    body.classList.add(theme + "-theme");
}