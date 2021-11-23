import styled from 'styled-components'

export const StyledHome = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #252934;
    margin-bottom: 100px;
    color: white;
    line-height: 45px;
    text-align: left;
    @media screen and (max-width: 768px) {
        padding-left: 40px;
        padding-right: 40px;
    }
    p{
        font-size: 24px;
        margin-bottom: 10px;
        font-weight: 300;
    }
    h1{
        font-size: 48px;
        margin-bottom: 20px;
        font-weight: 700;
    }
    .description {
    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
    }
    .myname{
        color: #E21A6D;
    @media screen and (max-width: 768px) {
        font-size: 38px;
    }
    }
    button{
        text-transform: none;
        color: white;
        border-color: white;
        margin-top: 15px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        width: 175px;
        height: 55px;
        &:hover{
            color: #E21A6D;
            border-color: #E21A6D;
        }
        @media screen and (max-width: 768px) {
        width: 160px;
        height: 50px;
    }
    }
`;