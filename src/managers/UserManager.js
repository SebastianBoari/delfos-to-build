import { SessionEvent } from '../utils'

class UserManager {
    #user
    #sessionStorageOnChangeEvent

    constructor() {
        this.#user = JSON.parse(localStorage.getItem('delfos-to-build-user')) || []
        this.#sessionStorageOnChangeEvent = SessionEvent
    }

    #getUser() {
        this.#user = JSON.parse(localStorage.getItem('delfos-to-build-user')) || []

        return this.#user
    }

    async #findUserByEmail(email) {
        if (!email) throw Error('email is a mandatory parameter')

        try {
            const user = localStorage.getItem('delfos-to-build-user')

            if (!user) return false

            const parsedUser = JSON.parse(user)

            if (parsedUser.email !== email) return false

            return parsedUser
        } catch (error) {
            console.error(error.message)
        }
    }

    async createUser(user) {
        if (!user) throw Error('user is a mandatory parameter')

        try {
            console.log(`USER MANAGER ${user}`)
            const userAlreadyExists = await this.#findUserByEmail(user.email)

            if (userAlreadyExists) throw Error('user already exists')

            await localStorage.setItem('delfos-to-build-user', JSON.stringify(user))

            return user
        } catch (error) {
            console.error(error.message)
        }
    }

    async #setSession(user) {
        if (!user) throw Error('user is a mandatory parameter')

        try {
            await sessionStorage.setItem('delfos-to-build-session', JSON.stringify(user))
            window.dispatchEvent(this.#sessionStorageOnChangeEvent)

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
            window.dispatchEvent(this.#sessionStorageOnChangeEvent)

            return
        } catch (error) {
            if (error.message == 'session not exists') {
                console.warn(error.message)
            } else {
                console.error(error.message)
            }
        }
    }

    async getActiveSession() {
        try {
            const session = sessionStorage.getItem('delfos-to-build-session')

            if (!session) throw Error('session not exists')

            return session
        } catch (error) {
            if (error.message == 'session not exists') {
                console.warn(error.message)
            } else {
                console.error(error.message)
            }
        }
    }
}

const userManager = new UserManager()

export default userManager