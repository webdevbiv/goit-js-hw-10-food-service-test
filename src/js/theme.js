
const refs = {
    themeSwitch : document.getElementById('theme-switch-toggle'),
    themeBody : document.querySelector('body'),
}

const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
}

const theme = localStorage.getItem('theme')

// if (theme === null) {
//     refs.themeBody.classList.add('light-theme')
//     refs.themeSwitch.checked = false
// }
if (theme === 'dark-theme') {
    refs.themeBody.classList.add('dark-theme')
    refs.themeSwitch.checked = true
}
// if (theme === 'light-theme') {
//     refs.themeBody.classList.add('light-theme')
//     refs.themeSwitch.checked = false
// }

console.log(theme);
refs.themeSwitch.addEventListener('change', (e) => {
    refs.themeBody.classList.toggle('dark-theme')
    if (refs.themeSwitch.checked) {
        localStorage.removeItem('theme')
        localStorage.setItem('theme', Theme.DARK)
    }
    if (!refs.themeSwitch.checked) {
        localStorage.removeItem('theme')
        localStorage.setItem('theme', Theme.LIGHT)
    }
    // if (theme === 'light-theme') {
    //     localStorage.removeItem('theme')
    //     localStorage.setItem('theme', Theme.DARK)
    // }

    // if (refs.themeSwitch.checked) {
    //     refs.themeBody.classList.add('dark-theme')
    // } else {
    //     refs.themeBody.classList.add('light-theme')
    // }
})


// console.log(`connected`)
// import switch from "./refs.js"
// console.log(themeBody);
// console.log(typeof themeSwitch);
// console.log(Object.getPrototypeOf(themeSwitch));

// let localTheme = localStorage.getItem('local-theme')
// themeBody.classList.add(localTheme)
// let localSwitch = localStorage.getItem('switch')
// themeSwitch.checked = localSwitch


// themeSwitch.addEventListener('click', (e) => {
//     // console.log(themeSwitch.checked);
//     themeSwitchPosition()
//     themeToggle()
//     themeDefault()
// })

// function themeSwitchPosition() {
//     themeSwitch.checked ? localStorage.setItem('switch', 'true') : localStorage.removeItem('switch')
// }

// function themeToggle() {
//     themeBody.classList.toggle('dark-theme')
// }
// function themeDefault() {
//     localStorage.getItem('local-theme') ? localStorage.removeItem('local-theme') : localStorage.setItem('local-theme', 'dark-theme')
// }
console.log(`win`);