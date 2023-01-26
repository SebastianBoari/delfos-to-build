// SIGNUP
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
    // Valido la longitud minima
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

// Manipulacion de estilos
// Funcion de validacion con un solo parametro:
function validateField(value, label, icon, iconPath, validationFunction){
    if(validationFunction(value) == false || validationFunction(value) == null){
        label.classList.add('error');
        icon.src = `./assets/icons/${iconPath}-error.png`;
    } else if(validationFunction(value) == true){
        label.classList.remove("error");
        icon.src = `./assets/icons/${iconPath}-default.png`;
    }
};
// Funcion de validacion con 2 parametros:
function validateFieldParams(value1, value2, label, icon, iconPath, validationFunction){
    if(validationFunction(value1, value2) == false || validationFunction(value1, value2) == null){
        label.classList.add('error');
        icon.src = `./assets/icons/${iconPath}-error.png`;
    } else if(validationFunction(value1, value2) == true){
        label.classList.remove("error");
        icon.src = `./assets/icons/${iconPath}-default.png`;
    }
};




signUpform.addEventListener('submit', (e) => {
    e.preventDefault()


    validateField(signUpName.value, formLine_signUpName, signUp_nameIcon, 'user-icon', validateName);
    validateField(signUpPhone.value, formLine_signUpPhone, signUp_phoneIcon, 'phone-icon', validatePhone);
    validateField(signUpEmail.value, formLine_signUpEmail, signUp_emailIcon, 'email-icon', validateEmail);
    validateField(signUpPassword.value, formLine_signUpPassword, signUp_passwordIcon, 'password-icon', validatePassword);
    validateFieldParams(signUpPassword.value, signUpConfirmPassword.value, formLine_signUpConfirmPassword, signUp_confirmPasswordIcon, 'password-icon', validateConfirmPassword);  
});







  