import { Container } from "./style.js";
import Title from "../title";
import SkillsAboutMe from "../skillsAboutMe";

function Home() {

  return (
      <>
        <Container>
            <div className="presentation">
                <Title />
            </div>

            <SkillsAboutMe/>
        </Container>
    </>
  );
}

export default Home;