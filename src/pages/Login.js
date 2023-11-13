const Login = async () => {
    const view = `
    <section id="logIn" class="logIn__theme--light animate__animated animate__fadeIn animate__slow">
        <div class="container-logIn">
            <figure id="logIn__img" class="logInImg__theme--light">

            </figure>

            <article class="logIn__article">
                <h2 class="logIn__title">PANORAMA</h2>

                <div class="logIn__panel">
                    <h4 class="panel__title">Log In</h4>
                    <form id="logIn__form">
                        <label class="form__line" id="form__line--logInUser">
                            <img id="logIn__userIcon" src="./assets/icons/user-icon-default.png" alt="User form icon">
                            <input class="form__input" type="text" name="userName" id="logIn__user" placeholder="username phone or email">
                        </label>
                        
                        <label class="form__line" id="form__line--logInPassword">
                            <img id="logIn__passwordIcon" src="./assets/icons/password-icon-default.png" alt="Password form icon">
                            <input class="form__input" type="password" name="userPassword" id="logIn__psw" placeholder="password">
                        </label>
                        
                        <div class="form__buttons">
                            <a class="buttons__forgotPsw" href="#">Forgot password?</a>
                            <input type="submit" value="Continuar" id="submit__logIn">
                        </div>
                    </form>
                </div>

                <div class="logIn__options">
                    <div class="themeDock">
                        <label class="themeDock__label">
                            <img class="label__light--midnightblue" src="./assets/icons/light-dock.svg" alt="Light Theme">
                            <input type="radio" name="theme" class="dock__input--light">
                        </label>
                        
                        <label class="themeDock__label">
                            <img class="label__light--midnightblue" src="./assets/icons/midnight-dock.svg" alt="Midnightblue Theme">
                            <input type="radio" name="theme" class="dock__input--midnightblue">
                        </label>

                        <label class="themeDock__label">
                            <img class="label__light--dark" src="./assets/icons/dark-dock.svg" alt="Dark Theme">
                            <input type="radio" name="theme" class="dock__input--dark">
                        </label>
                    </div>

                    <p class="options__signUp">Don't have an account? <button id="btn__signUp">Sign Up</button></p>
                </div>
            </article>
        </div>
    </section>
    `
    return view
}

export default Login
