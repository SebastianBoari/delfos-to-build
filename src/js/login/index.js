import themeManager from '@managers/ThemeManager'
import userManager from '@managers/UserManager'
import themeDock from '../theme-dock'

const landscapes = {
    light: 'https://i.imgur.com/hW3kkQS.png',
    blue: 'https://i.imgur.com/SLuE6Bv.png',
    dark: 'https://i.imgur.com/2GqBE0L.png'
}

const loginScript = async (session) => {

    // TODO: check on deploy
    if (session) {
        location.href = '/#workbench'
    }


    const currentTheme = await themeManager.getTheme()
    const loginImage = document.getElementById('login_landscape')
    loginImage.src = landscapes[currentTheme]

    const loginContainer = document.getElementById('login')
    loginContainer.classList.add(`login-${currentTheme}`)

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

    themeDock()

    const loginForm = document.getElementById('login_form')
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        const loginUsernameInput = document.getElementById('login-username-input').value
        const loginPasswordInput = document.getElementById('login-password-input').value

        await userManager.login(loginUsernameInput, loginPasswordInput)
    })

}

export default loginScript