import AboutMe from "../aboutMe";
import FieldsetSkills from "../../sections/skillsFieldSet";
import { 
  Container,
  ContainerGrid, 
  Content, 
  ParagraphCustom,
  WelcomeColor, 
  WordCustom } 
from "./style";
import { i18n } from '../../utils/translate/i18n';


export default function SkillsAboutMe() {
  return(
   <Container>
      <ContainerGrid>
        <Content>
          <WelcomeColor>
            <p id="animation1"><ParagraphCustom>{i18n.t('welcome')}</ParagraphCustom></p>
            <p id="animation2">{i18n.t('toMyPortfolio')}</p>
            <p id="animation3">{i18n.t("iAm")} <ParagraphCustom>Newton Perazzo</ParagraphCustom>.</p>
            <p id="animation4">{i18n.t("lets")} <WordCustom>{i18n.t("code")}</WordCustom></p>
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