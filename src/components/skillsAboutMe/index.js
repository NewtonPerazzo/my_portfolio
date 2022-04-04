import AboutMe from "../aboutMe";
import FieldsetSkills from "../skillsFieldSet";
import { 
  Container,
  ContainerGrid, 
  Content, 
  ParagraphCustom,
  WelcomeColor, 
  WordCustom } 
from "./style";


export default function SkillsAboutMe() {
  return(
   <Container>
      <ContainerGrid>
        <Content>
          <WelcomeColor>
            <p><ParagraphCustom>Welcome</ParagraphCustom></p>
            <p>to my portfolio.</p>
            <p>I'm <ParagraphCustom>Newton Perazzo</ParagraphCustom></p>
            <p>Let's <WordCustom>code?</WordCustom></p>
          </WelcomeColor>
        </Content>
        
        <div>
          <FieldsetSkills />
        </div>

        <div>
          <AboutMe /> 
        </div>
      </ContainerGrid>
    </Container>
  )
}