import './nav.css';

import {NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" id="home">
            <div className="container-fluid px-0">

                {/*}
                <a className="navbar-brand" href="#home">
                    <img
                        src="/portfolio.svg"
                        alt="Avatar Logo"
                        style={{ width: '40px' }}
                        className="rounded-pill"
                    />
                </a>
                */}


                <NavLink class="navbar-brand" to="/">
                        <img src="portfolio.svg" alt="Avatar Logo" style={{width:"40px"}} class="rounded-pill"/> 
                </NavLink>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/*<a className="nav-link" href="#about">About</a>*/}
                            <HashLink smooth className="nav-link" to="/#about">About</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth className="nav-link" to="/#project">Projects</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth className="nav-link" to="/#exp">Experiences</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth className="nav-link" to="/#academics">Academics</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth className="nav-link" to="/#hacks">Hacks</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;