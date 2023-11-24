import 'swiper/css'
import UserIcon from "@icons/UserIcon"
import userManager from '@managers/UserManager'

const headerScript = async (session) => {
    console.log('header')

    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    const toggleButtons = document.getElementById('toggle_buttons')
    toggleButtons.innerHTML = UserIcon(session)

    const toggleButtonsPanel = document.getElementById('toggle_buttons-panel')

    toggleButtons.addEventListener('click', () => {
        toggleButtonsPanel.classList.toggle('display-none')
        toggleButtons.classList.toggle('focused')

        const logoutButton = document.getElementById('logout_button')

        if (logoutButton) {
            logoutButton.addEventListener('click', async () => {
                await userManager.destroySession()
            })
        }

        window.addEventListener('click', (event) => {
            if (event.target !== toggleButtonsPanel && !toggleButtonsPanel.contains(event.target) && event.target !== toggleButtons && !toggleButtons.contains(event.target)) {
                if (!toggleButtonsPanel.classList.contains('display-none')) {
                    toggleButtonsPanel.classList.toggle('display-none')
                    toggleButtons.classList.toggle('focused')
                }
            }
        })
    })


    // TEST TEST TEST TEST
    const login = document.getElementById('login')
    login.addEventListener('click', async () => {
        await userManager.login('seba@gmail.com', 'admin123')
    })


}

export default headerScript