import { Container } from "./style.js";
import Title from "../title";
import SkillsAboutMe from "../../components/bodyContent";

function Home() {

  return (
    <Container>
      <Title />     
      <SkillsAboutMe/>
    </Container>
  );
}

export default Home;