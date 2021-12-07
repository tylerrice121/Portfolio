import styled from 'styled-components'
import serious from '/Users/tylerrice/Code/Portfolio/public/images/drama.jpg'

export const StyledHome = styled.div `
    background-image: url(${serious});
    background-size: cover;
    opacity: 0.5;
    .BG{
    background: rgba(0, 0, 0, 0);
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
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
        margin-left: 30px;
        margin-right: 30px;
    }
    .logos {
        display: flex;
        align-self: flex-end;
        padding-left: 50px;
        padding-right: 50px;
        margin: auto;
        margin-bottom: 40px;
        width: 100%;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: -50px;
        }
        .leftline{
            width: 500px;
            border-bottom: 2px solid white;
            @media screen and (max-width: 768px) {
                width: 100vw;
        }
        }
        .rightline{
            width: 500px;
            border-bottom: 2px solid white;
            @media screen and (max-width: 768px) {
                display: none;
        }
        }
        .logolinks{
            margin-bottom: -30px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            @media screen and (max-width: 768px) {
                align-items: center;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 5px;
            }  
            .link{
                /* width: 10px; */
                margin-left: 50px;
                margin-right: 50px;
                @media screen and (max-width: 768px) {
                    margin-left: 0px;
                    padding-right: 30px;
                    padding-left: 30px;
                    margin: 0;
                    width: 100px;
                    text-align: center;
            }  
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
        color: #705394;
        font-weight: 500;
    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
    }
    .myname{
        color: #BB86FA;
        font-weight: 600;
        font-size: 42px;
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
            color: white;
            border-color: #1d7874;
        }
        @media screen and (max-width: 768px) {
        width: 160px;
        height: 50px;
    }
    }
}
    .BG::before {
        /* background-image: url(${serious}); */
        background-color: pink;
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.75;
    }
`;