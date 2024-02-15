import './Skills.css'
import { useState } from "react";
export default function Skills() {

    const [currentSkill, setCurrentSkill] = useState("Languages, Libraries and Frameworks")

    const javaScript = () => {
        setCurrentSkill('JavaScript')
    }
    const html = () => {
        setCurrentSkill('HTML')
    }

    const css = () => {
        setCurrentSkill('CSS')
    }
    const python = () => {
        setCurrentSkill("Python")
    }

    const django = () => {
        setCurrentSkill("Django")
    }
    const aws = () => {
        setCurrentSkill("Amazon Web Service")
    }
    const stripe = () => {
        setCurrentSkill("Stripe API")
    }
    const node = () => {
        setCurrentSkill("Node.js")
    }

    const databases = () => {
        setCurrentSkill("MongoDB & PosgreSQL")
    }

    const react = () => {
        setCurrentSkill("React")
    }
    const github = () => {
        setCurrentSkill("GitHub")
    }

    const google = () => {
        setCurrentSkill("Google Oauth")
    }

    const mongoose = () => {
        setCurrentSkill("Mongoose")
    }
    const vsCode = () => {
        setCurrentSkill("Visual Studio Code")
    }
    const postman = () => {
        setCurrentSkill("Postman")
    }
    return (
        <div className="skills-container">
            <div className="skills-description">
                <img id="skills-img" src="https://i.imgur.com/arJcD1v.jpg" />
                <h1 className="skills-title">On the Job Experience</h1>
                <div className="about-skills">
                    <div className="job-title">Factor Earth 2023
                        <div className="job-role">Web Applicaiton Engineer</div>
                    </div>
                    <div className="job-description">During my role at Factor Earth, I developed within a small collaborative team, actively contributing to the full stack development and maintenance of three key applications.
                        <div className="job-project-title">Record</div>
                        <div className="job-project-description">
                            One significant project I worked on was Record—a Web App Software (WAP) crafted with C#, Graphql, and React.
                            Within the Record app, I played a hands-on role in designing and implementing a form generation system. This system, an integral part of the Record application, empowered archaeologists to autonomously create and customize forms tailored to diverse state requirements.
                            My contributions involved leveraging my development skills to ensure a seamless integration, ultimately facilitating a more efficient and personalized data collection, reporting and user tailored and patented exporting process for our users.
                        </div>
                        <div className="job-project-title">Explore and Curate</div>
                        <div className="job-project-description">
                            Additionally, I worked on Curate — a Content Management System (CMS) specifically designed for Explore. In this role,
                            I leveraged Graphql and React technologies, enhancing the user experience through innovative spherical interfaces within the Explore app.
                        </div>
                    </div>
                    <div className="job-title second">General Assembly 2022-2023
                        <div className="job-role">Instructor</div>
                    </div>
                    <div className="job-description">An Instructional role in guiding adult learners through a comprehensive Full Stack Immersive Program. This multifaceted position involved not only delivering instruction but actively contributing to the development of the curriculum. I immersed myself in the technologies taught, cultivating an in-depth understanding to effectively bolster students' knowledge.
                        <div className="job-project-description">
                            The responsibilities extended but not limited to developing testing to grade student material
                            and offering on-the-spot problem-solving and debugging support.
                            The emphasis on real-time collaboration was evident through consistent teamwork with co-instructors and active engagement with students.
                        </div>
                        <div className="job-project-description">
                            Lastly, providing perspective on building in an agile work environment
                            and instilling a professional Git workflow.
                            Leading to a comprehensive understanding of Full Stack Development
                            and its practical application in a professional setting.
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-board">
                <div className="display"><h1 className="skill-text">{currentSkill}</h1></div>
                <div className="skills-list">
                    <p onClick={javaScript} className="icon-container"><i id="i" class="fa-brands fa-js"></i></p>
                    <p onClick={html} className="icon-container"><i id="i" class="fa-brands fa-html5"></i></p>
                    <p onClick={css} className="icon-container"><i id="i" class="fa-brands fa-css3-alt"></i></p>
                    <p onClick={python} className="icon-container"><i id="i" class="fa-brands fa-python"></i></p>
                    <p onClick={django} className="icon-container">dj</p>
                    <p onClick={aws} className="icon-container"><i id="i" class="fa-brands fa-aws"></i></p>
                    <p onClick={stripe} className="icon-container"><i id="i" class="fa-brands fa-stripe"></i></p>
                    <p onClick={node} className="icon-container"><i id="i" class="fa-brands fa-node-js"></i></p>
                    <p onClick={databases} className="icon-container">DB</p>
                    <p onClick={react} className="icon-container"><i id="i" class="fa-brands fa-react"></i></p>
                    <p onClick={github} className="icon-container"><i id="i" class="fa-brands fa-github"></i></p>
                    <p onClick={mongoose} className="icon-container">MG</p>
                    <p onClick={google} className="icon-container"><i id="i" class="fa-brands fa-google"></i></p>
                    <p onClick={vsCode} className="icon-container">VS</p>
                    <p onClick={postman} className="icon-container"><i id="i" class="fa-solid fa-person"></i></p>
                </div>
                <div className="extra-space"></div>
            </div>
        </div>
    )
}