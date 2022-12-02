import "./Landing.css"


export default function Landing() {
    return (
        <div className="landing-container">
            <div className="spacer"></div>
      <div className="top-section"> 
      <div className="space-one"><img className="image-one" src="https://i.imgur.com/Tt4EQDN.jpg"></img></div>
      <div className="landing-text">
          <h1 className="name">Sarah Rose</h1>
          <p className="title">Full Stack Web Developer</p>
         
    </div>
       </div>
       <div className="bottom-section">
           <div className="space-two"></div>
           <div className="contact-info">
               <p>Email</p>
               <p>links</p>
               </div>
               <div className="space-three"></div>
       </div>
       

 
  </div>
    )
}