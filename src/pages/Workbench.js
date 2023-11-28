
const Workbench = async (session) => {
    const view = `
    <article id="workflow">
        
        <aside class="">
            <header class="">
                <div>
                    <figure>
                        <img src="" alt=""/>
                    </figure>
                    
                    <form>
                        <label>
                            <input type="text"/>
                        </label>  
                    </form>
                </div>

                <div>
                    <div id="tasks-groups"></div>
                </div>
            </header>
        
        </aside>
        
        <section id="tasks">
        
        </section>
    </article>
    `

    return view
}

export default Workbench
