const resolveRoutes = (route) => {
    if (route.length <= 1) {
        return '/';
    } else {
        const formattedRoute = route.toLowerCase();
        return formattedRoute;
    }
}

export default resolveRoutes