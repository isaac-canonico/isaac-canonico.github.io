class Events {
    toggleTheme() {

        const body = document.body
        const themeButton = document.querySelector('.theme-button')

        themeButton.addEventListener('click', () => {
                
        body.classList.toggle('dark')
    
       
        })
    }
}

module.exports = Events