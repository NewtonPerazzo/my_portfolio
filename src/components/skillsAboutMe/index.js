import imgNewton from "../../assets/newton.jpeg";
import AboutMe from "../aboutMe";
import FieldsetSkills from "../skillsFieldSet";

export default function SkillsAboutMe() {

return(
  <div style={{display: "flex"}}>
  <div className="grid">
    <FieldsetSkills />


    <div style={{width: '100%', padding: 30 }}>
      <p className="welcome">
        <p style={{color: 'rgb(6, 184, 255)', fontSize: 38}}>Welcome</p>
        to my portfolio.<br/>
        I'm <p style={{color: 'rgb(6, 184, 255)', fontSize: 38}}>Newton Perazzo</p>
        Let's <a style={{textDecoration: 'underline', color: 'chartreuse', fontWeight: 'normal'}}>code?</a></p>
    </div>
      
    <AboutMe /> 
    <AboutMe /> 
  </div>
  <img 
        className="img-newton"
        src={imgNewton}
        alt="Newton"
      />
    </div>
)
}