import { useState } from "react";
import { TitleTop, TitleText, SelectCustom , OptionCustom, Content, ContentSelect} from "./style.js";
import { i18n } from '../../utils/translate/i18n.js';

export default function Title() {
  const I18N_STORAGE_KEY = "i18nextLng";
  const [language, setLanguage] = useState(localStorage.getItem(I18N_STORAGE_KEY) || "EN");
  const handleLanguage = (event) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    setLanguage(event.target.value);
    window.location.reload();
  };

  console.log(language)

  return (
    <TitleTop>
      <Content>
        <TitleText id="animationTitle">| {i18n.t('title')} |</TitleText>  
      </Content>
      <ContentSelect>
        <SelectCustom onChange={handleLanguage} value={language}>
          <OptionCustom value="en-US">EN</OptionCustom>
          <OptionCustom value="pt-BR">PT</OptionCustom>
        </SelectCustom>
      </ContentSelect>
    </TitleTop>
  );
}

