const getHash = () => {
    return window.location.hash.slice(1) || '/';
}

export default getHash