import './style.css';

export default function Skill(props) {
    return (
      <>
        <div className="skillName">
          <div className="skill" id={props.id} style={props.style}>
            <p>{props.name}</p>
          </div>
        </div>
      </>
    );
  }