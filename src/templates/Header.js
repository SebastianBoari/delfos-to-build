const Header = async () => {
    const view = `
    <div class="header__theme--light">
        <nav class="header__nav">
            <div class="container-xl">
                <figure class="nav__figure">
                    <a class="figure__link" href="#">
                        <img class="figure__img" src="" alt="Logo de DelfOS.">
                    </a>
                </figure>
                <div class="nav__buttons">
                    <div class="buttons__panels">
                        <button id="btn__account"><img id="headerUserIcon" class="buttons__img userIcon"
                            src="" alt="Opciones de cuenta"></button>
                        <div id="navAccount__panel" class="display-none">
                            <button id="panelBtn__logIn">Log In</button>
                            <button id="panelBtn__logOut">Log Out</button>
                            <button id="panelBtn__Config"><img src="" alt=""></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div id="header__welcome">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    return view
}

export default Header
