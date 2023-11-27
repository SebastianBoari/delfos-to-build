import themeManager from '@managers/ThemeManager'

const themeDock = () => {
    const themeDock_sunInput = document.getElementById('sun-input')
    const themeDock_sunIcon = document.getElementById('sun-icon')
    themeDock_sunInput.addEventListener('change', async () => {
        themeDock_sunIcon.classList.add('themeDock_sunIcon-active')
        themeDock_sunsetIcon.classList.remove('themeDock_sunsetIcon-active')
        themeDock_moonIcon.classList.remove('themeDock_moonIcon-active')

        await themeManager.setTheme('light')
    })

    const themeDock_sunsetInput = document.getElementById('sunset-input')
    const themeDock_sunsetIcon = document.getElementById('sunset-icon')
    themeDock_sunsetInput.addEventListener('change', async () => {
        themeDock_sunsetIcon.classList.add('themeDock_sunsetIcon-active')
        themeDock_sunIcon.classList.remove('themeDock_sunIcon-active')
        themeDock_moonIcon.classList.remove('themeDock_moonIcon-active')

        await themeManager.setTheme('blue')
    })

    const themeDock_moonInput = document.getElementById('moon-input')
    const themeDock_moonIcon = document.getElementById('moon-icon')
    themeDock_moonInput.addEventListener('change', async () => {
        themeDock_moonIcon.classList.add('themeDock_moonIcon-active')
        themeDock_sunIcon.classList.remove('themeDock_sunIcon-active')
        themeDock_sunsetIcon.classList.remove('themeDock_sunsetIcon-active')

        await themeManager.setTheme('dark')
    })
}

export default themeDock