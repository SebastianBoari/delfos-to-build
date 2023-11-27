import SunIcon from '@icons/SunIcon'
import SunsetIcon from '@icons/SunsetIcon'
import MoonIcon from '@icons/MoonIcon'

const ThemeDock = () => {
    const view = `
    <div id="theme-dock">
        <label id="sun-label">
            ${SunIcon()}
            <input type="radio" name="theme" id="sun-input"/>
        </label>


        <label id="sunset-label">
            ${SunsetIcon()}
            <input type="radio" name="theme" id="sunset-input"/>
        </label>

        <label id="moon-label">
            ${MoonIcon()}
            <input type="radio" name="theme" id="moon-input"/>
        </label>
    </div>
    `

    return view
}

export default ThemeDock