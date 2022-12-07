import "./Landing.css"

export default function Landing() {

    return (
        <div className="landing-container">
            <div className="spacer"></div>
            <div className="top-section">
                <div className="space-one"><img className="image-one" src="https://i.imgur.com/RWKOaGk.jpg" /></div>
                <div className="landing-text">
                    <h1 className="name">Sarah Rose</h1>
                    <p className="title">Full Stack Web Developer</p>
                    <p className="about">I am a Colorado based Software Engineer taking my eye for design and problem solving love to the tech field.
                        Currently teaching Full Stack as an Instructor with General Assembly. </p>

                </div>
            </div>
            <div className="bottom-section">
                <div className="space-two"></div>
                <div className="contact-info">
                    <a className="info email" href="mailto:sarahrosehumenik@gmail.com">Email: Sarahrosehumenik@gmail.com</a>
                    <a href="" className="info repo"> ➤ Portfolio Repo</a>
                    <div className="logos-container">
                        <a href="https://github.com/sarahrosehumenik"><i id="contact-logo" class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/sarah-rose33/"><i id="contact-logo" class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="space-three"><img className="image-two" src="https://i.imgur.com/quIOZhy.jpg" /></div>
            </div>



        </div>
    )
}