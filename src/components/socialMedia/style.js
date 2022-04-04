import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
  @media screen and (max-width: 1100px) {
    display: grid;
  }
`

export const SocialMediaImage = styled.img`
  width: 30px;
  height: 30px;
  padding: 10px;
  @media screen and (max-width: 1100px) {
    width: 20px;
    height: 20px;
    padding: 5px;
  }
 
`

export const Link = styled.a`
  text-decoration: none;
`