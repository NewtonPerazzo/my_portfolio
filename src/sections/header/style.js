import styled from 'styled-components';


export const HeaderContainer = styled.header`
  background-color: #121417;
  display: flex;
  color: rgb(6, 184, 255);
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  #animationHeader { 
    animation: headerRender 0.8s alternate;
  }
  @keyframes headerRender { 
    0% { 
      transform: translate(0px, 50px)
    }
  }
`;

export const TitleHeader = styled.div`
  color: rgb(6, 184, 255);
  font-size: 24px;
  display: flex;
  align-items: center;
`;

export const NameHeader = styled.p`
  font-size: 32px;
  
  @media screen and (max-width: 376px) {
    width: 140px;
    display: grid;
    justify-items: center;
  }
`;

export const ImageHeader = styled.img`
  width: 40px;
  height: 30px;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 390px) {
    display: grid;
    justify-content: center;
  }
`;