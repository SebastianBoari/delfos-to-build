import routing from '@routes/index.js'
import '@css/index.css'

window.addEventListener('load', routing)
window.addEventListener('hashchange', routing)
window.addEventListener('sessionStorageOnChange', routing)