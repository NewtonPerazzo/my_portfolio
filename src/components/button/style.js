import styled from 'styled-components';


export const Button = styled.div`
  width: 60px;
  height: 30px;
  color: #FFF;
  text-align: center;
  border-bottom: 1px solid #FFF;
  float: right;
  cursor: pointer;
  background-color: #34363b;

  :hover {
    @keyframes buttonMoving {
      100% {
        transform: translate(3px, 1px)
      }
    }

    @keyframes skillsMoving {
      100% {
          transform: translate(0, 20%)
      }
    }
    animation: buttonMoving 1s infinite alternate-reverse;
    animation: skillsMoving 1s infinite alternate-reverse;
  }
`

  