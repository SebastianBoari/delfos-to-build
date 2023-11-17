class UserManager {
    #users

    constructor() {
        this.#users = JSON.parse(localStorage.getItem('delfos-to-build-users')) || []
    }

    #getUsers() {
        this.#users = JSON.parse(localStorage.getItem('delfos-to-build-users')) || []

        return this.#users
    }

    async #findUserByEmail(email) {
        if (!email) throw Error('email is a mandatory parameter')

        try {
            const currentUser = this.#users.find((user) => {
                return user.email === email
            })

            if (!currentUser) return false

            return currentUser
        } catch (error) {
            console.error(error.message)
        }
    }

    async createUser(user) {
        if (!user) throw Error('user is a mandatory parameter')

        try {
            const userAlreadyExists = await this.#findUserByEmail(user.email)
            if (userAlreadyExists) throw Error('user already exists')

            this.#users.push(user)

            await localStorage.setItem('delfos-to-build-users', JSON.stringify(this.#users))

            return user
        } catch (error) {
            console.error(error.message)
        }
    }

    async #setSession(user) {
        if (!user) throw Error('user is a mandatory parameter')

        try {
            await sessionStorage.setItem('delfos-to-build-session', JSON.stringify(user))

            const currentSession = await sessionStorage.getItem('delfos-to-build-session')

            return JSON.parse(currentSession)
        } catch (error) {
            console.error(error.message)
        }
    }

    async login(email, password) {
        if (!email || !password) throw Error('email and password are mandatory parameters')

        try {
            const currentUser = await this.#findUserByEmail(email)

            if (!currentUser) throw Error('user not exists')

            if (password != currentUser.password) throw Error('wrong password')

            await this.#setSession(currentUser)

            return currentUser
        } catch (error) {
            console.error(error.message)
        }
    }

    async destroySession() {
        try {
            const currentSession = await sessionStorage.getItem('delfos-to-build-session')

            if (!currentSession) throw Error('session not exists')

            await sessionStorage.clear()

            return
        } catch (error) {
            console.error(error.message)
        }
    }

    async getActiveSession() {
        try {
            const session = sessionStorage.getItem('delfos-to-build-session')

            if (!session) throw Error('session not exists')

            return session
        } catch (error) {
            console.error(error.message)
        }
    }
}

const userManager = new UserManager()

export default userManager