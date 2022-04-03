import imgInstagram from "../../assets/instagram.png";
import imgLinkedin from "../../assets/linkedin.png";
import imgEmail from "../../assets/email.png";
import { SocialMediaContainer, SocialMediaImage } from "./style";


export default function SocialMedia() {

return(
  <div>
    <SocialMediaContainer>
        
        <a
          href="https://www.linkedin.com/in/newton-perazzo/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
       <SocialMediaImage src={imgLinkedin} alt="img-linkedin"/>
        </a>
        <a
          href="mailto:perazzoneto99@hotmail.com"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
        <SocialMediaImage src={imgEmail} alt="img-email" />
        </a>
        <a
          href="https://www.instagram.com/perazzoneto/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
        <SocialMediaImage src={imgInstagram} alt="img-instagram"/>
        </a>
      </SocialMediaContainer>
  </div>
)
}