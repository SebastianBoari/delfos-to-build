import ConfigIcon from "@icons/ConfigIcon"

const Header = async () => {
    const view = `
    <header class="header header-light">
    
        <nav class="header_navbar">
            <div class="container-xl">
                <figure class="header_navbar-brand">
                    <a class="brand_link">
                        <img class="brand_image" src="https://i.imgur.com/ldRlR3A.png" alt="Logo de DelfOS.">
                    </a>
                </figure>

                <div class="header_navbar-buttons">
                    <button id="toggle_buttons">
                    </button>

                    <div id="toggle_buttons-panel" class="display-none">
                        <button id="login_button">Log In</button>
                        <button id="register_button">Register</button>
                        
                        <button id="config_button">
                            ${ConfigIcon()}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        
        <div id="header_banner">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="https://i.imgur.com/AWSiYxy.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://i.imgur.com/lJbEBaT.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://i.imgur.com/lSpBMkO.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://i.imgur.com/oeH7XsJ.jpg">
                    </div>
                </div>
            </div>
        </div>
    </header>
    `
    return view
}

export default Header
