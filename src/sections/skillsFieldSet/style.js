import styled from 'styled-components';

export const FieldSetContainer = styled.fieldset`
  border: 1px chartreuse solid;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  #animation1 { 
    animation: skillsMoving 0.8s infinite alternate;
   } 
  #animation { 
    animation: skillsMoving2 0.8s infinite alternate-reverse;
   } 
  @keyframes skillsMoving { 
    100% { 
      transform: translate(3px)
    }
  }
  @keyframes skillsMoving2 { 
    100% { 
      transform: translate(3px)
    }
  }
`;

export const SkillContent = styled.div`
    justify-content: center;
    display: flex;
    border-radius: 8px;
    background-color: #3b3434;
`

export const SkillContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    grid-gap: 20px;
`
