import "./style.css";
import imgHeader from "../../assets/github.png";

export default function HeaderPorFolio() {
  return (
    <>
      <div className="headerPortfolio">
        <div className="titleHeaderPortfolio">
          <p>{"Portfolio & Projects"}</p>
          <img className="img-headerPortfolio" src={imgHeader} />
        </div>
      </div>
    </>
  );
}
