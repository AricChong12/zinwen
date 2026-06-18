import './Intro.css';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiWix } from "react-icons/si";

import { SiLinktree } from "react-icons/si";

import { SiGoogle } from "react-icons/si";




function Intro() {
    return (
        <>
            <img
                src="/Me.png" // Direct link to your file
                alt="zinwen"
                style={{ width: '100px', height: '100px', objectFit: 'cover', border: '3px solid #00FF00', borderWidth: '5px' }}
                className="rounded-pill personal_image"
                id="about"
            />


            <h2 className="name importants">Zin Wen</h2>
            <p className="job"><span className="importants2">Network Engineer</span> based in<span className="importants2"> Negeri Sembilan,
                Malaysia</span>
            </p>



            <p className="intro">
                I am a <span className="importants2">passionate and committed</span> individual who <span className="importants2">designs and builds wired or wireless networks for work</span>.
                I am also a tech enthusiast who <span className="importants2">designs, codes and deploys software for hobby</span>. Not only that, I
                also <span className="importants2">enjoy exploring latest tech advancements and upskilling myself by taking workshops or online courses in any sub-domains of
                    Computer Science</span> just for fun. I do also <span className="importants2">participating, planning, managing, running and hosting tech events to
                        hone my soft skills and extra technical skills</span>. Sometimes, I would <span className="importants2">sign up for tech gathering,
                            hackathons or business events</span>.
                <div className="academics importants">
                    Bachelor of Computer Science (Computer Networking) @ UTeM
                </div>

            </p>



            <div className="container">
                <p className="links2">Languages: English, Malay, Chinese, Japanese, German</p>



            </div>



            <div className="container-icon">

                <div className="items">
                    <FaGithub size={25} color="white" />
                    <a href="https://github.com/AricChong12" className="links">
                        GitHub
                    </a>
                </div>


                <div className="items">
                    <FaLinkedin size={25} color="white" />
                    <a href="https://www.linkedin.com/in/zin-w-38323b238/" className="links">
                        LinkedIn
                    </a>
                </div>


                <div className="items">
                    <SiWix size={30} color="white" />
                    <a href="https://12aaronchong.wixsite.com/zinwen" className="links">
                        Portfolio
                    </a>
                </div>


                <div className="items">
                    <SiLinktree size={20} color="white" />
                    <a href="https://linktr.ee/zinwen" className="links">
                        Linktree
                    </a>
                </div>


                <div className="items">
                    <SiGoogle size={18} color="white" />
                    <a href="https://developers.google.com/profile/u/zinwen" className="links">
                        Google Developer
                    </a>
                </div>

            </div>




            <p className="hire">If you are hiring, reach out via LinkedIn or Email.</p>

            <p className="email">Email: <a className="importants email-link" href="mailto:zinwen12@gmail.com">zinwen12@gmail.com</a></p>
            <p className="phone">Phone: <a className="importants phone-link" href="tel:+60183952355">+60183952355</a></p>



            <h2 className="projects" id="project">Notable Projects</h2>
            <div className="projects-container">
                <p className="domains">Software Engineering</p>


                <div className="container2">


                    <ul class="project-list">
                        <p className="project-title3">1. Bookshop Management System</p>
                        <img src="/BMS.png" alt="BMS-Project" className="project-imgs"></img>

                        <li>
                            <div class="project-info">
                                <span class="project-title2">BMS</span>
                                <span class="description"> - An Individual Console Application project with C++ and MySQL, The development process covers analysis, design and implementation phases in a structured approach</span>
                            </div>
                            <a href="https://github.com/AricChong12/Workshop-1" class="code-link">SOURCE</a>
                        </li>

                        <br />

                        <p className="project-title3">2. Hotel Management System</p>
                        <img src="/HMS.png" alt="HMS-Project" className="project-imgs"></img>
                        <li>
                            <div class="project-info">
                                <span class="project-title2">HMS</span>
                                <span class="description"> — A Team Desktop Application project that is built with Java and MySQL, it is built on the MVC archicture, demonstrated Printing API integration</span>
                            </div>
                            <a href="https://github.com/AricChong12/OOP-Project" class="code-link">SOURCE</a>
                        </li>


                        <br />

                        <p className="project-title3">3. Business Registration Website</p>
                        <img src="/BRWGo.png" alt="BRWGo-Project" className="project-imgs"></img>
                        <li>
                            <div class="project-info">
                                <span class="project-title2">BRWGo</span>
                                <span class="description"> — An individual website project with a business solution for business registration automation and the website is code with HTML, CSS, JavaScript and PHP, the website is deployed on university cloud server</span>
                            </div>
                            <a href="https://github.com/AricChong12/WebAppProject" class="code-link">SOURCE</a>
                        </li>

                        <br />

                        <p className="project-title3">4. ZinWen Portfolio Website</p>
                        <img src="/zinwen.png" alt="zinwen" className="project-imgs"></img>
                        <li>
                            <div class="project-info">
                                <span class="project-title2">Portfolio</span>
                                <span class="description"> — An individual portfolio website project with React + Vite, Bootstrap, CSS used to demonstrate my capabilities in coding realm and deployed on Netlify</span>
                            </div>
                            <a href="https://github.com/AricChong12/zinwen" class="code-link">SOURCE</a>
                        </li>
                    </ul>




                </div>


                <p className="domains">Computer Networking</p>


                <div className="container2">


                    <ul class="project-list">
                        <p className="project-title3">1. DataComm Project</p>
                        <img src="/datacomm.png" alt="datacomm" className="project-imgs"></img>
                        <li>
                            <div class="project-info">
                                <span class="project-title2">DataComm</span>
                                <span class="description"> — A beginner Team Networking project that introduces students about the networking fundamentals, configurations, network services and some WAN protocols</span>
                            </div>
                            <a href="https://github.com/AricChong12/DataCommProject" class="code-link">SOURCE</a>
                        </li>

                        <br />

                        <p className="project-title3">2. LAN Project</p>
                        <img src="/lan.png" alt="lan" className="project-imgs"></img>
                        <li>
                            <div class="project-info">
                                <span class="project-title2">LAN</span>
                                <span class="description"> — A Local Area Network Team Project with network design and IP configurations, network infrastructure configuartions includes VLAN and Inter-VLAN, STP, EtherChannel, Port Security and network services usch as DHCP, DNS, Apache Web Server, TFTP Server</span>
                            </div>
                            <a href="https://github.com/AricChong12/LAN-Project" class="code-link">SOURCE</a>
                        </li>



                    </ul>




                </div>


                <p className="domains">Data Science</p>


                <div className="container2">


                    <ul class="project-list">
                        <p className="project-title3">1. Data Analysis with R</p>
                        <img src="/data-analysis.png" alt="data-analysis" className="project-imgs"></img>
                        <li>
                            <div class="project-info">
                                <span class="project-title2">Data Analysis</span>
                                <span class="description"> — A Team Mathematical project that requires me to analyze and plot real-world data with R programming language</span>
                            </div>
                            <a href="https://github.com/AricChong12/Statistics-and-Probability" class="code-link">SOURCE</a>
                        </li>





                    </ul>




                </div>




                <h2 className="exp" id="exp">Professional Experience</h2>

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
                                {/*<span class="description"> — Developer Student Club, DSC UTeM</span>*/}
                            </div>



                        </li>
                        <p class="description2">Developer Student Club UTeM</p>
                        <p class="description2">Nov 2025 - Present</p>


                        <li>

                            <div class="project-info">
                                <span class="project-title2">Game Programmer</span>
                                {/*<span class="description"> — TMAC UTeM </span>*/}
                            </div>



                        </li>
                        <p class="description2">TMAC UTeM</p>
                        <p class="description2">Nov 2024 - Jun 2026</p>





                        <li>

                            <div class="project-info">
                                <span class="project-title2">Deputy General Affairs</span>
                                {/*<span class="description"> — Diabolo Club UTeM</span>*/}
                            </div>



                        </li>
                        <p class="description2">Diabolo Club UTeM</p>
                        <p class="description2">Nov 2024 - Apr 2025</p>



                        <li>

                            <div class="project-info">
                                <span class="project-title2">Language Student</span>
                                {/*<span class="description"> — AToJ Japanese N5N4</span>*/}
                            </div>



                        </li>
                        <p class="description2">AToJ Japanese N5N4</p>
                        <p class="description2">Mar 2025 - Oct 2025</p>




                    </ul>
                </div>


                <h2 className="exp" id="academics">University Subjects</h2>

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

                                <br />

                                <div class="format-each-sem">
                                    <h4 class="format">SEM 2</h4>
                                    <li class="subjects-title">Calculus and Numerical Methods</li>
                                    <li class="subjects-title">Human Computer Interaction</li>
                                    <li class="subjects-title">Data Structure and Algorithms</li>
                                    <li class="subjects-title">Database</li>
                                    <li class="subjects-title">Data Communication and Networking</li>
                                    <li class="subjects-title">Web Application Development</li>

                                </div>

                                <br />

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

                                <br />

                                <div class="format-each-sem">
                                    <h4 class="format">SEM 4</h4>
                                    <li class="subjects-title">Arts</li>
                                    <li class="subjects-title">Artificial Intelligence</li>
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







                <h2 className="exp" id="extras">Hackathons</h2>

                <div className="container3">


                    <ul class="project-list">
                        <li>

                            <div class="project-info">
                                <span class="project-title2">Robomaster 2025 - Team Champion</span>

                            </div>



                        </li>







                    </ul>
                </div>





                <h2 className="exp" id="volunteer">Volunteerships</h2>

                <div className="container3">


                    <ul class="project-list">
                        <li>

                            <div class="project-info">
                                <span class="project-title2">Rebirth 2024 UTeM - Diabolo Performer</span>

                            </div>



                        </li>

                        <li>

                            <div class="project-info">
                                <span class="project-title2">CTRL+ALT+PWN 2026 - Protocol Bureau</span>

                            </div>



                        </li>


                        <li>

                            <div class="project-info">
                                <span class="project-title2">Language and Culture Carnival 2026 UTeM - German Booth Volunteer</span>

                            </div>



                        </li>





                    </ul>
                </div>

                <h2 className="exp" id="course">Courses</h2>

                <div className="container3">


                    <ul class="project-list">
                        <li>

                            <div class="project-info">
                                <span class="project-title2">Bug Bounty Hunting - 0day Academy</span>

                            </div>



                        </li>







                    </ul>
                </div>


                <footer className="footer">

                

                    <div className="footer-line"></div>

                    <div className="resume-section">
                        <h2 className="resume-title">My Resume</h2>

                        <p className="resume-text">
                            Download my latest resume for more details about my skills and experience.
                        </p>

                        <a
                            href="https://drive.google.com/file/d/1Wwijt4U8rVDdqfbbRlZUa1YNO1eo6JR4/view?usp=drive_link"
                            
                            className="resume-btn"
                        >
                            Download Now
                        </a>
                    </div>


                    <p className="footer-name">
                        © 2026 Zin Wen
                    </p>

                    <p className="footer-text">
                        Built with React + Vite + Bootstrap
                    </p>

                    <div className="footer-links">

                        <a
                            href="https://github.com/AricChong12"
                            className="footer-link"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/zin-w-38323b238/"
                            className="footer-link"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://12aaronchong.wixsite.com/zinwen"
                            className="footer-link"
                        >
                            Wix
                        </a>






                    </div>

                    



                </footer>






            </div>
        </>
    )
}

export default Intro