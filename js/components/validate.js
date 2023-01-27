// SIGNUP

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
    if(validationFunction(value) == false || validationFunction(value) == null){
        label.classList.add('error');
        icon.src = `./assets/icons/${iconPath}-error.png`;
    } else if(validationFunction(value) == true){
        label.classList.remove("error");
        icon.src = `./assets/icons/${iconPath}-default.png`;
    }
};
// Funcion de validacion con 2 parametros:
function validateFieldStylesParams(value1, value2, label, icon, iconPath, validationFunction){
    if(validationFunction(value1, value2) == false || validationFunction(value1, value2) == null){
        label.classList.add('error');
        icon.src = `./assets/icons/${iconPath}-error.png`;
    } else if(validationFunction(value1, value2) == true){
        label.classList.remove("error");
        icon.src = `./assets/icons/${iconPath}-default.png`;
    }
};



// Estilos de los inputs
function signUpErrorFieldStyles(){
    validateFieldStyles(signUpName.value, formLine_signUpName, signUp_nameIcon, 'user-icon', validateName);
    validateFieldStyles(signUpPhone.value, formLine_signUpPhone, signUp_phoneIcon, 'phone-icon', validatePhone);
    validateFieldStyles(signUpEmail.value, formLine_signUpEmail, signUp_emailIcon, 'email-icon', validateEmail);
    validateFieldStyles(signUpPassword.value, formLine_signUpPassword, signUp_passwordIcon, 'password-icon', validatePassword);
    validateFieldStylesParams(signUpPassword.value, signUpConfirmPassword.value, formLine_signUpConfirmPassword, signUp_confirmPasswordIcon, 'password-icon', validateConfirmPassword);  
};

// Validacion de informacion
function saveUserData(){
    if (validateName(signUpName.value) == true && validatePhone(signUpPhone.value) == true && validateEmail(signUpEmail.value) == true && validateConfirmPassword(signUpPassword.value, signUpConfirmPassword.value) == true){
        console.log('Estoy funcionando xd')
        localStorage.setItem('userName', signUpName.value);
        localStorage.setItem('userPhone', signUpPhone.value);
        localStorage.setItem('userEmail', signUpEmail.value);
        localStorage.setItem('userPassword', signUpPassword.value);

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



// LOGIN

// Validacion de datos:
function validateUserLogIn(){
    if(logInUser.value == localStorage.getItem('userName') || logInUser.value == localStorage.getItem('userEmail') || logInUser.value == localStorage.getItem('userPhone')){
        return true;
    } else {
        return false;
    };
};
function validatePasswordLogIn(){
    if(logInPassword.value == localStorage.getItem('userPassword')){
        return true;
    } else {
        return false;
    };
};
// Estilos de los inputs
function logInErrorFieldStyles(){
    validateFieldStyles(logInUser.value, formLine_logInUser, logIn_userIcon, 'user-icon', validateUserLogIn);
    validateFieldStyles(logInPassword.value, formLine_logInPassword, logIn_passwordIcon, 'password-icon', validatePasswordLogIn);
}
// Validacion de credenciales
function validateCredentials(){
    if(tryToLogIn < 3){
        if(validateUserLogIn() == true && validatePasswordLogIn() == true){
            tryToLogIn = 0;
            return true;
        } else {
            logInErrorFieldStyles();
            tryToLogIn++;
            return false;
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
            return true;
        } else {
            logInErrorFieldStyles();
            tryToLogIn++;
            return false;
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
            return true;
        } else {
            logInErrorFieldStyles();
            tryToLogIn++;
            return false;
        };
    };
};

// Funcion inicializadora
function initLogIn(){
    logInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateCredentials();
        
        if(validateCredentials){
            // HIDE
            sectionHome.style.display = 'none';
            sectionSignUp.style.display = 'none';
            sectionLogIn.style.display = 'none';
            // SHOW
            header.style.display = 'grid';
            footer.style.display = 'grid';
            const workflow = document.getElementById('workflow').style.display = 'grid';
        };
    });
};






