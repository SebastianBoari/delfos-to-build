const getHash = () => {
    // const hash = window.location.hash.slice(1).toLocaleLowerCase().split('/')[1]
    const path = window.location.pathname

    return path || '/'
}

export default getHash