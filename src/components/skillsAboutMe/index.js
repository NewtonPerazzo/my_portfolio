import imgNewton from "../../assets/newton.jpeg";
import AboutMe from "../aboutMe";
import FieldsetSkills from "../skillsFieldSet";
import SocialMedia from "../socialMedia";
export default function SkillsAboutMe() {

return(
  // <div style={{display: "flex", backgroundImage: `url(${imgNewton})`, backgroundRepeat: 'no-repeat', WebkitBackgroundSize:'cover', opacity: 1}}>
  <div style={{display: "flex", alignItems: 'center'}}>
    <div className="grid">
      <FieldsetSkills />


      <div style={{width: '100%', padding: 30, justifyContent: 'center' }}>
        <p className="welcome">
          <p style={{color: 'rgb(6, 184, 255)', fontSize: 38}}>Welcome</p>
          to my portfolio.<br/>
          I'm <p style={{color: 'rgb(6, 184, 255)', fontSize: 38}}>Newton Perazzo</p>
          Let's <a href="#" style={{textDecoration: 'underline', color: 'chartreuse', fontWeight: 'normal'}}>code?</a></p>
      </div>
        
      <AboutMe /> 

      <SocialMedia />
    </div>
    <img 
          className="img-newton"
          src={imgNewton}
          alt="Newton"
        />
    </div>
)
}