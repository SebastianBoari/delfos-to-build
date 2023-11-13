const Footer = async () => {
    const view = `
    <footer class="footer footer-light" >
        <div class="footer-container container-l">
            <figure class="footer_brand">
                <a class="footer_brand-link" href="https://sebastianboari.github.io/DelfOS.github.io/">
                    <img class="footer_brand-image" src="https://i.imgur.com/rOnwNMf.png" alt="Logo de DelfOS.">
                </a>
            </figure>

            <div class="footer_contact">
                <div class="footer_contact-header">
                    <p class="address">Redmond, Washington, United States.</p>
                </div>
                
                <div class="footer_contact-footer">
                    <p class="telephone">(434) 546-4356</p>
                    <p class="mail">contact@panorama.com</p>
                </div>
            </div>

            <div class="footer_social">
                <div class="footer_social-container one">
                    <a class="link" href="https://sebastianboari.github.io/DelfOS.github.io/pages/nosotros.html">About</a>
                
                    <a class="link" href="https://sebastianboari.github.io/DelfOS.github.io/">Delfos</a>
                
                    <a class="link" href="https://sebastianboari.github.io/DelfOS.github.io/pages/productos.html">Products</a>
                
                    <a class="link" href="https://sebastianboari.github.io/DelfOS.github.io/pages/partners.html">Partners</a>
                
                    <a class="link" href="https://sebastianboari.github.io/DelfOS.github.io/pages/tienda.html">Store</a>
                </div>

                <div class="footer_social-container two">
                    <a class="link" href="https://github.com/microsoft">Github</a>
                    
                    <a class="link" href="https://www.linkedin.com/company/microsoft/">Linkedin</a>
                    
                    <a class="link" href="https://www.figma.com/@microsoft">Figma</a>
                    
                    <a class="link" href="https://support.microsoft.com/ContactUs?culture=en-us&country=us#!">Contact</a>
                </div>

                <p class="copyright">© 2023 Sebastian Boari. All rights reserved.</p>
            </div>
        </div>
    </footer >
    `

    return view
}

export default Footer



