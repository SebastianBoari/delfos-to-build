import Header from '@templates/Header'
import Footer from '@templates/Footer'

import Home from '@pages/Home'
import Login from '@pages/Login'
import Signin from '@pages/Signin'
import Workbench from '@pages/Workbench'
import Error404 from '@pages/Error404'

import getHash from '@utils/getHash'
import resolveRoutes from '@utils/resolveRoutes'

const routes = {
    '/': Home,
    '/home': Home,
    '/login': Login,
    '/signin': Signin,
    '/workbench': Workbench,
}

const router = async () => {
    // HEADER
    const header = document.getElementById('header')
    header.innerHTML = await Header()

    // CONTENT
    const content = document.getElementById('content')
    const hash = getHash()
    const route = resolveRoutes(hash)
    const render = routes[route] ? routes[route] : Error404
    content.innerHTML = await render()

    // FOOTER
    const footer = document.getElementById('footer')
    footer.innerHTML = await Footer()
}

export default router
