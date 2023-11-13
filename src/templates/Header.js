
const Header = async () => {
    const view = `
    <header class="header header-light">
        
        <nav class="header_navbar">
            <figure class="header_navbar-brand">
                <a class="brand_link">
                    <img class="brand_image" src="" alt="Logo de DelfOS.">
                </a>
            </figure>

            <div class="header_navbar-buttons">
                <button class="toggle_buttons">
                    <img class="toggle_buttons-icon" src="" alt="">
                </button>

                <div class="buttons_panel display-none">
                    <button id="login_button">Log In</button>
                    <button id="logout_button">Log Out</button>
                    
                    <button id="config_button">
                        <img class="config_button-icon" src="" alt="">
                    </button>
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
