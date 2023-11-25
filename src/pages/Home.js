const Home = async () => {
    const view = `
    <section id="home" class="home home-ligth">

        <div id="home_welcome" class="container-xl">

            <figure class="welcome_figure">
                <img class="welcome_figure-image" src="https://i.imgur.com/3A7jqhm.png" alt="Callendar illustration" />
            </figure>
            
            <div class="welcome_cta">
                <h1 class="welcome_cta-title">DelfOS To <bold>Build</bold></h1>
                
                <p class="welcome_cta-description">Welcome to To Build, your ultimate task management companion. Keep track of all your tasks, deadlines, and projects in one place.</p>
                <p class="welcome_cta-description">With To Build, you can easily create new tasks, set reminders, and prioritize your to-do list to stay on top of your work.</p>
                
                <div class="welcome_cta-buttons">
                    <a class="getStarted_button" id="get-started" href="">Get started</a>
                    <a class="getStarted_button-register" id="get-started-register" href="">Not registered yet?</a>
                </div>
            </div>
        </div>        
    </section>
    `
    return view
}

export default Home