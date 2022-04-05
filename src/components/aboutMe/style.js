import styled from 'styled-components';


export const FieldSetContainer = styled.fieldset`
  border: 1px chartreuse solid;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const LegendFieldSet = styled.legend`
  color: chartreuse;
  font-size: 18px;
`;

export const BodyAboutMe = styled.div`
  color: #FFF;
  display: block;
  width: 100%;
  height: 100%;

  #animationAbout { 
    animation: animationAbout 1s alternate;
  } 
  @keyframes animationAbout { 
    75% { 
      transform: translate(10px)
    }
  }
`;