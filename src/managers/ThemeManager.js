import { SessionEvent } from '../utils'

class ThemeManager {

    #sessionStorageOnChangeEvent

    constructor() {
        this.#sessionStorageOnChangeEvent = SessionEvent
    }

    getTheme() {
        const currentTheme = sessionStorage.getItem('delfos-to-build-theme')

        return JSON.parse(currentTheme) || 'light'
    }

    async setTheme(theme) {
        if (!theme) return

        const newTheme = JSON.stringify(theme)

        sessionStorage.setItem('delfos-to-build-theme', newTheme)

        window.dispatchEvent(this.#sessionStorageOnChangeEvent)
    }
}

const themeManager = new ThemeManager()

export default themeManager