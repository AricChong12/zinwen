import './nav.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" id="home">
            <div className="container-fluid px-0">

                <a className="navbar-brand" href="#home">
                    <img
                        src="/portfolio.svg"
                        alt="Avatar Logo"
                        style={{ width: '40px' }}
                        className="rounded-pill"
                    />
                </a>



                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#exp">Experiences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#academics">Academics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#hacks">Hacks</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;