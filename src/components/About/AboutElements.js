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
    @media screen and (max-width: 1200px) {
        justify-content: center;
        padding-top: 100px;
        padding-left: 0;
        padding-right: 0;
    }
    @media screen and (max-width: 500px) {
        padding-bottom: 50px;
        min-height: 100vh;
        padding-top: 75px;
    }
    

    .abtme{
        display: flex;
        width: 1200px;
        justify-content: space-evenly;
        
        @media screen and (max-width: 1200px) {
            width: 700px;
            justify-content: space-between;
        }
        @media screen and (max-width: 500px) {
            justify-content: space-evenly;
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
            @media screen and (max-width: 1200px) {
                font-size: 24px;
                margin: 0;
                margin-bottom: -25px;
                line-height: 50px;
            }
            @media screen and (max-width: 500px) {
                margin: 0;

            }

        }
        .left{
            border-bottom: 1px solid #705294;
            width: 400px;
            @media screen and (max-width: 1200px) {
                width: 200px
            }
            @media screen and (max-width: 500px) {
                display: none;
            }
        }
        .right{
            border-bottom: 1px solid #705294;
            width: 402px;
            @media screen and (max-width: 1200px) {
                width: 200px
            }
            @media screen and (max-width: 500px) {
                display: none;
            }
        }
        
    }
    .content{
        display: flex;
        padding: 75px;
        padding-top: 0;
        flex-direction: row;
        
        @media screen and (max-width: 1200px) {
            height: 850px;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width:700px;
            height: 100%;
            padding: 50px;
            border-bottom: 1px solid #705294;
            border-left: 1px solid #705294;
            border-right: 1px solid #705294;
        }

        @media screen and (max-width: 500px) {
            border: none;
            height: 100%;
            flex-direction: column;
            padding: 0;
            width: 100%;
            justify-content: flex-start;
        }
        .titletext{
            border-left: 1px solid #705294;
            border-bottom: 1px solid #705294;
            width: 600px;
            padding: 20px;
            padding-top: 0;
            /* background-color: #251F2D; */
            @media screen and (max-width: 1200px) {
                width: 90%;
                height: 100%;
                justify-self: center;
                border: none;
            }
            @media screen and (max-width: 500px) {
                width: 100%;
                border: none;
                justify-self: flex-start;
                padding-left: 25px;
            }
            .textsection{
                height: 500px;
                margin-top: 20px;
                margin-left: 30px;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                @media screen and (max-width: 1200px) {
                    margin-left: 0;
                    margin-right: 0;
                    margin-top: 20px;
                    height: 100%;
                }
                @media screen and (max-width: 500px) {
                    margin-top: 20px;
                    height: 100%;
                }
            }
        }
        .imgdiv2{
            border-right: 1px solid #705294;
            border-bottom: 1px solid #705294;
            display: none;
            justify-content: center;
            width: 600px;
            height: 575px;
            padding: 20px;
            /* background-color: #251F2D; */
            @media screen and (max-width: 1200px) {
                display: flex;
                width: 350px;
                border: none;
                height: 500px;
            }
            @media screen and (max-width: 500px) {
                width: 350px;
                border: none;
                height: 350px;
                padding: 0;
            }
            img{
                width: 500px;
                align-self: center;
                margin: 0;
                @media screen and (max-width: 1200px) {
                    width: 500px;
                }
                @media screen and (max-width: 500px) {
                    width: 300px;
                }
            }
        }
        .imgdiv{
            border-right: 1px solid #705294;
            border-bottom: 1px solid #705294;
            display: flex;
            justify-content: center;
            width: 600px;
            height: 575px;

            /* background-color: #251F2D; */
            @media screen and (max-width: 1200px) {
                display: none;
                width: 350px;
                border: none;
                height: 500px;
            }
            @media screen and (max-width: 500px) {
                display: none;
                width: 350px;
                border: none;
                height: 300px;
            }
            img{
                width: 500px;
                align-self: center;
                @media screen and (max-width: 1200px) {
                    width: 500px;
                }
                @media screen and (max-width: 500px) {
                    width: 300px;
                }
            }
        }
    }
`;