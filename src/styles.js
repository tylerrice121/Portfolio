import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        
    }
    html {
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.75px;
    margin: 0;  
  }
`;

export default GlobalStyle

export const StyledHeader = styled.header `
    display: flex;
    justify-content: flex-end;

    nav{
        display: flex;
        align-items: center;
        ul{
            display: flex;
            list-style: none;
            li{
                margin-right: 3rem;
                color: black;
                a{
                    color: inherit;
                    text-decoration: none;
                    :hover{
                        text-decoration: underline;
                    }
                }
            }
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    }

`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;