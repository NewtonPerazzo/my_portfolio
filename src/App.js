import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Title from "./components/title";
import Skill from "./components/skill";
import Experience from "./components/experience";
import imgInstagram from "./assets/instagram.png";
import imgLinkedin from "./assets/linkedin.png";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const today = new Date();
  const age = Number(today.getFullYear()) - 1999;

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <div className="presentation">
          <Title />
        </div>

        <fieldset className="infos">
          <legend style={{ color: "chartreuse", fontSize: 18 }}>Skills</legend>
          <div
            onClick={() => {
              setIsVisible(!isVisible);
              setName("Python");
            }}
            style={{ width: 290, height: 20 }}
          >
            <Skill
              name="Python"
              id="animation1"
              style={{ color: "#6f6fda", float: "right" }}
            />
          </div>

          <div
            onClick={() => {
              setIsVisible(!isVisible);
              setName("HTML");
            }}
          >
            <Skill name="HTML" id="animation2" style={{ color: "#FFF" }} />
          </div>

          <div
            onClick={() => {
              setIsVisible(!isVisible);
              setName("Java");
            }}
            style={{ width: 210, height: 30 }}
          >
            <Skill
              name="Java"
              id="animation2"
              style={{ color: "chartreuse", float: "right" }}
            />
          </div>

          <div
            onClick={() => {
              setIsVisible(!isVisible);
              setName("CSS");
            }}
            style={{ width: 200, height: 30 }}
          >
            <Skill name="CSS" id="animation1" style={{ color: "orange" }} />
          </div>

          <div
            onClick={() => {
              setIsVisible(!isVisible);
              setName("C#");
            }}
            style={{ width: 290, height: 30 }}
          >
            <Skill
              name="C#"
              id="animation1"
              style={{ color: "#FF6347", float: "right" }}
            />
          </div>

          <div
            onClick={() => {
              setIsVisible(!isVisible);
              setName("React");
            }}
            style={{ width: 150, height: 30 }}
          >
            <Skill
              name="React"
              id="animation2"
              style={{ color: "#00CED1", float: "right" }}
            />
          </div>
        </fieldset>

        <fieldset className="about-me">
          <legend style={{ color: "chartreuse", fontSize: 18 }}>
            About Me
          </legend>
          <div class="body-about-me">
            <p> Hello, there!</p>
            <p> My name is Newton Perazzo and I'm {age} years old. </p>
            <p> I'm from Feira de Santana, Bahia, Brazil. </p>
            <p>
              I study Information System's at UNIFACS college since 2019 and
              I'll finish It in 2022.
            </p>
            <p>
              I love code and I love to make systems. To me, It's both work and
              hobby.
            </p>
            <p>
              Thank you for your visit! Feel free to send me a message on my
              social networks!{" "}
              <img
                className="img-social-media"
                src={imgInstagram}
                style={{ marginLeft: 20 }}
              />
              <a
                href="https://www.instagram.com/perazzoneto/"
                target="_blank"
                className="link"
              >
                {" "}
                @perazzoneto{" "}
              </a>
              <img className="img-social-media" src={imgLinkedin} />
              <a
                href="https://www.linkedin.com/in/newton-perazzo/"
                target="_blank"
                className="link"
              >
                {" "}
                Newton Perazzo{" "}
              </a>
            </p>
          </div>
        </fieldset>
      </div>
      <div className="App-content">
        <Experience />
      </div>
    </div>
  );
}

export default App;
