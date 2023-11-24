import ArrowIcon from '@icons/ArrowIcon'

const Home = async () => {
    const view = `
    <section id="home" class="home home-ligth">
        <div id="home_welcome" class="container-xl">

            <figure class="welcome_figure">
                <img class="welcome_figure-image" src="https://i.imgur.com/EM0cX54.png" alt="Ilustracion de un calendario con tareas a cumplir."></img>
            </figure>
            
            <div class="welcome_cta">
                <h1 class="welcome_cta-title">DelfOS To <bold>Build</bold></h1>
                
                <p class="welcome_cta-description">Welcome to To Build, your ultimate task management companion. Keep track of all your tasks, deadlines, and projects in one place.</p>
                <p class="welcome_cta-description">With To Build, you can easily create new tasks, set reminders, and prioritize your to-do list to stay on top of your work.</p>
                
                <div class="welcome_cta-buttons">
                    <a class="getStarted_button" href="">Get started</a>
                    <a class="getStarted_button-register" href="/register">Not registered yet?</a>
                </div>
            </div>
        </div>


        <div id="home_details" class="container-xl">
            <div class="home_details-container">

                <div class="detail">
                    <h4 class="detail_title">Lorem ipsum dolor sit amet consectetur <span>${ArrowIcon()}</span></h4>
                    
                    <div class="detail_description">
                        <p class="detail_description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio, maiores voluptatibus provident accusamus illum similique ipsam suscipit sunt incidunt consequatur accusantium magnam non vero, rem necessitatibus omnis iure dolorem.</p>
                    </div>
                </div>

                <div class="detail">
                    <h4 class="detail_title">Lorem ipsum dolor sit amet consectetur <span>${ArrowIcon()}</span></h4>
                    
                    <div class="detail_description">
                        <p class="detail_description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio, maiores voluptatibus provident accusamus illum similique ipsam suscipit sunt incidunt consequatur accusantium magnam non vero, rem necessitatibus omnis iure dolorem.</p>
                    </div>
                </div>

                <div class="detail">
                    <h4 class="detail_title">Lorem ipsum dolor sit amet consectetur <span>${ArrowIcon()}</span></h4>
                    
                    <div class="detail_description">
                        <p class="detail_description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio, maiores voluptatibus provident accusamus illum similique ipsam suscipit sunt incidunt consequatur accusantium magnam non vero, rem necessitatibus omnis iure dolorem.</p>
                    </div>
                </div>

                <div class="detail">
                    <h4 class="detail_title">Lorem ipsum dolor sit amet consectetur ${ArrowIcon()}</h4>
                    
                    <div class="detail_description">
                        <p class="detail_description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio, maiores voluptatibus provident accusamus illum similique ipsam suscipit sunt incidunt consequatur accusantium magnam non vero, rem necessitatibus omnis iure dolorem.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    `
    return view
}

export default Home