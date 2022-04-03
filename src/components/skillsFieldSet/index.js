import Skill from "../skill";
import {  LegendFieldSet } from "../aboutMe/style";
import { SkillContainer, FieldSetContainer } from "./style";

export default function FieldsetSkills() {

return(
    <FieldSetContainer>
      <LegendFieldSet>Skills</LegendFieldSet>
      <SkillContainer>
        <Skill
          name="Python"
          id="animation"
          color="#6f6fda"
          />

        <Skill 
          name="HTML" 
          id="animation1"  
          color="#FFF" 
        />

        <Skill
          name="Java"
          id="animation"
          color="chartreuse"
        />

        <Skill 
          name="CSS" 
          id="animation1"  
          color="orange"
        />

        <Skill
          name="C#"
          id="animation"
          color="#FF6347"
          />
        <Skill
          name="React Native"
          id="animation1"
          color="red"
          />
        <Skill
          name="React"
          id="animation"
          color="#00CED1"
          />
        <Skill
          name="JavaScript"
          id="animation1"
          color="gray"
          />
        <Skill
          name="C"
          id="animation"
          color="yellow"
          />
      </SkillContainer>
    </FieldSetContainer>
)
}