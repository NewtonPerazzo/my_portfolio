import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
  /* grid-gap: 10px; */
`;

export const Content = styled.div`
  width: 100%;
  padding: 30px;
  justify-content: center;
`;

export const WelcomeColor = styled.p`
  font-weight: bold;
  color: #FFF;
  font-size: 28px;
`;

export const ParagraphCustom = styled.p`
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
  width: 550px;
  height: 550px;
  margin-right: 40px;
  padding: 10px;
  border: 0.5px solid chartreuse;
  border-radius: 5%;
  opacity: 60%;
`;