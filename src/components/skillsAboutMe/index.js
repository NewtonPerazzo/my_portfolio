import imgNewton from "../../assets/newton.jpeg";
import AboutMe from "../aboutMe";
import FieldsetSkills from "../skillsFieldSet";
import { 
  Container,
  ContainerGrid, 
  Content, 
  ParagraphCustom, 
  ProfileImage, 
  WelcomeColor, 
  WordCustom } 
from "./style";


export default function SkillsAboutMe() {
  return(
   <Container>
      <ContainerGrid>
        <FieldsetSkills />

        <Content>
          <WelcomeColor>
            <ParagraphCustom>Welcome</ParagraphCustom>
            to my portfolio.<br/>
            I'm <ParagraphCustom>Newton Perazzo</ParagraphCustom>
            Let's <WordCustom>code?</WordCustom>
          </WelcomeColor>
        </Content>
          
        <AboutMe /> 

      </ContainerGrid>
      <ProfileImage 
        src={imgNewton}
        alt="Newton"
      />
      
    </Container>
  )
}