import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Title from "./components/title";
import Experience from "./components/experience";
import SkillsAboutMe from "./components/skillsAboutMe";
import Routes from "./routers";

function App() {

  return (
      <div className="App">
        <Header />
        <div className="App-content">
          <div className="presentation">
            <Title />
          </div>

          <SkillsAboutMe/>
          
        
          <Experience />
        </div>
      </div>
  );
}

export default App;
