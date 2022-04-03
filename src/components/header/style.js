import styled from 'styled-components';


export const HeaderContainer = styled.header`
  background: #282c34;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: rgb(6, 184, 255);
  height: 60px;
`;

export const TitleHeader = styled.p`
  color: rgb(6, 184, 255);
  font-size: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageHeader = styled.img`
  width: 40px;
  height: 30px;
  margin-left: 10px;
`;

export const ButtonsHeader = styled.div`
  justify-content: space-around;
  display: flex;
  width: 100%;
  grid-column: 2;
  float: right;
  align-items: center;
`;