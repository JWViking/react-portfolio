import './index.css';

function Portfolio() {
    return (
        <>
            <section id="work" className="work">
                <h3>Work Examples</h3>
                <article className="work-tiles">
                    <div className="password-generator">
                        <a className="gitHub" href="https://github.com/JWViking/password-craze"><i class="fa-brands fa-github"></i><br /></a>
                        <a className="liveLink" href="https://jwviking.github.io/password-craze/" target="_blank"> Password Craze <i class="fa-solid fa-arrow-up-right-from-square"> </i> </a>
                    </div>
                    <div className="run-buddy">
                        <a className="gitHub" href="https://github.com/JWViking/run-buddy"><i class="fa-brands fa-github"></i> </a>
                        <a href="https://jwviking.github.io/run-buddy/" target="_blank">Run Buddy <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="hike-buddy">
                        <a className="gitHub" href="https://github.com/emilypape/hike-buddy"><i class="fa-brands fa-github"></i></a>
                        <a href="https://still-shore-87425.herokuapp.com/" target="_blank">Hike Buddy <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>

                    <div className="wine-n-dine">
                        <a className="gitHub" href="https://github.com/JWViking/project1"><i class="fa-brands fa-github"></i></a>
                        <a href="https://jwviking.github.io/project1/" target="_blank">Wine N' Dine <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="ww">
                        <a className="gitHub" href="https://github.com/JWViking/mind-space"><i class="fa-brands fa-github"></i></a>
                        <a href="https://mindspace-notes.herokuapp.com/notes" target="_blank">Note Taker <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Portfolio;