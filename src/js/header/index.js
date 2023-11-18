import Swiper from 'swiper'
import 'swiper/css'

import userManager from '@managers/UserManager'

import UserIcon from "@icons/UserIcon"

const headerScript = async (session) => {
    console.log('header')

    const swiper = new Swiper(".mySwiper", {
        autoplay: true,
    })

    const headerUserButton = document.getElementById('header-user-button')
    headerUserButton.innerHTML = UserIcon(session)
}

export default headerScript