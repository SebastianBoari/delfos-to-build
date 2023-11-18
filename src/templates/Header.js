import ConfigIcon from "@icons/ConfigIcon"

const buttonsOutOfSession = () => {
    const view = `
    <ul class="options">
        <li class="options-item"><a href="/login" id="login_button">Log In</a></li>
        <li class="options-item"><a href="/register" id="register_button">Register</a></li>
    </ul>
    `
    return view
}

const buttonsOnSession = (session) => {
    const view = `
    <ul class="options">
        <h3 class="user-name">Hola ${JSON.parse(session).name}!</h3>
        <li class="options-item"><a href="/" id="logout_button">Log out</a></li>
    </ul>
    `
    return view
}


const Header = async (session) => {

    const view = `
    <header class="header header-light">
    
        <nav class="header_navbar">
            <div class="container-xl">
                <figure class="header_navbar-brand">
                    <a href="/" class="brand_link">
                        <img class="brand_image" src="https://i.imgur.com/ldRlR3A.png" alt="Logo de DelfOS.">
                    </a>
                </figure>

                <button id="login">Log In</button>

                <div class="header_navbar-buttons">
                    <p class="user-email">${session ? JSON.parse(session).email : ''}</p>
                    <button id="toggle_buttons">
                    </button>

                    <div id="toggle_buttons-panel" class="display-none">
                        ${session ? buttonsOnSession(session) : buttonsOutOfSession()}

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
