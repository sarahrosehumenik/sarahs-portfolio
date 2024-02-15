import "./Landing.css"

export default function Landing() {

    return (
        <div className="landing-container">
            <div className="spacer"></div>
            <div className="top-section">
                <div className="space-one"><img className="image-one" src="https://i.imgur.com/RWKOaGk.jpg" /></div>
                <div className="landing-text">
                    <h1 className="name">Sarah Rose Blair</h1>
                    <p className="title">Full Stack Web Developer</p>
                    <p className="about">I am an East Coast-based Software Engineer,
                        merging my passion for design and problem-solving in the tech field.
                        Outside of coding, I share my life with my favorite gaming partner,
                        my spouse, and our home is completed by five adorable cats.
                        Balancing the dynamic world of technology with companionship,
                        I find inspiration in both my professional and life pursuits.
                    </p>

                </div>
            </div>
            <div className="bottom-section">
                <div className="space-two"></div>
                <div className="contact-info">
                    <a className="info email" href="mailto:sarahrosehumenik@gmail.com">Email: Sarahrosehumenik@gmail.com</a>
                    <a href="https://github.com/sarahrosehumenik/sarahs-portfolio" className="info repo"> ➤ Portfolio Repo</a>
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