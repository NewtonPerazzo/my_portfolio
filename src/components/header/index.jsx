import imgHeader from "../../assets/coding.png";
import SocialMedia from "../socialMedia";
import { ImageHeader } from "./style";

export default function Header() {
  return (
      <Header>
        <div className="titleHeader">
          <p>NEWTON PERAZZO</p>
          <ImageHeader src={imgHeader} alt="img-header" />
        </div>
        <div>
          <SocialMedia/>
        </div>
      </Header>
  );
}
