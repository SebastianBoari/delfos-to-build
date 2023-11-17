import router from './Router'

import HeaderRender from '@templates/Header'
import FooterRender from '@templates/Footer'
import HomeRender from '@pages/Home'
import LoginRender from '@pages/Login'
import RegisterRender from '@pages/Signin'
import WorkbenchRender from '@pages/Workbench'

import HeaderScript from '@script/header'
import FooterScript from '@script/footer'
import HomeScript from '@script/home'
import LoginScript from '@script/login'
import RegisterScript from '@script/register'
import WorkbenchScript from '@script/workbench'


const routing = async () => {
    const routes = ['/', '/home', '/login', '/register', '/workbench', '/delfos-to-build/']
    router.setRoutes(routes)

    await router.addRoute('/', [HeaderRender, HomeRender, FooterRender], [HeaderScript, HomeScript, FooterScript])
    await router.addRoute('/home', [HeaderRender, HomeRender, FooterRender], [HeaderScript, HomeScript, FooterScript])

    await router.addRoute('/delfos-to-build/', [HeaderRender, HomeRender, FooterRender], [HeaderScript, HomeScript, FooterScript])

    await router.addRoute('/login', [LoginRender], [LoginScript])
    await router.addRoute('/register', [RegisterRender], [RegisterScript])
    await router.addRoute('/workbench', [HeaderRender, WorkbenchRender, FooterRender], [HeaderScript, WorkbenchScript, FooterScript])
}

export default routing