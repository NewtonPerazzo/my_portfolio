import { BrowserRouter, Route } from "react-router-dom";
import Experience from "./components/experience";
import SkillsAboutMe from "./components/skillsAboutMe";



const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={SkillsAboutMe} />
            <Route path="/experience" component={Experience} />
        </BrowserRouter>
    )
}

export default Routes;