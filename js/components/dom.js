// PARTIALS
const body = document.getElementById('body');
const header =  document.getElementById('header');
const headerBtn_notif = document.getElementById('btn__notif');
const headerBtn_account = document.getElementById('btn__account');
const headerNav_panel = document.getElementById('nav__panel');
const footer = document.getElementById('footer');

// SCREENS
const sectionHome = document.getElementById('home');
const sectionLogIn = document.getElementById('logIn');
sectionLogIn.style.display = 'none';
const sectionSignUp = document.getElementById('signUp');
sectionSignUp.style.display = 'none';

// HOME BTN (on home section, redirect to LogIn screen)
const btnGetStarted = document.getElementById('btn__getStarted');
// LOGIN BTN (on LogIn screen, redirect to SignUp screen)
const btnSignUp = document.getElementById('btn__signUp');
// SIGNUP BTN (on SignUp screen, redirect to LogIn screen)
const btnSignIn = document.getElementById('btn__signIn');




//LOGIN
const logInImg = document.getElementById('logIn__img');


// SIGNUP 
const signUpImg = document.getElementById('signUp__img');
// INPUTS
const signUpform = document.getElementById('signUp__form');
const signUpName = document.getElementById('signUp__name');
const signUpPhone = document.getElementById('signUp__phone');
const signUpEmail = document.getElementById('signUp__email');
const signUpPassword = document.getElementById('signUp__password');
const signUpConfirmPassword = document.getElementById('signUp__confirmPassword');
const submitSignUp = document.getElementById('submit__signUp');
// LABELS
const formLine_signUpName = document.getElementById('form__line--signUpName');
const formLine_signUpPhone = document.getElementById('form__line--signUpPhone');
const formLine_signUpEmail = document.getElementById('form__line--signUpEmail');
const formLine_signUpPassword = document.getElementById('form__line--signUpPassword');
const formLine_signUpConfirmPassword = document.getElementById('form__line--signUpConfirmPassword');
// ICONS
const signUp_nameIcon = document.getElementById('signUp__nameIcon');
const signUp_phoneIcon = document.getElementById('signUp__phoneIcon');
const signUp_emailIcon = document.getElementById('signUp__emailIcon');
const signUp_passwordIcon = document.getElementById('signUp__passwordIcon');
const signUp_confirmPasswordIcon = document.getElementById('signUp__confirmPasswordIcon');

// NAVIGATION FLOW
// HOME EVENTS
const btnGetStartedEvent = () =>{
    btnGetStarted.addEventListener('click', () => {
        // HIDE
        header.style.display = 'none';
        footer.style.display = 'none';
        sectionHome.style.display = 'none';
        // SHOW
        sectionLogIn.style.display = 'grid';
    });
};


// LOGIN EVENTS
const btnSignUpEvent = () => {
    btnSignUp.addEventListener('click', () => {
        // HIDE
        header.style.display = 'none';
        footer.style.display = 'none';
        sectionHome.style.display = 'none';
        sectionLogIn.style.display = 'none';
        // SHOW
        sectionSignUp.style.display = 'grid';
    });
};


// SIGNUP EVENTS
const btnSignInEvent = () => {
    btnSignIn.addEventListener('click', () => {
        // HIDE
        header.style.display = 'none';
        footer.style.display = 'none';
        sectionHome.style.display = 'none';
        sectionSignUp.style.display = 'none';
        // SHOW
        sectionLogIn.style.display = 'grid';
    });
};






