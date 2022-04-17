import styled from 'styled-components';

export const TitleTop = styled.div`
    font-family: Lucida Console, Courier, monospace;
    display: flex;
    text-align: center;
    padding-right: 10px;
    justify-content: space-between;
    align-items: center;  
    padding: 15px 0px 15px 0px;
    border-bottom: 0.5px solid chartreuse;
    
    #animationTitle { 
        animation: headerTitle 0.8s alternate-reverse;
    } 
    @keyframes headerTitle { 
    100% { 
      transform: translate(0px, 50px)
    }
  }
`

export const TitleText = styled.p`
    text-align: center;
    color: #FFF;
    font-size: 18px;
    position: relative;

    @media screen and (max-width: 390px) {
        font-size: 14px;
    }
`

export const SelectCustom = styled.select`
    width: 100px;
    height: 100%;
    padding: 10px;
    background-color: #121417;
    color: #fff;
    border: 0.5px solid chartreuse;
    border-radius: 5px;
    outline: none;

    @media screen and (max-width: 390px) {
        width: 60px;
    }
`

export const OptionCustom = styled.option`
    background-color: #FFF;
    color: #000;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
`

export const ContentSelect = styled.div`
    height: 100%;
    padding-right: 20px;
`