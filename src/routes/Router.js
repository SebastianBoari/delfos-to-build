import HeaderRender from '@templates/Header'
import FooterRender from '@templates/Footer'
import Error404Render from '@pages/Error404'
import HeaderScript from '@script/header'
import FooterScript from '@script/footer'

class Router {
    #route
    #routes

    constructor() {
        this.#routes = []
    }

    #getHash() {
        let currentPath = `/${location.hash.slice(1).toLocaleLowerCase().split('/')[0]}`

        if (!currentPath) currentPath = '/'

        return currentPath
    }

    async #execute(session, scripts) {
        try {
            if (!scripts) throw Error('scripts is a mandatory parameter')

            for (const script of scripts) {
                await script(session)
            }

            return
        } catch (error) {
            console.error(error.message)
        }
    }

    async #render(session, renderFunctions) {
        try {
            if (!renderFunctions) throw Error('render functions is a mandatory parameter')

            const root = document.getElementById('root')

            if (!root) throw Error('root container is undefined')

            root.innerHTML = ''

            for (const fun of renderFunctions) {
                root.innerHTML += await fun(session)
            }

            return
        } catch (error) {
            console.error(error.message)
        }
    }

    #match(path, routes, route) {
        if (routes.includes(path)) {
            if (path === route) {
                return true
            } else {
                return false
            }
        } else {
            return undefined
        }
    }

    setRoutes(routes) {
        this.#routes = routes
    }

    async addRoute(route, session, renderFunctions, logicFunctions) {
        try {
            if (!route) throw Error('route is a mandatory parameter')

            const path = this.#getHash()

            if (!path) throw Error('path is undefined')

            const search = this.#match(path, this.#routes, route)

            if (!search) return

            if (search && search != undefined) {
                await this.#render(session, renderFunctions)
                await this.#execute(session, logicFunctions)
            } else if (search === undefined) {
                await this.#render(session, [HeaderRender, Error404Render, FooterRender])
                await this.#execute(session, [HeaderScript, FooterScript])
            }
        } catch (error) {
            console.error(error.message)
        }
    }
}

const router = new Router()

export default router