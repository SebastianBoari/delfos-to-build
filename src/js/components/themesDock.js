const dockLight_inputs = Array.from(document.getElementsByClassName('dock__input--light'));
const dockBlue_inputs = Array.from(document.getElementsByClassName('dock__input--midnightblue'));
const dockDark_inputs = Array.from(document.getElementsByClassName('dock__input--dark'));

let currentTheme = 'light';
localStorage.setItem('currentTheme', currentTheme);

const dockEventsListeners = () => {

    dockLight_inputs.forEach(element => {
        element.addEventListener('change', () =>{
            if(element.checked){
                body.classList.remove(`body__theme--${currentTheme}`);
                header.classList.remove(`header__theme--${currentTheme}`);
                logInImg.classList.remove(`logInImg__theme--${currentTheme}`);
                signUpImg.classList.remove(`signUpImg__theme--${currentTheme}`);

                currentTheme = 'light';
                localStorage.setItem('currentTheme', currentTheme);

                body.classList.add('body__theme--light');
                header.classList.add('header__theme--light');
                logInImg.classList.add('logInImg__theme--light');
                signUpImg.classList.add('signUpImg__theme--light');
            }
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
                localStorage.setItem('currentTheme', currentTheme);

                body.classList.add('body__theme--blueMidnight');
                header.classList.add('header__theme--blueMidnight');
                logInImg.classList.add('logInImg__theme--blueMidnight');
                signUpImg.classList.add('signUpImg__theme--blueMidnight');
            }
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
                localStorage.setItem('currentTheme', currentTheme);

                body.classList.add('body__theme--dark');
                header.classList.add('header__theme--dark');
                logInImg.classList.add('logInImg__theme--dark');
                signUpImg.classList.add('signUpImg__theme--dark');
            }
        });
    });
};

