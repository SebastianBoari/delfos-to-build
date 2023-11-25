
const homeScript = async (session) => {
    const getStartedButton = document.getElementById('get-started')
    getStartedButton.addEventListener('click', () => {

        if (!session) {
            getStartedButton.href = '/login'
            return
        }

        getStartedButton.href = '/workbench'
    })

    const getStartedRegisterButton = document.getElementById('get-started-register')
    getStartedRegisterButton.addEventListener('click', () => {
        if (!session) {
            getStartedRegisterButton.href = '/register'
            return
        }

        getStartedRegisterButton.href = '/workbench'
    })
}

export default homeScript