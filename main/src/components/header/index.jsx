import "./style.css";
import Button from "../button/index";
import imgHeader from "../../assets/coding.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="titleHeader">
          <p>NEWTON PERAZZO</p>
          <img className="img-header" src={imgHeader} />
        </div>
        <Button title={'Home'}/>
        <Button title={'Portfolio'}/>
        <Button title={'Contacts'}/>
      </div>
    </>
  );
}
