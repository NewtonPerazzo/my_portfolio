import { SkillContent } from './style.js';

export default function Skill(props) {
    return (
      <SkillContent id={props.id} style={{color: props.color}}>
        <p style={{alignSelf: 'center'}}>{props.name}</p>
      </SkillContent>
    );
  }