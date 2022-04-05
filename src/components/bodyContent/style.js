import styled from 'styled-components';


export const Container = styled.div`
  justify-content: center;
  margin-top: 40px;
`;

export const ContainerGrid = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 40px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;

  #animation1 { 
    animation: animation1 1s alternate;
  } 
  @keyframes animation1 { 
    0% { 
      transform: translate(60%)
    }
  }

  #animation2 { 
    animation: animation2 2s alternate;
  } 
  @keyframes animation2 { 
    0% { 
      transform: translate(60%)
    }
  }

  #animation3 { 
    animation: animation3 3s alternate;
  } 
  @keyframes animation3 { 
    0% { 
      transform: translate(60%)
    }
  }

  #animation4 { 
    animation: animation4 4s alternate;
  } 
  @keyframes animation4 { 
    0% { 
      transform: translate(60%)
    }
  }
`;

export const WelcomeColor = styled.div`
  font-weight: bold;
  color: #FFF;
  font-size: 28px;
  @media screen and (max-width: 1100px) {
    text-align: center;
  }
`;

export const ParagraphCustom = styled.a`
  color: rgb(6, 184, 255);
  font-size: 38px;
`;

export const WordCustom = styled.a`
  text-decoration: underline;
  color: chartreuse;
  font-weight: normal;
  cursor: default;
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 100%;
  padding: 3px;
  border: 0.5px solid chartreuse;
  border-radius: 100%;
`;