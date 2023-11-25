const buttonsOnSession = (session) => {
    const view = `
    <div class="options">
        <div class="options_greeting">
            <h3 class="options_greeting-title">Hi ${JSON.parse(session).name}</h3>
        </div>

        <div class="options_buttons">
            <button class="options_buttons-button" id="help_button">Help</button>
            <button class="options_buttons-button" id="config_button">Options</button>
            <button class="options_buttons-button" id="logout_button">Log out</button>
        </div>
    </div>
    `
    return view
}

const buttonsOutOfSession = () => {
    const view = `
    <div class="options">
        <div class="options_greeting">
            <h3 class="options_greeting-title">Welcome</h3>
        </div>

        <div class="options_buttons">
            <a href="/login" class="options_buttons-button" id="login_button">Log In</a>
            <a href="/register" class="options_buttons-button" id="register_button">Register</a>
        </div>
    </div>
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
                        <img class="brand_image" src="https://i.imgur.com/mJNJKZx.png" alt="Logo de DelfOS.">
                    </a>
                </figure>

                <button id="login">Log In</button>

                <div class="header_navbar-buttons">
                    <p class="user-email">${session ? JSON.parse(session).email : ''}</p>
                    <button id="toggle_buttons">
                    </button>

                    <div id="toggle_buttons-panel" class="display-none">
                        ${session ? buttonsOnSession(session) : buttonsOutOfSession()}
                    </div>
                </div>
            </div>
        </nav>
        
        <div id="header_banner">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="swiper_brand-center">
                            <img class="swiper_brand-image" src="https://i.imgur.com/mJNJKZx.png" alt="Logo de DelfOS."> 
                        </div>

                        <img src="https://i.imgur.com/jKHWLIT.png" alt="landscape of greece">
                    </div>

                    <div class="swiper-slide">
                        <div class="swiper_brand">
                            <h3 class="swiper_brand-title">Customizable experience</h3>
                            
                            <img class="swiper_brand-image"  src="https://i.imgur.com/mJNJKZx.png" alt="Logo de DelfOS.">
                        </div>

                        <img src="https://i.imgur.com/UX4HkUU.png"  alt="landscape of greece">
                    </div>

                    <div class="swiper-slide">
                        <div class="swiper_brand">
                            <h3 class="swiper_brand-title">Let’s build habits</h3>

                            <img class="swiper_brand-image"  src="https://i.imgur.com/mJNJKZx.png" alt="Logo de DelfOS.">
                        </div>
                        
                        <img src="https://i.imgur.com/ifJwgTE.png" alt="landscape of greece">
                    </div>

                    <div class="swiper-slide">
                        <div class="swiper_brand">
                            <h3 class="swiper_brand-title">Everywhere you go.</h3>

                            <img class="swiper_brand-image" src="https://i.imgur.com/mJNJKZx.png" alt="Logo de DelfOS.">
                        </div>

                        <img src="https://i.imgur.com/HyLjahW.png" alt="landscape of greece">
                    </div>
                </div>
            </div>
        </div>
    </header>
    `
    return view
}

export default Header
