import styled from 'styled-components'

export const StyledAbout = styled.div `
    display: flex;
    padding: 75px;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 100px;
    background-color: #212121;
    margin-bottom: 100px;
    justify-content: center;
    align-items: center;
    color: white;

    .abtme{
        display: flex;
        width: 1200px;
        justify-content: space-evenly;
        @media screen and (max-width: 768px) {
            width: 300px;
            border-bottom: 2px solid #705294;
        }
        h1{
            margin-right: 120px;
            margin-left: 120px;
            width: 300px;
            text-align: center;
            margin-bottom: -10px;
            @media screen and (max-width: 768px) {
            font-size: 24px;
            margin: 0;
            line-height: 50px;
        }

        }
        .left{
            border-bottom: 2px solid #705294;
            width: 400px;
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
        .right{
            border-bottom: 2px solid #705294;
            width: 402px;
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
        
    }
    .content{
        display: flex;
        padding: 75px;
        padding-top: 0;
        flex-direction: row;
        @media screen and (max-width: 768px) {
            flex-direction: column;
            padding: 0;
        }
        .titletext{
            border-left: 2px solid #705294;
            border-bottom: 2px solid #705294;
            width: 600px;
            padding: 20px;
            padding-top: 0;
            @media screen and (max-width: 768px) {
                width: 350px;
                border: none;
            }
            .textsection{
                height: 500px;
                margin-top: 50px;
            }
        }
        .imgdiv{
            border-right: 2px solid #705294;
            border-bottom: 2px solid #705294;
            display: flex;
            justify-content: center;
            width: 600px;
            height: 575px;
            @media screen and (max-width: 768px) {
                width: 350px;
            }
            img{
                width: 500px;
                align-self: center;
                @media screen and (max-width: 768px) {
                    width: 300px;
                }
            }
        }
    }
`;