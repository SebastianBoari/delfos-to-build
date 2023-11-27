import UserFormIcon from '@icons/UserFormIcon'
import PasswordFormIcon from '@icons/PasswordFormIcon'
import ThemeDock from '@templates/ThemeDock'

const Login = async () => {
    const view = `
        <article id="login">
            <section class="login_container">    
                <img id="login_landscape" src="" alt="Greek landscape"/>
            
                <div class="login_content">
                    <h2 class="login_content-title">PANORAMA</h2>

                    <div class="login_content-form">
                        <h4 class="login_content-form-title">Log In</h4>

                        <form id="login_form">
                            <label class="login_form-label" id="login-username-label">
                                ${UserFormIcon()}
                                <input class="login_form-input" id="login-username-input" type="text" name="userName" placeholder="email">
                            </label>
                            
                            <label class="login_form-label" id="login-password-label">
                                ${PasswordFormIcon()}
                                <input class="login_form-input" id="login-password-input" type="password" name="userPassword" placeholder="password">
                            </label>
                            
                            <div class="login_form-actions">
                                <a class="login_form-forgotpassword" href="#">Forgot password?</a>
                                <input class="login_form-submit" type="submit" value="Continue" />
                            </div>
                        </form>
                    </div>

                    <div class="login_register">
                        ${ThemeDock()}
                        <p class="login_register-text">Don't have an account? <a class="login_register-link" href="/#register">register</a></p>
                    </div>
                </div>
        </section>
    </article>
    `
    return view
}

export default Login
