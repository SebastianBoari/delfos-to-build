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
const configUserIcon = document.getElementById('configUserIcon');
const userNameConfig = document.getElementById('userNameConfig');
const userPhoneConfig = document.getElementById('userPhoneConfig');
const userEmailConfig = document.getElementById('userEmailConfig');
const userPasswordConfig = document.getElementById('userPasswordConfig');
const configUserForm = document.getElementById('configUser__form');

const userOnStorage = {
  defaultIcon: './assets/icons/account-circle.svg',
  userIcon: localStorage.getItem('userIcon'),
  userName: localStorage.getItem('userName'),
  userEmail: localStorage.getItem('userEmail'),
  userPhone: localStorage.getItem('userPhone'),
  userPassword: localStorage.getItem('userPassword')
};

// Verifica si la sesion esta activa
const checkSession = () =>{
  if(sessionStorage.getItem('session') != null){
    return true;
  } else {
    return false;
  };
};

// Muestra la informacion del usuario en pantalla y permite editar los datos
const userDataConfig = () =>{
  // Muestro la informacion en pantalla
  configUserIcon.setAttribute('src', `${userOnStorage.userIcon}`);
  userNameConfig.value = userOnStorage.userName;
  userPhoneConfig.value = userOnStorage.userPhone;
  userEmailConfig.value = userOnStorage.userEmail;
  userPasswordConfig.value = userOnStorage.userPassword;

  configUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('userIcon', `${configUserIcon.getAttribute('src')}`) ;
    localStorage.setItem('userName', `${userNameConfig.value}`);
    localStorage.setItem('userPhone', `${userPhoneConfig.value}`); 
    localStorage.setItem('userEmail', `${userEmailConfig.value}`);
    localStorage.setItem('userPassword', `${userPasswordConfig.value}`);
  });

};

// Activa la opcion de elegir la imagen de perfil
const chooseUserIcon = () =>{
  profileImgOptions.forEach(img => {
    img.addEventListener('click', function(){
      const src = this.getAttribute('src');
      document.querySelectorAll('.userIcon').forEach(img => {
        img.setAttribute('src', src);
      });
    });
  });
};

// NAVEGACION DE USARIO EN SESION ACTIVA
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


// NAVEGACION DE USARIO EN SESION INACTIVA
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

// HEADER EN SESION ACTIVA
const headerActiveSession = () => {

  btnAccountActiveSession();
};
// HEADER EN SESION INACTIVA
const headerNoActiveSession = () =>{
  btnAccountNoActiveSession();
};
// Inicializo Carrusel
const swiper = new Swiper(".mySwiper", {
  autoplay: true,
});


// FUNCION INICIALIZADORA DEL HEADER COMPLETO
function headerInit(){ 
  header.style.display = 'block';

  //Verifico si ya hay un icono en localeStorage
  if(userOnStorage.userIcon !== null || userOnStorage.userIcon !== undefined){
    headerUserIcon.setAttribute('src', userOnStorage.userIcon);
  } else {
    headerUserIcon.setAttribute('src', userOnStorage.defaultIcon);
  };

  if(checkSession() == true){
    headerActiveSession();
  } else {
    headerNoActiveSession();
  };
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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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










// SIGN UP

// Funciones de validacion:
function validateEmail(email){
  let re = /^[^@]+@[^@.]+\.[^@]{2,}$/;
  if(re.test(String(email).toLowerCase())){
      return true;
  }else{
      return false;
  };
};
function validatePhone(phoneNumber){
  if(phoneNumber.length > 9){
      return true;
  }else{
      return false;
  }
};
function validateName(name){
let nameRegex = /^[a-zA-Z\s]*$/;
  if(name.match(nameRegex) && name.length > 8) {
      return true;
  } else {
      return false;
  };
};
function validatePassword(password){
  if (password.length < 8) {
      return false;
  } else {
      return true;
  }
};
function validateConfirmPassword(password, confirmPassword){
  if (password == confirmPassword){
      return true;
  } else{
      return false
  }
};

// Manipulacion de estilos
// Funcion de validacion con un solo parametro:
function validateFieldStyles(value, label, icon, iconPath, validationFunction){
  if(validationFunction(value) == false){
      label.classList.add('error');
      icon.src = `./assets/icons/${iconPath}-error.png`;
  } else if(validationFunction(value) == true){
      label.classList.remove("error");
      icon.src = `./assets/icons/${iconPath}-default.png`;
  }
};
// Funcion de validacion con 2 parametros:
function validateFieldStylesParams(value1, value2, label, icon, iconPath, validationFunction){
  if(validationFunction(value1, value2) == false){
      label.classList.add('error');
      icon.src = `./assets/icons/${iconPath}-error.png`;
  } else if(validationFunction(value1, value2) == true){
      label.classList.remove("error");
      icon.src = `./assets/icons/${iconPath}-default.png`;
  }
};

// Estilos de los inputs
const signUpErrorFieldStyles = () => {
  validateFieldStyles(signUpName.value, formLine_signUpName, signUp_nameIcon, 'user-icon', validateName);
  validateFieldStyles(signUpPhone.value, formLine_signUpPhone, signUp_phoneIcon, 'phone-icon', validatePhone);
  validateFieldStyles(signUpEmail.value, formLine_signUpEmail, signUp_emailIcon, 'email-icon', validateEmail);
  validateFieldStyles(signUpPassword.value, formLine_signUpPassword, signUp_passwordIcon, 'password-icon', validatePassword);

  validateFieldStylesParams(signUpPassword.value, signUpConfirmPassword.value, formLine_signUpConfirmPassword, signUp_confirmPasswordIcon, 'password-icon', validateConfirmPassword); 
};




// Validacion de informacion
function saveUserData(){
  if (validateName(signUpName.value) == true && validatePhone(signUpPhone.value) == true && validateEmail(signUpEmail.value) == true && validatePassword(signUpPassword.value) == true && validateConfirmPassword(signUpPassword.value, signUpConfirmPassword.value) == true){
      localStorage.setItem('userName', signUpName.value);
      localStorage.setItem('userPhone', signUpPhone.value);
      localStorage.setItem('userEmail', signUpEmail.value);
      localStorage.setItem('userPassword', signUpPassword.value);
      // Guardo los datos del usuario
      userOnStorage.userName = localStorage.getItem('userName');
      userOnStorage.userEmail = localStorage.getItem('userEmail');
      userOnStorage.userPhone = localStorage.getItem('userPhone');
      userOnStorage.userPassword = localStorage.getItem('userPassword');

      signUpName.value = "";
      signUpPhone.value = "";
      signUpEmail.value = "";
      signUpPassword.value = "";
      signUpConfirmPassword.value = "";

      Toastify({
          text: "It has been successfully registered",
          backgroundColor: "rgba(37, 108, 41, 0.80)",
          classes: "succes",
      }).showToast();
      
      // HIDE
      header.style.display = 'none';
      footer.style.display = 'none';
      sectionHome.style.display = 'none';
      sectionSignUp.style.display = 'none';
      // SHOW
      sectionLogIn.style.display = 'grid';

  } else {
      signUpErrorFieldStyles();
  };
};
// Validacion si el usuario ya existe
function alreadyUserChecker(){
  if (signUpEmail.value == localStorage.getItem('userEmail')){
      swal({
          title: "Ups",
          text: "Email account is already registered, do you want to log in?",
          icon: "warning",
          buttons: ["Cancel", "Log in"],
        })
        .then((value) => {
          if (value) {
              // HIDE
              header.style.display = 'none';
              footer.style.display = 'none';
              sectionHome.style.display = 'none';
              sectionSignUp.style.display = 'none';
              // SHOW
              sectionLogIn.style.display = 'grid';
          }
        });
  } else {
      saveUserData();
  };
};

// Funcion inicializadora
function initSignUp(){
  signUpform.addEventListener('submit', (e) => {
      e.preventDefault();
      alreadyUserChecker();
  });
};


// LOG IN

// Validacion de datos:

// Validacion de Usuario, nombre/mail/numero
function validateUserLogIn(){
  if(logInUser.value == localStorage.getItem('userName') || logInUser.value == localStorage.getItem('userEmail') || logInUser.value == localStorage.getItem('userPhone')){
      return true;
  } else {
      return false;
  };
};

// Validacion de contrasenia
function validatePasswordLogIn(){
  if(logInPassword.value == localStorage.getItem('userPassword')){
      return true;
  } else {
      return false;
  };
};

// Estilos de los inputs
const logInErrorFieldStyles = () => {
  validateFieldStyles(logInUser.value, formLine_logInUser, logIn_userIcon, 'user-icon', validateUserLogIn);
  validateFieldStyles(logInPassword.value, formLine_logInPassword, logIn_passwordIcon, 'password-icon', validatePasswordLogIn);
};

let tryToLogIn = 0;
// Funcion inicializadora
function initLogIn(){
  logInForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if(tryToLogIn < 3){
          if(validateUserLogIn() == true && validatePasswordLogIn() == true){
              tryToLogIn = 0;
              sessionStorage.setItem('session', 'active');
              location.reload();
          } else {
              logInErrorFieldStyles();
              tryToLogIn++;
          };
      } else if (tryToLogIn >= 3 && tryToLogIn < 6) {
          swal({
              title: "Hey",
              text: "Is it a brute force attack or have you just forgotten your password?",
              icon: "warning",
              button: "Continue",
          });
          if(validateUserLogIn() == true && validatePasswordLogIn() == true){
              tryToLogIn = 0;
              sessionStorage.setItem('session', 'active');
              location.reload();
          } else {
              logInErrorFieldStyles();
              tryToLogIn++;
          };
      } else if (tryToLogIn >= 6){
          swal({
              title: "Stop",
              text: "First you must create an account and then log in.",
              icon: "error",
              button: "Continue",
          });
          if(validateUserLogIn() == true && validatePasswordLogIn() == true){
              tryToLogIn = 0;
              sessionStorage.setItem('session', 'active');
              location.reload();
          } else {
              logInErrorFieldStyles();
              tryToLogIn++;
          };
      };
      
  });
};










