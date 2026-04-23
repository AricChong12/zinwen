import './Intro.css';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiWix } from "react-icons/si";

import { SiLinktree } from "react-icons/si";

import { SiGoogle } from "react-icons/si";




function Intro() {
    return (
        <>
            <h2 className="name importants">Zin Wen</h2>
            <p className="job"><span className="importants">Network Engineer</span> based in<span className="importants"> Negeri Sembilan,
                Malaysia</span>
            </p>



            <p className="intro">
                I am a <span className="importants">passionate and committed</span> individual who <span className="importants">designs and builds wired or wireless networks for work</span>.
                I am also a tech enthusiast who <span className="importants">designs, codes and deploy softwares for hobby</span>. Not only that, I 
                also <span className="importants">enjoy exploring latest tech advancements and upskilling myself by taking courses in any sub-domains of
                Computer Science</span> just for fun. I do also <span className="importants">participating, planning, managing and running tech events to
                hone my soft skills and extra technical skills</span>. Sometimes, I would <span className="importants">sign myself up for tech gathering
                events or tech hackathons, even business</span>.
                <div className="academics importants">
                    Bachelor of Computer Science (Computer Networking) @ UTeM
                </div>

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

            <p className="email">Email: <a className="importants" href="mailto:zinwen12@gmail.com">zinwen12@gmail.com</a></p>
            <p className="phone">Phone: <span className="importants">+6018-3952355</span></p>



            <h2 className="projects">Notable Projects</h2>
            <div className="projects-container">
                <p className="domains">Software Engineering</p>


                <div className="container2">


                    <ul class="project-list">
                        <li>
                            <div class="project-info">
                                <span class="project-title2">BMS</span>
                                <span class="description"> — Bookshop Management System Console App with C++ and MySQL (Individual)</span>
                            </div>
                            <a href="https://github.com/AricChong12/Workshop-1" class="code-link">SOURCE</a>
                        </li>

                        <li>
                            <div class="project-info">
                                <span class="project-title2">HMS</span>
                                <span class="description"> — Hotel Management System Desktop App with MVC architecture with Printing API in Java (Team)</span>
                            </div>
                            <a href="https://github.com/AricChong12/OOP-Project" class="code-link">SOURCE</a>
                        </li>


                        <li>
                            <div class="project-info">
                                <span class="project-title2">BRWGo</span>
                                <span class="description"> — Full-Stack Business Registration Website with HTML, CSS, JavaScript and PHP (Individual)</span>
                            </div>
                            <a href="https://github.com/AricChong12/WebAppProject" class="code-link">SOURCE</a>
                        </li>



                        <li>
                            <div class="project-info">
                                <span class="project-title2">React Porfolio (This)</span>
                                <span class="description"> — My Portfolio Website, coded with React, suitable for web and mobile views (Individual)</span>
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
                                <span class="description"> — A beginner networking project that introduces me to networking domain (Team)</span>
                            </div>
                            <a href="https://github.com/AricChong12/DataCommProject" class="code-link">SOURCE</a>
                        </li>

                        <li>
                            <div class="project-info">
                                <span class="project-title2">LAN</span>
                                <span class="description"> — A Local Area Network Project with networking configurations and servers setup through Debian (Team)</span>
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
                                <span class="description"> — A mathematical project that need me and my team to analyze real-world data with R (Team)</span>
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



                        <li>

                            <div class="project-info">
                                <span class="project-title2">Language Student</span>
                                <span class="description"> — AToJ Japanese N5N4</span>
                            </div>



                        </li>




                    </ul>
                </div>


                <h2 className="exp">University Subjects</h2>

                <div className="container3">


                    <ul class="subjects">
                        <li>



                            <div class="subjects-sem">


                                <div class="format-each-sem">
                                    <h4 class="format">SEM 1</h4>
                                    <li class="subjects-title">Philosophy and Current Issues</li>
                                    <li class="subjects-title">English for Academic Purposes</li>
                                    <li class="subjects-title">Linear Algebra and Discrete Mathematics</li>
                                    <li class="subjects-title">Multimedia Systems</li>
                                    <li class="subjects-title">Programming Techniques</li>
                                    <li class="subjects-title">Computer Organization and Architecture</li>

                                </div>

                                <br/>
                                
                                <div class="format-each-sem">
                                    <h4 class="format">SEM 2</h4>
                                    <li class="subjects-title">Calculus and Numerical Methods</li>
                                    <li class="subjects-title">Human Computer Interaction</li>
                                    <li class="subjects-title">Data Structure and Algorithms</li>
                                    <li class="subjects-title">Database</li>
                                    <li class="subjects-title">Data Communication and Networking</li>
                                    <li class="subjects-title">Web Application Development</li>

                                </div>
                                
                                <br/>

                                <div class="format-each-sem">
                                    <h4 class="format">SEM 3</h4>
                                    <li class="subjects-title">Academic Writing</li>
                                    <li class="subjects-title">Local Area Network</li>
                                    <li class="subjects-title">Object-Oriented Programming</li>
                                    <li class="subjects-title">Operating System</li>
                                    <li class="subjects-title">Ethnics and Civilizations</li>
                                    <li class="subjects-title">Statistics and Probability</li>
                                    <li class="subjects-title">Workshop I</li>

                                </div>

                                <br/>

                                <div class="format-each-sem">
                                    <h4 class="format">SEM 4</h4>
                                    <li class="subjects-title">Arts</li>
                                    <li class="subjects-title">Aritificial Intelligence</li>
                                    <li class="subjects-title">Software Engineering</li>
                                    <li class="subjects-title">Wide Area Network</li>
                                    <li class="subjects-title">Network Analysis and Design</li>
                                    <li class="subjects-title">German Language</li>
                                    <li class="subjects-title">Fiber Optics</li>

                                </div>
                                





                            </div>



                        </li>







                    </ul>
                </div>







                <h2 className="exp">Hackathons</h2>

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