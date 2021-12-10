import imgInstagram from "../../assets/instagram.png";
import imgLinkedin from "../../assets/linkedin.png";
import imgEmail from "../../assets/email.png";


export default function SocialMedia() {

return(
  <div>
    <div className="div-social-media">
        
        <a
          href="https://www.linkedin.com/in/newton-perazzo/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
       <img class="img-social-media" src={imgLinkedin} alt="img-linkedin"/>
        </a>
        <a
          href="mailto:perazzoneto99@hotmail.com"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
        <img class="img-social-media" src={imgEmail} alt="img-email" />
        </a>
        <a
          href="https://www.instagram.com/perazzoneto/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
        <img class="img-social-media" src={imgInstagram} alt="img-instagram"/>
        </a>
      </div>
      
     
  </div>
)
}