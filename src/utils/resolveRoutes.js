const resolveRoutes = (route) => {
    if (route.length <= 3) {
        const validRoute = route === '/' ? route : '/:task'

        return validRoute
    } else {
        return `${route}`
    }
}

export default resolveRoutes