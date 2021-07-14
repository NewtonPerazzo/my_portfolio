import HeaderPortfolio from "../headerPortfolio/index";
import Project from "../project/index";
import "./style.css";
import citiesWeather1 from "../../assets/cities-weather-1.PNG";
import citiesWeather2 from "../../assets/cities-weather-2.PNG";
import citiesWeather3 from "../../assets/cities-weather-3.PNG";

let slideCitiesWeather = [
  citiesWeather1,
  citiesWeather2,
  citiesWeather3,
];



export default function Experience() {
  return (
    <>
        <HeaderPortfolio name={"Portfolio"} />
        <Project title={"Cities Weather"} imgDict={slideCitiesWeather} autoPlay={3}/>
    </>
  );
}
