const Footer = async () => {
    const view = `
    <footer footer id="footer" class="footer__theme--light" >
        <div class="container-l">
            <figure class="footer__figure">
                <a class="figure__link" href="https://sebastianboari.github.io/DelfOS.github.io/">
                    <img class="figure__img" src="https://i.imgur.com/rOnwNMf.png" alt="Logo de DelfOS.">
                </a>
            </figure>
            <div class="footer__contact">
                <p class="address">Redmond, Washington, United States.</p>
                <div class="footer__contact--down">
                    <p class="telNumber">(434) 546-4356</p>
                    <p class="contactMail">contact@panorama.com</p>
                </div>
            </div>
            <div class="footer__social">
                <div class="social__redirect">
                    <a class="footer__link"
                        href="https://sebastianboari.github.io/DelfOS.github.io/pages/nosotros.html">About</a>
                    <a class="footer__link" href="https://sebastianboari.github.io/DelfOS.github.io/">Delfos</a>
                    <a class="footer__link"
                        href="https://sebastianboari.github.io/DelfOS.github.io/pages/productos.html">Products</a>
                    <a class="footer__link"
                        href="https://sebastianboari.github.io/DelfOS.github.io/pages/partners.html">Partners</a>
                    <a class="footer__link"
                        href="https://sebastianboari.github.io/DelfOS.github.io/pages/tienda.html">Store</a>
                </div>
                <div class="social__link">
                    <a class="footer__link" href="https://github.com/microsoft">Github</a>
                    <a class="footer__link" href="https://www.linkedin.com/company/microsoft/">Linkedin</a>
                    <a class="footer__link" href="https://www.figma.com/@microsoft">Figma</a>
                    <a class="footer__link"
                        href="https://support.microsoft.com/ContactUs?culture=en-us&country=us#!">Contact</a>
                </div>
                <p class="signature">© 2023 Sebastian Boari. All rights reserved.</p>
            </div>
        </div>
    </footer >
    `

    return view
}

export default Footer



