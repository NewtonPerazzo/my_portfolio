import styled from 'styled-components';


export const Container = styled.div`
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  margin-top: 40px;
`;

export const ContainerGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 30px;
  grid-gap: 20px;
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
  width: 10%;
  height: 100%;
  padding: 3px;
  border: 0.5px solid chartreuse;
  border-radius: 100%;
`;