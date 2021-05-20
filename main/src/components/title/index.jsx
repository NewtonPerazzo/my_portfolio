import "./style.css";

export default function Title() {
  
  function SubTitle() {
    return (
      <>
        <div className="subtitle">
          <p>FullStack Developer</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="title">
        <p>Newton Perazzo</p>
      </div>
        <SubTitle />
    </>
  );
}

