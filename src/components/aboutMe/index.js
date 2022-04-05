import { FieldSetContainer, BodyAboutMe, LegendFieldSet } from "./style";
import { i18n } from '../../utils/translate/i18n.js';

export default function AboutMe() {

  return(
      <FieldSetContainer>
        <LegendFieldSet>
          {i18n.t("aboutMe")}
        </LegendFieldSet>
        <BodyAboutMe>
          <p id="animationAbout"> {i18n.t("hello")}</p>
          <p id="animationAbout"> {i18n.t("myName")}. </p>
          <p id="animationAbout"> {i18n.t("from")} </p>
          <p id="animationAbout">
            {i18n.t("study")}
          </p>
          <p id="animationAbout">
            {i18n.t("loveCode")}
          </p>
          <p id="animationAbout">
            {i18n.t("thanks")}
          </p>
        </BodyAboutMe>
      </FieldSetContainer>
  )
}