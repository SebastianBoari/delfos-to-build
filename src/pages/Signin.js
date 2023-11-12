
const SignIn = () => {
    const view = `
    <section id="signUp" class="signUp__theme--light animate__animated animate__fadeIn animate__slow">
        <div class="container-signUp">
            <figure id="signUp__img" class="signUpImg__theme--light">
            </figure>
            <article class="signUp__article">
                <h2 class="signUp__title">PANORAMA</h2>

                <div class="signUp__panel">
                    <h4 class="panel__title">Sign Up</h4>
                    <form id="signUp__form">
                        <label class="form__line" id="form__line--signUpName">
                            <img src="./assets/icons/user-icon-default.png" alt="User form icon"
                            id="signUp__nameIcon">
                            <input class="form__input" type="text" name="userName" id="signUp__name"
                             placeholder="Enter your name">
                        </label>

                        <label class="form__line" id="form__line--signUpPhone">
                            <img src="./assets/icons/phone-icon-default.png" alt="User form icon"
                            id="signUp__phoneIcon">
                            <input class="form__input" type="number" name="userPhone" id="signUp__phone"
                            placeholder="Enter your phone number">
                        </label>

                        <label class="form__line" id="form__line--signUpEmail">
                            <img src="./assets/icons/email-icon-default.png" alt="User form icon"
                            id="signUp__emailIcon">
                            <input class="form__input" type="email" name="userEmail" id="signUp__email"
                            placeholder="Enter your mail">
                        </label>

                        <label class="form__line" id="form__line--signUpPassword">
                            <img src="./assets/icons/password-icon-default.png" alt="Password form icon"
                            id="signUp__passwordIcon">
                            <input class="form__input" type="password" name="userPassword" id="signUp__password"
                            placeholder="Create password">
                        </label>

                        <label class="form__line" id="form__line--signUpConfirmPassword">
                            <img src="./assets/icons/password-icon-default.png" alt="Password form icon"
                            id="signUp__confirmPasswordIcon">
                            <input class="form__input" type="password" name="userConfirmPassword"
                            id="signUp__confirmPassword" placeholder="Confirm password">
                        </label>

                        <div class="form__buttons">
                            <a class="buttons__forgotPsw" href="#">Forgot password?</a>
                            <input type="submit" value="Continuar" id="submit__signUp">
                        </div>
                    </form>
                </div>

                <div class="signUp__options">
                    <div class="themeDock">
                        <label class="themeDock__label">
                            <img class="label__light--midnightblue" src="./assets/icons/light-dock.svg"
                            alt="Light Theme">
                            <input type="radio" name="theme" class="dock__input--light">
                        </label>

                        <label class="themeDock__label">
                            <img class="label__light--midnightblue" src="./assets/icons/midnight-dock.svg"
                            alt="Midnightblue Theme">
                            <input type="radio" name="theme" class="dock__input--midnightblue">
                        </label>

                        <label class="themeDock__label">
                            <img class="label__light--dark" src="./assets/icons/dark-dock.svg" alt="Dark Theme">
                            <input type="radio" name="theme" class="dock__input--dark">
                        </label>
                    </div>

                    <p class="options__signIn">Don't have an account? <button id="btn__signIn">Sign In</button></p>
                </div>
            </article>
        </div>
    </section>
    `
    return view
}

export default SignIn
