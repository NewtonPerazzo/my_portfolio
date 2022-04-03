import imgHeader from "../../assets/coding.png";
import SocialMedia from "../socialMedia";
import { ImageHeader, HeaderContainer, TitleHeader } from "./style";

export default function Header() {
  return (
      <HeaderContainer>
        <TitleHeader>
          <p>NEWTON PERAZZO</p>
          <ImageHeader src={imgHeader} alt="img-header" />
        </TitleHeader>
        <div>
          <SocialMedia/>
        </div>
      </HeaderContainer>
  );
}
