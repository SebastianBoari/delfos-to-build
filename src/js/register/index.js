import userManager from '@managers/UserManager'
import themeManager from '@managers/ThemeManager'
import themeDock from '../theme-dock'

const registerScript = async () => {
    //TODO: check on deploy
    if (session) {
        location.href = '/#workbench'
    }

    const landscapes = {
        light: 'https://i.imgur.com/hW3kkQS.png',
        blue: 'https://i.imgur.com/SLuE6Bv.png',
        dark: 'https://i.imgur.com/2GqBE0L.png'
    }

    const currentTheme = await themeManager.getTheme()
    const registerImage = document.getElementById('register_landscape')
    registerImage.src = landscapes[currentTheme]

    const registerContainer = document.getElementById('register')
    registerContainer.classList.add(`register-${currentTheme}`)

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

    setListeners('register-firstname-label', 'register-firstname-input')
    setListeners('register-lastname-label', 'register-lastname-input')
    setListeners('register-phone-label', 'register-phone-input')
    setListeners('register-email-label', 'register-email-input')
    setListeners('register-password-label', 'register-password-input')
    setListeners('register-confirm-password-label', 'register-confirm-password-input')

    themeDock()

    const registerForm = document.getElementById('register_form')
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        const fisrt_name = document.getElementById('register-firstname-input').value
        const last_name = document.getElementById('register-lastname-input').value
        const phone_number = document.getElementById('register-phone-input').value
        const email = document.getElementById('register-email-input').value
        const password = document.getElementById('register-password-input').value
        const confirm_password = document.getElementById('register-confirm-password-input').value

        if (password === confirm_password) {
            const newUser = {
                firstName: fisrt_name,
                lastName: last_name,
                phoneNumber: phone_number,
                email: email,
                password: password,
            }
            await userManager.createUser(newUser)

            registerForm.reset()

            location.href = '/'
        }
    })

}

export default registerScript