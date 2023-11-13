import HeaderRender from '@templates/Header'
import FooterRender from '@templates/Footer'
import HomeRender from '@pages/Home'
import LoginRender from '@pages/Login'
import SigninRender from '@pages/Signin'
import WorkbenchRender from '@pages/Workbench'
import Error404Render from '@pages/Error404'

import {
    HomeScripts,
    LoginScripts,
    SigninScripts,
    WorkbenchScripts,
    HeaderScripts,
    FooterScripts
} from '../js'

import {
    HomeRules,
    LoginRules,
    SigninRules,
    WorkbenchRules
} from '../js/rules'

import getHash from '@utils/getHash'
import resolveRoutes from '@utils/resolveRoutes'

const routes = {
    '/': [HomeRender, HomeScripts, HomeRules],
    '/home': [HomeRender, HomeScripts, HomeRules],
    '/login': [LoginRender, LoginScripts, LoginRules],
    '/signin': [SigninRender, SigninScripts, SigninRules],
    '/workbench': [WorkbenchRender, WorkbenchScripts, WorkbenchRules],
}

const router = async () => {
    const root = document.getElementById('root')
    const hash = getHash()
    const route = resolveRoutes(hash)

    const render = async () => {
        if (!routes[route]) {
            root.innerHTML = await HeaderRender()
            root.innerHTML += await Error404Render()
            root.innerHTML += await FooterRender()
        }

        if (routes[route][2].header && routes[route][2].footer) {
            root.innerHTML = await HeaderRender()
            root.innerHTML += await routes[route][0]()
            root.innerHTML += await FooterRender()
        } else {
            root.innerHTML = await routes[route][0]()
        }
    }

    const scripts = async () => {
        if (routes[route][1]) {
            if (routes[route][2].header && routes[route][2].footer) {
                await HeaderScripts.forEach((cb) => {
                    cb()
                })

                await FooterScripts.forEach((cb) => {
                    cb()
                })
            }

            await routes[route][1].forEach((cb) => {
                cb()
            })
            return
        }
        return
    }

    await render()
    await scripts()
}

export default router
