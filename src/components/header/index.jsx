import imgHeader from "../../assets/coding.png";
import { ProfileImage } from "../skillsAboutMe/style";
import SocialMedia from "../socialMedia";
import { ImageHeader, HeaderContainer, TitleHeader } from "./style";
import imgNewton from "../../assets/newton.jpeg";

export default function Header() {
  return (
      <HeaderContainer>
          <ProfileImage src={imgNewton}/>
          <TitleHeader>
            <p>NEWTON PERAZZO</p>
            <ImageHeader src={imgHeader} alt="img-header" />
          </TitleHeader>
          <SocialMedia/>
      </HeaderContainer>
  );
}
