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