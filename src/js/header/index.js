import Swiper from 'swiper'
import 'swiper/css'

const headerScript = async () => {
    const swiper = new Swiper(".mySwiper", {
        autoplay: true,
    })
    console.log('header')
}

export default headerScript