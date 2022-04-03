import imgInstagram from "../../assets/instagram.png";
import imgLinkedin from "../../assets/linkedin.png";
import imgEmail from "../../assets/email.png";
import { SocialMediaContainer, SocialMediaImage, Link } from "./style";


export default function SocialMedia() {

return(
    <SocialMediaContainer>
      <Link
        href="https://www.linkedin.com/in/newton-perazzo/"
        target="_blank"
        rel="noreferrer"
      >
        <SocialMediaImage src={imgLinkedin} alt="img-linkedin"/>
      </Link>
      <Link
        href="mailto:perazzoneto99@hotmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <SocialMediaImage src={imgEmail} alt="img-email" />
      </Link>
      <Link
        href="https://www.instagram.com/perazzoneto/"
        target="_blank"
        rel="noreferrer"
      >
        <SocialMediaImage src={imgInstagram} alt="img-instagram"/>
      </Link>
    </SocialMediaContainer>
  )
}