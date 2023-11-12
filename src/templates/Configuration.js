const Configuration = () => {
    const view = `
    <section id="configuration" class="display-none">
        <article class="configuration__user">
            <figure class="configUser__figure">
                <img id="configUserIcon" class="figure__img userIcon" src="./assets/icons/account-circle.svg"
                alt="">
            </figure>

            <form id="configUser__form">
                <label class="form__line">
                    <img src="./assets/icons/user-icon-default.png" alt="User form icon">
                    <input class="form__input" type="text" name="userName" id="userNameConfig">
                </label>

                <label class="form__line">
                    <img src="./assets/icons/phone-icon-default.png" alt="User form icon">
                    <input class="form__input" type="number" name="userPhone" id="userPhoneConfig">
                </label>
                
                <label class="form__line">
                 <img src="./assets/icons/email-icon-default.png" alt="User form icon">
                    <input class="form__input" type="email" name="userEmail" id="userEmailConfig">
                </label>
                
                <label class="form__line">
                    <img src="./assets/icons/password-icon-default.png" alt="Password form icon">
                    <input class="form__input" type="password" name="userPassword" id="userPasswordConfig">
                </label>
                
                <div class="form__buttons">
                    <input id="submit__configUser" type="submit" value="Send changes">
                </div>
            </form>
        </article>
 
        <article class="configuration__profileImg">
            <h4 class="profileImge__title">Choose a new profile image:</h4>
            <div class="profileImg__options">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op1.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op2.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op3.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op4.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op5.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op6.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op7.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op8.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op9.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op10.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op11.png" alt="">
                <img class="profileImgOptions" src="./assets/profile-icons/icon-profile-op12.png" alt="">
            </div>
        </article>
    </section>
    `

    return view
}

export default Configuration
