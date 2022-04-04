import { useState } from "react";
import { TitleTop, TitleText, SelectCustom , OptionCustom, Content, ContentSelect} from "./style.js";

export default function Title() {
  const [language, setLanguage] = useState('en');
  
  return (
    <TitleTop>
      <Content>
        <TitleText id="animationTitle">| Front-end Developer |</TitleText>  
      </Content>
      <ContentSelect>
        <SelectCustom onChange={(event) => setLanguage(event.target.value)}>
          <OptionCustom value="en">EN</OptionCustom>
          <OptionCustom value="pt">PT</OptionCustom>
        </SelectCustom>
      </ContentSelect>
    </TitleTop>
  );
}

