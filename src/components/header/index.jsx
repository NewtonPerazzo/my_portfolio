import "./style.css";
import Button from "../button/index";
import imgHeader from "../../assets/coding.png";
import { Router, Link } from "react-router-dom";

export default function Header() {
  return (
      <header>
        <div className="titleHeader">
          <p>NEWTON PERAZZO</p>
          <img className="img-header" src={imgHeader} alt="img-header" />
        </div>
        <div className="buttons-header">
        <Link to="/">
            <Button title={'Home'}/>
          </Link>
          <Link to="/portfolio">
              <Button title={'Portfolio'}/>
          </Link>
        </div>
      </header>
  );
}
