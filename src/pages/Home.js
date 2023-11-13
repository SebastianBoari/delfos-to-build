const Home = async () => {
    const view = `
    <section id="home">
        <div class="container-xl">
            <figure class="home__figure">
                <img src="https://i.imgur.com/EM0cX54.png" alt="Ilustracion de un calendario con tareas a cumplir.">
            </figure>
            <article class="home__article">
                <div class="article__txt">
                    <h2 class="txt__title">DelfOS To <span>Build</span></h2>
                    <p class="txt__p">Welcome to To Build, your ultimate task management companion. Keep track of all your tasks, deadlines, and projects in one place. With To Build, you can easily create new tasks, set reminders, and prioritize your to-do list to stay on top of your work.</p>
                </div>
                <div class="article__btn">
                    <button id="btn__getStarted">Get started</button>
                </div>
            </article>
        </div>

        <div id="home__wall">
            <div class="container-xl">
                <article class="home__article--wall">
                    <div class="article__txt--wall">
                        <p class="txt__wall txtWall__left"><span>To <span>Build</span></span> paths, reach your goals, remember what is important.</p>
                    </div>
                </article>
                <figure class="home__figure--wall">
                    <img src="https://i.imgur.com/UTsnszn.png" alt="Ilustracion de una persona trabajando en su realizacion personal.">
                </figure>
            </div>

            <div class="container-xl">
                <figure class="home__figure--wall">
                    <img src="https://i.imgur.com/6i5Mx0p.png" alt="Ilustracion de dispositivos inteligentes.">
                </figure>
                <article class="home__article--wall">
                    <div class="article__txt--wall">
                        <p class="txt__wall txtWall__right">Wherever you are, wherever you can, wherever you want. Go <span>To <span>Build</span>!</span></p>
                    </div>
                </article>
            </div>
        </div>
    </section>
    `
    return view
}

export default Home