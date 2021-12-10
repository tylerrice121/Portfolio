import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        /* border: 1px solid white; */
    }
    html {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.75px;
    font-style: normal;
    font-weight: 400;
    margin: 0;  
    width: 100%;
    padding: 0;
    background-color: #212121;
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
    position: fixed;
    justify-content: space-between;
    top: 0;
    width: 100%;
    background-color: inherit;
    height: 75px;
    z-index: 10;

    nav{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        img{
            margin-left: 20px;
            margin-top: 10px;
            cursor: pointer;
        }
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
                        border-bottom: 1px solid #1d7874;
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