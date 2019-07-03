class Events {
    toggleTheme() {

        // apply styling to body // 
        const body = document.body
        const themeButton = document.querySelector('.theme-button')

        themeButton.addEventListener('click', () => {
            body.classList.toggle('dark')
        })
    }
}

module.exports = Events