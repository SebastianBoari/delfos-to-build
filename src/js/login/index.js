import themeManager from '@managers/ThemeManager'
import userManager from '@managers/UserManager'

const landscapes = {
    light: 'https://i.imgur.com/hW3kkQS.png',
    blue: 'https://i.imgur.com/SLuE6Bv.png',
    dark: 'https://i.imgur.com/2GqBE0L.png'
}

const loginScript = async () => {
    const currentTheme = await themeManager.getTheme()
    const loginImage = document.getElementById('login_landscape')

    loginImage.src = landscapes[currentTheme]

    const loginForm_userNameLabel = document.getElementById('login-username-label')
    const loginForm_userNameInput = document.getElementById('login-username-input')
    loginForm_userNameInput.addEventListener('focus', () => {
        loginForm_userNameLabel.classList.add('box-shadow-focus');
    });
    loginForm_userNameInput.addEventListener('blur', () => {
        loginForm_userNameLabel.classList.remove('box-shadow-focus');
    });

    const loginForm_passwordLabel = document.getElementById('login-password-label')
    const loginForm_passwordInput = document.getElementById('login-password-input')
    loginForm_passwordInput.addEventListener('focus', () => {
        loginForm_passwordLabel.classList.add('box-shadow-focus')
    })
    loginForm_passwordInput.addEventListener('blur', () => {
        loginForm_passwordLabel.classList.remove('box-shadow-focus')
    })

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


    const loginForm = document.getElementById('login_form')
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        const loginUsernameInput = document.getElementById('login-username-input').value
        const loginPasswordInput = document.getElementById('login-password-input').value

        await userManager.login(loginUsernameInput, loginPasswordInput)
    })

}

export default loginScript