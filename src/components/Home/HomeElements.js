import styled from 'styled-components'

export const StyledHome = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #252934;
    margin-top: -50px;
    margin-bottom: 100px;
    color: white;
    line-height: 45px;
    text-align: left;
    @media screen and (max-width: 768px) {
        padding-left: 40px;
        padding-right: 40px;
    }
    .info{
        position: absolute;
    }
    .logos {
        display: flex;
        padding-left: 50px;
        padding-right: 50px;
        margin: auto;
        margin-bottom: 150px;
        width: 100%;
        justify-content: space-between;
        .leftline{
            width: 500px;
            border-bottom: 2px solid white;
        }
        .rightline{
            width: 500px;
            border-bottom: 2px solid white;
        }
        .logolinks{
            margin-bottom: -30px;
            display: flex;
            align-items: flex-end;
            .link{
                margin-left: 50px;
                margin-right: 50px;
                
            }
        }
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