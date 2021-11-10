import './style.css';

export default function Skill(props) {
    return (
      <>
          <div className="skill" id={props.id} style={{color: props.color}}>
            <p style={{alignSelf: 'center'}}>{props.name}</p>
          </div>
      </>
    );
  }