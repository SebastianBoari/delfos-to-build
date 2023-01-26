// PARTIALS
const header =  document.getElementById('header');
const footer = document.getElementById('footer');
// SCREENS
const sectionHome = document.getElementById('home');
const sectionLogIn = document.getElementById('logIn');
sectionLogIn.style.display = 'none';
const sectionSignUp = document.getElementById('signUp');
sectionSignUp.style.display = 'none';




// HOME DOM
const btnGetStarted = document.getElementById('btn__getStarted');
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

// LOGIN DOM
const btnSignUp = document.getElementById('btn__signUp');
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

// SIGNUP DOM
const btnSignIn = document.getElementById('btn__signIn');
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