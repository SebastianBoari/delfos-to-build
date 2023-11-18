import Swiper from 'swiper'
import 'swiper/css'
import UserIcon from "@icons/UserIcon"

const headerScript = async (session) => {
    console.log('header')

    const swiper = new Swiper(".mySwiper", {
        autoplay: true,
    })

    const toggleButtons = document.getElementById('toggle_buttons')
    toggleButtons.innerHTML = UserIcon(session)

    const toggleButtonsPanel = document.getElementById('toggle_buttons-panel')

    toggleButtons.addEventListener('click', () => {
        toggleButtonsPanel.classList.toggle('display-none')
        toggleButtons.classList.toggle('focused')

        window.addEventListener('click', (event) => {
            if (event.target !== toggleButtonsPanel && !toggleButtonsPanel.contains(event.target) && event.target !== toggleButtons && !toggleButtons.contains(event.target)) {
                if (!toggleButtonsPanel.classList.contains('display-none')) {
                    toggleButtonsPanel.classList.toggle('display-none')
                }
            }
        })
    })



}

export default headerScript