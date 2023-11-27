import ThemeDock from '@templates/ThemeDock'
import UserFormIcon from '@icons/UserFormIcon'
import PasswordFormIcon from '@icons/PasswordFormIcon'
import UserPhoneIcon from '@icons/UserPhoneIcon'
import UserMailIcon from '@icons/UserMailIcon'

const Register = async () => {

    const view = `
    <article id="register">
        <section class="register_container">
            <img id="register_landscape" src="" alt="Greek landscape"/>

            <div class="register_content">
                <h2 class="register_content-title">PANORAMA</h2>
                
                <div class="register_content-form">
                    <h4 class="register_content-form-title">Register</h4>

                    <form id="register_form">
                        <label class="register_form-label" id="register-firstname-label">
                            ${UserFormIcon()}
                            <input class="register_form-input" id="register-firstname-input" type="text" name="first-name" placeholder="first name">
                        </label>

                        <label class="register_form-label" id="register-lastname-label">
                            ${UserFormIcon()}
                            <input class="register_form-input" id="register-lastname-input" type="text" name="last-name" placeholder="last name">
                        </label>
                
                        <label class="register_form-label" id="register-phone-label">
                            ${UserPhoneIcon()}
                            <input class="register_form-input" id="register-phone-input" type="number" name="phone-number" placeholder="phone number">
                        </label>

                        <label class="register_form-label" id="register-email-label">
                            ${UserMailIcon()}
                            <input class="register_form-input" id="register-email-input" type="email" name="email" placeholder="email">
                        </label>

                        <label class="register_form-label" id="register-password-label">
                            ${PasswordFormIcon()}
                            <input class="register_form-input" id="register-password-input" type="password" name="password" placeholder="password">
                        </label>

                        <label class="register_form-label" id="register-confirm-password-label">
                            ${PasswordFormIcon()}
                            <input class="register_form-input" id="register-confirm-password-input" type="password" name="confirm-password" placeholder="confirm password">
                        </label>

                
                        <div class="register_form-actions">
                            <input class="register_form-submit" type="submit" value="Continue" />
                        </div>
                    </form> 
                </div>

                <div class="register_login">
                    ${ThemeDock()}
                    <p class="register_login-text">Are you already registered? <a class="register_login-link" href="/#login">log in</a></p>
                </div>
            </div>
        </section>
    </article>
    `
    return view
}

export default Register
