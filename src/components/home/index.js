import "../../App.css";
import Header from "../header";
import Title from "../title";
import SkillsAboutMe from "../skillsAboutMe";

function Home() {

  return (
      <>
        <div className="App-content">
            <div className="presentation">
                <Title />
            </div>

            <SkillsAboutMe/>
        </div>
    </>
  );
}

export default Home;