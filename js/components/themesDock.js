const dockLight_inputs = Array.from(document.getElementsByClassName('dock__input--light'));
const dockBlue_inputs = Array.from(document.getElementsByClassName('dock__input--midnightblue'));
const dockDark_inputs = Array.from(document.getElementsByClassName('dock__input--dark'));



const dockEventsListeners = () => {
    let currentTheme ;
    localStorage.setItem('currentTheme', currentTheme);

    dockLight_inputs.forEach(element => {
        element.addEventListener('change', () =>{
            if(element.checked){
                body.classList.remove(`body__theme--${currentTheme}`);
                header.classList.remove(`header__theme--${currentTheme}`);
                logInImg.classList.remove(`logInImg__theme--${currentTheme}`);
                signUpImg.classList.remove(`signUpImg__theme--${currentTheme}`);
                currentTheme = 'light';
                body.classList.add('body__theme--light');
                header.classList.add('header__theme--light');
                logInImg.classList.add('logInImg__theme--light');
                signUpImg.classList.add('signUpImg__theme--light');
            }
            localStorage.setItem('currentTheme', currentTheme);
        });
    });

    dockBlue_inputs.forEach(element => {
        element.addEventListener('change', () =>{
            if(element.checked){
                body.classList.remove(`body__theme--${currentTheme}`);
                header.classList.remove(`header__theme--${currentTheme}`);
                logInImg.classList.remove(`logInImg__theme--${currentTheme}`);
                signUpImg.classList.remove(`signUpImg__theme--${currentTheme}`);
                currentTheme = 'blueMidnight';
                body.classList.add('body__theme--blueMidnight');
                header.classList.add('header__theme--blueMidnight');
                logInImg.classList.add('logInImg__theme--blueMidnight');
                signUpImg.classList.add('signUpImg__theme--blueMidnight');
            }

            localStorage.setItem('currentTheme', currentTheme);
        });
    });

    dockDark_inputs.forEach(element => {
        element.addEventListener('change', () =>{
            if(element.checked){
                body.classList.remove(`body__theme--${currentTheme}`);
                header.classList.remove(`header__theme--${currentTheme}`);
                logInImg.classList.remove(`logInImg__theme--${currentTheme}`);
                signUpImg.classList.remove(`signUpImg__theme--${currentTheme}`);
                currentTheme = 'dark';
                body.classList.add('body__theme--dark');
                header.classList.add('header__theme--dark');
                logInImg.classList.add('logInImg__theme--dark');
                signUpImg.classList.add('signUpImg__theme--dark');
            }
            localStorage.setItem('currentTheme', currentTheme);

        });

        return updateTheme(currentTheme);
    });



};

function updateTheme(currentTheme){
    body.className =`body__theme--${currentTheme}`;
    header.className =`header__theme--${currentTheme}`;
    logInImg.className =`logInImg__theme--${currentTheme}`;
    signUpImg.className =`signUpImg__theme--${currentTheme}`;
}