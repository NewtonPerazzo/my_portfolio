import imgHeader from "../../assets/coding.png";
import { ProfileImage } from "../skillsAboutMe/style";
import SocialMedia from "../socialMedia";
import { ImageHeader, HeaderContainer, TitleHeader } from "./style";
import imgNewton from "../../assets/newton.jpeg";

export default function Header() {
  return (
    <HeaderContainer>
        {/* <ProfileImage src={imgNewton}/> */}
          <TitleHeader id="animationHeader">
            <p style={{fontSize: 32}}>NEWTON PERAZZO</p>
            <ImageHeader id="animationHeader" src={imgHeader} alt="img-header" />
          </TitleHeader>
          <div>
            <SocialMedia id="animationHeader" />
          </div>
      </HeaderContainer>
  );
}
