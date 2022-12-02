import "./Landing.css"


export default function Landing() {
    return (
        <div className="landing-container">
            <div className="spacer"></div>
      <div className="top-section"> 
      <div className="space-one"><img className="image-one" src="https://i.imgur.com/RWKOaGk.jpg"/></div>
      <div className="landing-text">
          <h1 className="name">Sarah Rose</h1>
          <p className="title">Full Stack Web Developer</p>
          <p className="about">I am a Colorado based Software Engineer taking my eye for design and problem solving love to the tech field. 
          Currently teaching Full Stack as an Insturctor with General Assembly. </p>
         
    </div>
       </div>
       <div className="bottom-section">
           <div className="space-two"></div>
           <div className="contact-info">
               <p>Email</p>
               <p>links</p>
               </div>
               <div className="space-three"><img className="image-two" src="https://i.imgur.com/quIOZhy.jpg"/></div>
       </div>
       

 
  </div>
    )
}