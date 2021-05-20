import "./style.css";
import Button from "../button/index";

export default function Header() {
  return (
    <>
      <div className="header">
        <Button title={'Home'}/>
        <Button title={'Portfolio'}/>
        <Button title={'Contacts'}/>
      </div>
    </>
  );
}
