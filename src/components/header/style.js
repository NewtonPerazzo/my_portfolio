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

export const TitleHeader = styled.p`
  color: rgb(6, 184, 255);
  font-size: 24px;
  display: flex;
  align-items: center;
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
`;