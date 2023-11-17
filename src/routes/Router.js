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

    #getPath() {
        const currentPath = location.pathname.toLowerCase()
        return currentPath
    }

    async #execute(scripts) {
        try {
            if (!scripts) throw Error('scripts is a mandatory parameter')

            for (const script of scripts) {
                await script()
            }

            return
        } catch (error) {
            console.error(error.message)
        }
    }

    async #render(renderFunctions) {
        try {
            if (!renderFunctions) throw Error('render functions is a mandatory parameter')

            const root = document.getElementById('root')
            if (!root) throw Error('root container is undefined')

            root.innerHTML = ''

            for (const fun of renderFunctions) {
                root.innerHTML += await fun()
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

    async addRoute(route, renderFunctions, logicFunctions) {
        try {
            if (!route) throw Error('route is a mandatory parameter')

            const path = this.#getPath()
            if (!path) throw Error('path is undefined')

            const search = this.#match(path, this.#routes, route)

            if (search && search != undefined) {
                await this.#render(renderFunctions)
                await this.#execute(logicFunctions)
            } else if (search === undefined) {
                await this.#render([HeaderRender, Error404Render, FooterRender])
                await this.#execute([HeaderScript, FooterScript])
            }
        } catch (error) {
            console.error(error.message)
        }
    }
}

const router = new Router()

export default router