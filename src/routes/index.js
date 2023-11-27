import router from './Router'

import HeaderRender from '@templates/Header'
import FooterRender from '@templates/Footer'
import HomeRender from '@pages/Home'
import LoginRender from '@pages/Login'
import RegisterRender from '@pages/Register'
import WorkbenchRender from '@pages/Workbench'

import HeaderScript from '@script/header'
import FooterScript from '@script/footer'
import HomeScript from '@script/home'
import LoginScript from '@script/login'
import RegisterScript from '@script/register'
import WorkbenchScript from '@script/workbench'

import userManager from '@managers/UserManager'

const routing = async () => {
    const session = await userManager.getActiveSession()

    const routes = ['/', '/home', '/login', '/register', '/workbench', '/delfos-to-build/']
    router.setRoutes(routes)

    await router.addRoute('/', session, [HeaderRender, HomeRender, FooterRender], [HeaderScript, HomeScript, FooterScript])
    await router.addRoute('/home', session, [HeaderRender, HomeRender, FooterRender], [HeaderScript, HomeScript, FooterScript])

    await router.addRoute('/delfos-to-build/', session, [HeaderRender, HomeRender, FooterRender], [HeaderScript, HomeScript, FooterScript])

    await router.addRoute('/login', session, [LoginRender], [LoginScript])
    await router.addRoute('/register', session, [RegisterRender], [RegisterScript])
    await router.addRoute('/workbench', session, [HeaderRender, WorkbenchRender, FooterRender], [HeaderScript, WorkbenchScript, FooterScript])
}

export default routing