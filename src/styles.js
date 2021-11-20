import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        
    }
    html {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap');
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
        }
    }

`;