

// Body
const body = document.getElementById('body');
// Footer
const footer = document.getElementById('footer');
// Header
const header =  document.getElementById('header');
const headerWelcome = document.getElementById('header__welcome');
const headerUserIcon = document.getElementById('headerUserIcon');
const btnAccount = document.getElementById('btn__account');
const accountPanel = document.getElementById('navAccount__panel');
const accountPanelBtnLogIn = document.getElementById('panelBtn__logIn');
accountPanelBtnLogIn.style.display = 'none';   
const accountPanelBtnLogOut = document.getElementById('panelBtn__logOut');
accountPanelBtnLogOut.style.display = 'none';   
const accountPanelBtnConfig = document.getElementById('panelBtn__Config');
accountPanelBtnConfig.style.display = 'none';           

// Configuration
const sectionConfig = document.getElementById('configuration');
const profileImgOptions = document.querySelectorAll('.profileImgOptions');
let userIconOnLocaleStorage = localStorage.getItem('userIcon');
const configUserIcon = document.getElementById('configUserIcon');
const userName = document.getElementById('userName');
const userPhone = document.getElementById('userPhone');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');


// Muestra la informacion del usuario en pantalla
const userDataConfig = () =>{
  userName.value = localStorage.getItem('userName');
  userPhone.value = localStorage.getItem('userPhone');
  userEmail.value = localStorage.getItem('userEmail');
  userPassword.value = localStorage.getItem('userPassword');
};


// Activa la opcion de elegir la imagen de perfil
const chooseUserIcon = () =>{
  profileImgOptions.forEach(img => {
    img.addEventListener('click', function(){
      const src = this.getAttribute('src');
      localStorage.setItem('userIcon', `${src}`);
  
      document.querySelectorAll('.userIcon').forEach(img => {
        img.setAttribute('src', src);
      });
    });
  });
};


// Verifica si la sesion esta activa
const checkSession = () =>{
  if(sessionStorage.getItem('session') != null){
    return true;
  } else {
    return false;
  };
};


// Boton 'cuenta de usuario' en sesion ACTIVA
const btnAccountActiveSession = () => {
  // Boton LogOut
  const accountBtnLogOut = () =>{
    accountPanelBtnLogOut.addEventListener('click', () =>{
      sessionStorage.clear('session');
      location.reload();
    });
  };
  // Boton Config
  const accountBtnConfig = () =>{
    accountPanelBtnConfig.addEventListener('click', () =>{
      sectionConfig.classList.toggle('display-none');
      userDataConfig();
      chooseUserIcon();
    });
  };

  btnAccount.addEventListener('click', () => {
    accountPanel.classList.toggle('display-none');

    // Muestra boton de Log Out y Configuracion
    accountPanelBtnLogIn.style.display = 'none';

    accountPanelBtnLogOut.style.display = 'block';
    accountBtnLogOut();

    accountPanelBtnConfig.style.display = 'block';
    accountBtnConfig();  
  });
};


// Boton cuenta de usuario INACTIVO
const btnAccountNoActiveSession = () => {
  // Boton LogIn
  const accountBtnLogIn = () => {
    accountPanelBtnLogIn.addEventListener('click', () => {
      displayLogIn();
      initLogIn();
    });
  };
  
  btnAccount.addEventListener('click', () => {
    accountPanel.classList.toggle('display-none');

    // Muestra solo Log In
    accountPanelBtnLogIn.style.display = 'block';
    accountBtnLogIn();

    accountPanelBtnLogOut.style.display = 'none';
    accountPanelBtnConfig.style.display = 'none'; 
  });
};



const headerActiveSession = () => {
  configUserIcon.setAttribute('src', userIconOnLocaleStorage);
  headerUserIcon.setAttribute('src', userIconOnLocaleStorage);
  btnAccountActiveSession();
};
const headerNoActiveSession = () =>{
  btnAccountNoActiveSession();
};

const swiper = new Swiper(".mySwiper", {
  autoplay: true,
});

// Funcion Inicializadora
function headerInit(){ 
  header.style.display = 'block';
  
  if(checkSession() == true){
    headerActiveSession();
  } else {
    headerNoActiveSession();
  };
};      



// SCREENS
// Home
const sectionHome = document.getElementById('home');
const btnGetStarted = document.getElementById('btn__getStarted');

// Boton 'Get Started' el cual redirige dependienso si es nuevo usuario o si esta esta logeado
const btnGetStartedEvent = () => {
  if(localStorage.getItem('userName') != null && sessionStorage.getItem('session') != null){
    btnGetStarted.addEventListener('click', () => {
      displayWorkflow();
    });
  } else if(localStorage.getItem('userName') != null && sessionStorage.getItem('session') == null){
    btnGetStarted.addEventListener('click', () => {
      displayLogIn();
    });
  } else if(localStorage.getItem('userName') == null){
    btnGetStarted.addEventListener('click', () => {
      displaySignUp();
    });
  }
};

// Funcion inicializadora
function homeInit(){
  headerInit();
  sectionHome.style.display = 'block';
  btnGetStartedEvent();
  footer.style.display = 'block';
};






































// WORKFLOW
const workflow = document.getElementById('workflow');
workflow.style.display = 'none';








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












// Mostrar LogIn
const displayLogIn = () =>{
    // Hide
    hideHeaderAndFooter();
    sectionSignUp.style.display = 'none';
    workflow.style.display = 'none';
    sectionHome.style.display = 'none';
    // Show
    sectionLogIn.style.display = 'grid';
    // Init logica y eventos
    btnSignUpEvent();
    initLogIn();
};

// Mostrar SignUp
const displaySignUp = () => {
    // Hide
    hideHeaderAndFooter();
    sectionHome.style.display = 'none';
    workflow.style.display = 'none';
    sectionLogIn.style.display = 'none';
    // Show
    sectionSignUp.style.display = 'grid';
    // Init logica y eventos
    btnSignInEvent();
    initSignUp();
};

// Mostrar Workflow
const displayWorkflow = () =>{
    // Hide
    sectionHome.style.display = 'none';
    sectionSignUp.style.display = 'none';
    sectionLogIn.style.display = 'none';
    // Show
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

// Mostrar Configuracion
const displayConfig = () =>{
  workflow.style.display = 'none';
  sectionHome.style.display = 'none';
  sectionConfig.style.display = 'grid';
};
















