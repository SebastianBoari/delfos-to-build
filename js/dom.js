// PARTIALS

// Body
const body = document.getElementById('body');

// Header
const header =  document.getElementById('header');
const headerWelcome = document.getElementById('header__welcome');
const headerBtn_notif = document.getElementById('btn__notif');
headerBtn_notif.style.display = 'none';  
const headerBtn_account = document.getElementById('btn__account');

const headerNavAccount_panel = document.getElementById('navAccount__panel');
const accountPanelBtn_logIn = document.getElementById('panelBtn__logIn');
accountPanelBtn_logIn.style.display = 'none';   
const accountPanelBtn_logOut = document.getElementById('panelBtn__logOut');
accountPanelBtn_logOut.style.display = 'none';   
const accountPanelBtn_config = document.getElementById('panelBtn__Config');
accountPanelBtn_config.style.display = 'none';           

const checkSession = () =>{
  if(sessionStorage.getItem('session') != null){
    return true;
  } else {
    return false;
  };
};

function headerActiveSession(){
  headerBtn_notif.style.display = 'block';
  
  headerBtn_account.addEventListener('click', () => {
    headerNavAccount_panel.classList.toggle('display-none');
    accountPanelBtn_logIn.style.display = 'none';  
    accountPanelBtn_logOut.style.display = 'block';
    accountPanelBtn_config.style.display = 'block';    
  });
};

function headerNoActiveSession(){
  headerBtn_notif.style.display = 'none';

  headerBtn_account.addEventListener('click', () => {
    headerNavAccount_panel.classList.toggle('display-none');
    accountPanelBtn_logIn.style.display = 'block';  
    accountPanelBtn_logOut.style.display = 'none';
    accountPanelBtn_config.style.display = 'none';    
  });
};

const welcomeBanner = () => {
  let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: true,
  });
};

function headerInit(){
  if(checkSession()){
    headerActiveSession();
  } else {
    headerNoActiveSession
  }
};      

// Footer
const footer = document.getElementById('footer');



// SCREENS

// HOME
const sectionHome = document.getElementById('home');
// Boton 'Get started',redirige a crear cuenta, iniciar sesion o a workflow 
const btnGetStarted = document.getElementById('btn__getStarted');
const btnGetStartedEvent = () => {
  btnGetStarted.addEventListener('click', () => {
      displayLogIn();
  });
};


// LOG IN
const sectionLogIn = document.getElementById('logIn');
sectionLogIn.style.display = 'none';
const logInImg = document.getElementById('logIn__img');
// Inpusts 
const logInForm = document.getElementById('logIn__form');
const logInUser = document.getElementById('logIn__user');
const logInPassword = document.getElementById('logIn__psw');
const logInSubmit = document.getElementById('submit__logIn');
// Labels
const formLine_logInUser = document.getElementById('form__line--logInUser');
const formLine_logInPassword = document.getElementById('form__line--logInPassword');
// Icons
const logIn_userIcon = document.getElementById('logIn__userIcon');
const logIn_passwordIcon = document.getElementById('logIn__passwordIcon');
// Boton 'Sign Up', redirige a dicha seccion
const btnSignUp = document.getElementById('btn__signUp');
const btnSignUpEvent = () => {
  btnSignUp.addEventListener('click', () => {
      displaySignUp();
  });
};

// SIGN UP
const sectionSignUp = document.getElementById('signUp');
sectionSignUp.style.display = 'none';
const signUpImg = document.getElementById('signUp__img');
// Inputs
const signUpform = document.getElementById('signUp__form');
const signUpName = document.getElementById('signUp__name');
const signUpPhone = document.getElementById('signUp__phone');
const signUpEmail = document.getElementById('signUp__email');
const signUpPassword = document.getElementById('signUp__password');
const signUpConfirmPassword = document.getElementById('signUp__confirmPassword');
const submitSignUp = document.getElementById('submit__signUp');
// Labels
const formLine_signUpName = document.getElementById('form__line--signUpName');
const formLine_signUpPhone = document.getElementById('form__line--signUpPhone');
const formLine_signUpEmail = document.getElementById('form__line--signUpEmail');
const formLine_signUpPassword = document.getElementById('form__line--signUpPassword');
const formLine_signUpConfirmPassword = document.getElementById('form__line--signUpConfirmPassword');
// Icons
const signUp_nameIcon = document.getElementById('signUp__nameIcon');
const signUp_phoneIcon = document.getElementById('signUp__phoneIcon');
const signUp_emailIcon = document.getElementById('signUp__emailIcon');
const signUp_passwordIcon = document.getElementById('signUp__passwordIcon');
const signUp_confirmPasswordIcon = document.getElementById('signUp__confirmPasswordIcon');
// Boton 'Log In', redirige a dicha seccion
const btnSignIn = document.getElementById('btn__signIn');
const btnSignInEvent = () => {
  btnSignIn.addEventListener('click', () => {
    displayLogIn();
  });
};

// WORKFLOW
const workflow = document.getElementById('workflow');
workflow.style.display = 'none';


// Mostrar LogIn
const displayLogIn = () =>{
    // HIDE
    hideHeaderAndFooter();
    sectionSignUp.style.display = 'none';
    workflow.style.display = 'none';
    sectionHome.style.display = 'none';
    // SHOW
    sectionLogIn.style.display = 'grid';
    // INIT LOGIC
    initLogIn();
};

// Mostrar SignUp
const displaySignUp = () => {
    // HIDE
    hideHeaderAndFooter();
    sectionHome.style.display = 'none';
    workflow.style.display = 'none';
    sectionLogIn.style.display = 'none';
    // SHOW
    sectionSignUp.style.display = 'grid';
    // INIT LOGIC
    initSignUp();
};

// Mostrar Workflow
const displayWorkflow = () =>{
    // HIDE
    sectionHome.style.display = 'none';
    sectionSignUp.style.display = 'none';
    sectionLogIn.style.display = 'none';
    // SHOW
    displayHeaderAndFooter();
    workflow.style.display = 'grid';
};

// Mostrar header y footer
const displayHeaderAndFooter = () => {
    header.style.display = 'grid';
    footer.style.display = 'grid';
};

// Esconder header y footer
const hideHeaderAndFooter = () => {
    header.style.display = 'none';
    footer.style.display = 'none';
};


window.addEventListener('load', () => {




});




















