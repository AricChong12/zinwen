import './Intro.css';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiWix } from "react-icons/si";

import { SiLinktree } from "react-icons/si";

import { SiGoogle } from "react-icons/si";




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
                science whenever I am free. I study Bachelor of Computer
                Science (Computer Networking) at Universiti Teknikal Malaysia
                Melaka, UTeM.

            </p>

            <div className="container">
                <p className="links2">Languages : English, Malay, Chinese, Japanese, German</p>



            </div>



            <div className="container-icon">

                <div className="items">
                    <FaGithub size={25} color="#00ff00" />
                    <a href="https://github.com/AricChong12" className="links">
                        GitHub
                    </a>
                </div>


                <div className="items">
                    <FaLinkedin size={25} color="#00FF00" />
                    <a href="https://www.linkedin.com/in/zin-w-38323b238/" className="links">
                        LinkedIn
                    </a>
                </div>


                <div className="items">
                    <SiWix size={30} color="#00FF00" />
                    <a href="https://12aaronchong.wixsite.com/zinwen" className="links">
                        Portfolio
                    </a>
                </div>


                <div className="items">
                    <SiLinktree size={20} color="#00FF00" />
                    <a href="https://linktr.ee/zinwen" className="links">
                        Linktree
                    </a>
                </div>


                <div className="items">
                    <SiGoogle size={18} color="#00FF00" />
                    <a href="https://developers.google.com/profile/u/zinwen" className="links">
                        Google Developer Profile
                    </a>
                </div>

            </div>




            <p className="hire">If you are hiring, reach out via LinkedIn or Email.</p>

            <p className="email">Email: zinwen12@gmail.com</p>

            <h2 className="projects">Notable Projects</h2>
            <div className="projects-container">
                <p className="domains">Software Engineering</p>


                <div className="container2">


                    <ul class="project-list">
                        <li>
                            <div class="project-info">
                                <span class="project-title2">BMS</span>
                                <span class="description"> — Bookshop Management System Console App with C++ and MySQL</span>
                            </div>
                            <a href="https://github.com/AricChong12/Workshop-1" class="code-link">SOURCE</a>
                        </li>

                        <li>
                            <div class="project-info">
                                <span class="project-title2">HMS</span>
                                <span class="description"> — Hotel Management System Desktop App with MVC architecture with Printing API in Java</span>
                            </div>
                            <a href="https://github.com/AricChong12/OOP-Project" class="code-link">SOURCE</a>
                        </li>


                        <li>
                            <div class="project-info">
                                <span class="project-title2">BRWGo</span>
                                <span class="description"> — Full-Stack Business Registration Website with HTML, CSS, JavaScript and PHP</span>
                            </div>
                            <a href="https://github.com/AricChong12/WebAppProject" class="code-link">SOURCE</a>
                        </li>



                        <li>
                            <div class="project-info">
                                <span class="project-title2">React Porfolio (This)</span>
                                <span class="description"> — My Portfolio Website, coded with React, suitable for web and mobile views</span>
                            </div>
                            <a href="https://github.com/AricChong12/zinwen" class="code-link">SOURCE</a>
                        </li>
                    </ul>




                </div>


                <p className="domains">Computer Networking</p>


                <div className="container2">


                    <ul class="project-list">
                        <li>
                            <div class="project-info">
                                <span class="project-title2">DataComm</span>
                                <span class="description"> — A beginner networking project that introduces me to networking domain</span>
                            </div>
                            <a href="https://github.com/AricChong12/DataCommProject" class="code-link">SOURCE</a>
                        </li>

                        <li>
                            <div class="project-info">
                                <span class="project-title2">LAN</span>
                                <span class="description"> — A Local Area Network Project with networking configurations and servers setup through debian </span>
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
                                <span class="description"> — A mathematical project that need me and my team to analyze real-world data with R</span>
                            </div>
                            <a href="https://github.com/AricChong12/Statistics-and-Probability" class="code-link">SOURCE</a>
                        </li>





                    </ul>




                </div>




                <h2 className="exp">Professional Experience</h2>

                <div className="container3">


                    <ul class="project-list">
                        <li>
                            <div class="project-info">
                                <span class="project-title2">No Professional Experience</span>

                            </div>

                        </li>





                    </ul>
                </div>






                <h2 className="exp">Life Experience</h2>

                <div className="container3">


                    <ul class="project-list">
                        <li>

                            <div class="project-info">
                                <span class="project-title2">Technical Team</span>
                                <span class="description"> — Developer Student Club, DSC UTeM</span>
                            </div>



                        </li>


                        <li>

                            <div class="project-info">
                                <span class="project-title2">Game Programmer</span>
                                <span class="description"> — TMAC UTeM </span>
                            </div>



                        </li>





                        <li>

                            <div class="project-info">
                                <span class="project-title2">Deputy General Affairs</span>
                                <span class="description"> — Diabolo Club UTeM</span>
                            </div>



                        </li>




                    </ul>
                </div>

                <h2 className="exp">Competitions</h2>

                <div className="container3">


                    <ul class="project-list">
                        <li>

                            <div class="project-info">
                                <span class="project-title2">Robomaster 2025 Team Champion</span>

                            </div>



                        </li>







                    </ul>
                </div>



            </div>
        </>
    )
}

export default Intro