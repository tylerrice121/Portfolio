import styled from 'styled-components'

export const StyledAbout = styled.div `
    display: flex;
    padding: 75px;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 120px;
    background-color: #212121;
    padding-bottom: 100px;
    justify-content: center;
    align-items: center;
    color: white;
    @media screen and (max-width: 768px) {
        padding-top: 75px;
        padding-left: 0;
        padding-right: 0;
    }
    

    .abtme{
        display: flex;
        width: 1200px;
        justify-content: space-evenly;
        
        @media screen and (max-width: 768px) {
            width: 100%;
            border-bottom: 1px solid #705294;
        }
        h1{
            margin-right: 120px;
            margin-left: 120px;
            width: 300px;
            text-align: center;
            margin-bottom: -15px;
            z-index: 1;
            font-weight: 400;
            font-size: 28px;
            @media screen and (max-width: 768px) {
            font-size: 24px;
            margin: 0;
            line-height: 50px;
        }

        }
        .left{
            border-bottom: 0.5px solid #705294;
            width: 400px;
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
        .right{
            border-bottom: 0.5px solid #705294;
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
            border-left: 0.5px solid #705294;
            border-bottom: 0.5px solid #705294;
            width: 600px;
            padding: 20px;
            padding-top: 0;
            /* background-color: #251F2D; */
            @media screen and (max-width: 768px) {
                width: 350px;
                border: none;
            }
            .textsection{
                height: 500px;
                margin-top: 50px;
                @media screen and (max-width: 768px) {
                    margin-top: 20px;
                    height: 300px;
                }
            }
        }
        .imgdiv{
            border-right: 0.5px solid #705294;
            border-bottom: 0.5px solid #705294;
            display: flex;
            justify-content: center;
            width: 600px;
            height: 575px;
            /* background-color: #251F2D; */
            @media screen and (max-width: 768px) {
                width: 350px;
                border: none;
                height: 300px;
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