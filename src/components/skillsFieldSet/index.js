import Skill from "../skill";

export default function FieldsetSkills() {

return(
    <fieldset fieldset className="infos">
      <legend style={{ color: "chartreuse", fontSize: 18 }}>Skills</legend>
      <div className="skills-div">
        <Skill
          name="Python"
          id="animation1"
          color="#6f6fda"
          />

        <Skill name="HTML" id="animation2"  color="#FFF" />


        <Skill
          name="Java"
          id="animation2"
          color="chartreuse"
          />

        <Skill name="CSS" id="animation1"  color="orange"/>

        <Skill
          name="C#"
          id="animation1"
          color="#FF6347"
          />
        <Skill
          name="React Native"
          id="animation2"
          color="brown"
          />
        <Skill
          name="React"
          id="animation2"
          color="#00CED1"
          />
        <Skill
          name="JavaScript"
          id="animation2"
          color="gray"
          />
        <Skill
          name="C"
          id="animation2"
          color="yellow"
          />
       
      </div>
    </fieldset>
)
}