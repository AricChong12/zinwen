import './Intro.css';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Intro() {
    return (
        <>
            <h2 className="name">Zin Wen</h2>
            <p className="job">Network Engineer based in Negeri Sembilan,
                Malaysia
            </p>



            <p className="intro">
                I write codes and build networks. I also enjoy exploring new
                technologies by joining tech events such as
                Google Developer Groups on Campus. I do also volunteer in
                running and organizing tech events in university tech clubs
                such as Developer Student Club. I actively broaden my knowledge
                about all sub-domains of computer
                science whenever i am free. I study Bachelor of Computer
                Science (Computer Networking) at Universiti Teknikal Malaysia
                Melaka, UTeM.

            </p>


            <div className="container">
                <FaGithub size={25} color="#00ff00" />
                <a href="https://github.com/AricChong12" className="links">
                    GitHub
                </a>
                <FaLinkedin size={25} color="#00FF00" />
                <a href="https://www.linkedin.com/in/zin-w-38323b238/" className="links">
                    Linkedin
                </a>
            </div>


            <p className="hire">If you are hiring, reach out via Linkedin or email.</p>

            <p className="email">Email: zinwen12@gmail.com</p>

            <h2 className="projects">Projects</h2>
            <div className="projects-container">
                <p className="domains">Software Engineering</p>


                <div className="container2">


                    <ul class="project-list">
                        <li>
                            <div class="project-info">
                                <span class="project-title2">BMS</span>
                                <span class="description">— Individual Console App Project with C++ and MySQL</span>
                            </div>
                            <a href="https://github.com/AricChong12/Workshop-1" class="code-link">SOURCE</a>
                        </li>

                        <li>
                            <div class="project-info">
                                <span class="project-title2">HMS</span>
                                <span class="description">— Team Desktop App Project with MVC architecture with API in Java</span>
                            </div>
                            <a href="https://github.com/AricChong12/OOP-Project" class="code-link">SOURCE</a>
                        </li>


                        <li>
                            <div class="project-info">
                                <span class="project-title2">BRWGo</span>
                                <span class="description">— Individual Full-Stack Web Project with HTML, CSS, JavaScript and PHP</span>
                            </div>
                            <a href="https://github.com/AricChong12/OOP-Project" class="code-link">SOURCE</a>
                        </li>



                        <li>
                            <div class="project-info">
                                <span class="project-title2">React Porfolio (This)</span>
                                <span class="description">— Portfolio Website with React JavaScript</span>
                            </div>
                            {/*<a href="#" class="code-link">SOURCE</a>*/}
                        </li>
                    </ul>




                </div>


                <p className="domains">Networking</p>


                <div className="container2">


                    <ul class="project-list">
                        <li>
                            <div class="project-info">
                                <span class="project-title2">DataComm</span>
                                <span class="description">— Team Data Communications and Networking Project</span>
                            </div>
                            <a href="https://github.com/AricChong12/DataCommProject" class="code-link">SOURCE</a>
                        </li>

                        <li>
                            <div class="project-info">
                                <span class="project-title2">LAN</span>
                                <span class="description">— Team Local Area Network Project with networking and server setup</span>
                            </div>
                            <a href="https://github.com/AricChong12/LAN-Project" class="code-link">SOURCE</a>
                        </li>



                    </ul>




                </div>


                <p className="domains">Data Science</p>


                <div className="container2">


                    <ul class="project-list">
                        <li>
                            <div class="project-info">
                                <span class="project-title2">Data Analysis</span>
                                <span class="description">— Team Statistics & Probability Project with R</span>
                            </div>
                            <a href="https://github.com/AricChong12/Statistics-and-Probability" class="code-link">SOURCE</a>
                        </li>





                    </ul>




                </div>




                <h2 className="exp">Professional Experience</h2>

                <div className="container2">


                    <ul class="project-list">
                        <li>
                            <div class="project-info">
                                <span class="project-title2">No Professional Experience</span>

                            </div>

                        </li>





                    </ul>
                </div>






                <h2 className="exp">Life Experience</h2>

                <div className="container2">


                    <ul class="project-list">
                        <li>

                            <div class="project-info">
                                <span class="project-title2">Technical Team</span>
                                <span class="description">— Developer Student Club, DSC UTeM</span>
                            </div>
                            <span class="code-link2">Nov 2025 - Present</span>


                        </li>


                        <li>

                            <div class="project-info">
                                <span class="project-title2">Game Programmer</span>
                                <span class="description">— TMAC UTeM </span>
                            </div>
                            <span class="code-link2">Nov 2024 - Present</span>


                        </li>





                        <li>

                            <div class="project-info">
                                <span class="project-title2">Deputy General Affairs</span>
                                <span class="description">— Diabolo Club UTeM</span>
                            </div>
                            <span class="code-link2">Nov 2024 - Present</span>


                        </li>




                    </ul>
                </div>

                <h2 className="exp">Competitions</h2>

                <div className="container2">


                    <ul class="project-list">
                        <li>

                            <div class="project-info">
                                <span class="project-title2">Robomaster</span>
                                <span class="description">— Team Champion with arduino ESP32 microcontroller</span>
                            </div>
                            <span class="code-link2">Dec 2025</span>


                        </li>







                    </ul>
                </div>



            </div>
        </>
    )
}

export default Intro