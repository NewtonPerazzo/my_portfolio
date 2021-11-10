import "./style.css";
import Button from "../button/index";
import imgHeader from "../../assets/coding.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
      <header className="header">
        <div className="titleHeader">
          <p>NEWTON PERAZZO</p>
          <img className="img-header" src={imgHeader} />
        </div>
          <Button title={'Home'}/>
          <Button title={'Portfolio'}/>
          <Button title={'Contacts'}/>
        
      </header>
  );
}
