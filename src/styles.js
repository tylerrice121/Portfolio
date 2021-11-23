import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
    }
    html {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.75px;
    margin: 0;  
    width: 100%;
    padding: 0;
  }
`;

export const StyledMain = styled.main `
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: 100vh;
    flex-grow: 1;
    width: 100%;
`;

export const StyledHeader = styled.header `
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #252934;
    height: 75px;
    z-index: 10;
    nav{
        display: flex;
        align-items: center;
        ul{
            display: flex;
            list-style: none;
            li{
                margin-right: 3rem;
                color: white;
                a{
                    color: inherit;
                    text-decoration: none;
                    :hover{
                        border-bottom: 2px solid #E21A6D;
                        cursor: pointer;
                    }
                }
                @media screen and (max-width: 768px) {
                    display: none;
                }
            }
        }
    }

`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        color: white;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;