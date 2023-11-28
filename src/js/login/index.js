import themeManager from '@managers/ThemeManager'
import userManager from '@managers/UserManager'
import themeDock from '../theme-dock'

const loginScript = async (session) => {

    // TODO: check on deploy
    if (session) {
        location.href = '/#workbench'
    }

    const landscapes = {
        light: 'https://i.imgur.com/hW3kkQS.png',
        blue: 'https://i.imgur.com/SLuE6Bv.png',
        dark: 'https://i.imgur.com/2GqBE0L.png'
    }

    const currentTheme = await themeManager.getTheme()
    const loginImage = document.getElementById('login_landscape')
    loginImage.src = landscapes[currentTheme]

    const loginContainer = document.getElementById('login')
    loginContainer.classList.add(`login-${currentTheme}`)


    const setListeners = (labelId, inputId) => {
        const label = document.getElementById(labelId)
        const input = document.getElementById(inputId)

        input.addEventListener('focus', () => {
            label.classList.add('box-shadow-focus')
        })

        input.addEventListener('blur', () => {
            label.classList.remove('box-shadow-focus')
        })
    }

    setListeners('login-username-label', 'login-username-input')
    setListeners('login-password-label', 'login-password-input')

    themeDock()

    const loginForm = document.getElementById('login_form')
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        const loginUsernameInput = document.getElementById('login-username-input').value
        const loginPasswordInput = document.getElementById('login-password-input').value

        const loginAction = await userManager.login(loginUsernameInput, loginPasswordInput)

        if (loginAction === 'user not exists') {
            const label = document.getElementById('login-username-label')
            label.classList.add('wrong')
            label.innerHTML += '<p class="login-action">User not exists</p>'
        }

        if (loginAction === 'wrong password') {
            const label = document.getElementById('login-password-label')
            label.classList.add('wrong')
            label.innerHTML += '<p class="login-action">Wrong password</p>'
        }
    })

}

export default loginScript