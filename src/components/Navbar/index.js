import React from 'react';
import './index.css';

function Navbar({ currentPage, handlePageChange }) {

    return (
        <>
            <header>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <a href="#work"
                                onClick={() => handlePageChange('Portfolio')}
                                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >Work</a>
                        </li>
                        <li>
                            <a href="#about"
                                onClick={() => handlePageChange('AboutMe')}
                                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                            >About</a>
                        </li>
                        <li className="jrw">
                            <div><span>JRW<img className="helmet" src="https://img.icons8.com/metro/26/000000/viking-helmet.png" /></span>
                                <p><span>Developer Portfolio</span></p>
                            </div>
                        </li>
                        <li>
                            <a href="#contact-me"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >Contact Me</a>
                        </li>
                        <li className="skol">
                            <a href="assets/resume/JWResume.pdf">Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Navbar