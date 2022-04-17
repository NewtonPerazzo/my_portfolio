import imgHeader from "../../assets/coding.png";
// import { ProfileImage } from "../bodyContent/style";
import SocialMedia from "../../components/socialMedia";
import { ImageHeader, HeaderContainer, TitleHeader, NameHeader } from "./style";
// import imgNewton from "../../assets/newton.jpeg";

export default function Header() {
  return (
    <HeaderContainer>
      {/* <ProfileImage src={imgNewton}/> */}
      <TitleHeader>
        <NameHeader id="animationHeader">NEWTON PERAZZO</NameHeader>
        <ImageHeader id="animationHeader" src={imgHeader} alt="img-header" />
      </TitleHeader>
      <div>
        <SocialMedia />
      </div>
    </HeaderContainer>
  );
}
