const Header = async () => {
    const view = `
    <div class="header__theme--light">
        <nav class="header__nav">
            <div class="container-xl">
                <figure class="nav__figure">
                    <a class="figure__link" href="#">
                        <img class="figure__img" src="./assets/icons/tobuild-logo-v1.png" alt="Logo de DelfOS.">
                    </a>
                </figure>
                <div class="nav__buttons">
                    <div class="buttons__panels">
                        <button id="btn__account"><img id="headerUserIcon" class="buttons__img userIcon"
                            src="./assets/icons/account-circle.svg" alt="Opciones de cuenta"></button>
                        <div id="navAccount__panel" class="display-none">
                            <button id="panelBtn__logIn">Log In</button>
                            <button id="panelBtn__logOut">Log Out</button>
                            <button id="panelBtn__Config"><img src="./assets/icons/config-icon.svg" alt=""></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div id="header__welcome">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./assets/bg-img/home-banner-1.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/bg-img/home-banner-2.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/bg-img/home-banner-3.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/bg-img/home-banner-4.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    return view
}

export default Header
