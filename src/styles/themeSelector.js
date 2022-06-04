
export function toggleThemeClass(theme) {
    const regex = new RegExp(/(.+-theme)(?!\S)/g);
    var body = document.getElementsByTagName("body")[0];

    if (body.className.match(regex)) {
        body.className = body.className.replace(regex, '')
    }
    body.classList.add(theme + "-theme");
}