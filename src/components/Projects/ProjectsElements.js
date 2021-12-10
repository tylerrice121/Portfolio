import styled from 'styled-components'

export const StyledProjects = styled.section `
    /* border-top: 1px solid #1d7874; */
    min-height: 100vh;
    background-color: #212121;
    padding-bottom: 100px;
    color: white;
    padding-right: 40px;
    padding-left: 40px;
    @media screen and (max-width: 1200px) {
        padding: 0;
    }
    h1{
        font-weight: 400;
        text-align: center;
        font-size: 28px;
        @media screen and (max-width: 1200px) {
            border-bottom: 1px solid #705294;
            line-height: 60px;
            font-size: 24px;
        }
    }
    .mobileimg{
        display: none;
        @media screen and (max-width: 1200px) {
            display: flex;
            flex-direction: column;
            /* border: 1px solid white; */
            height: 400px;
            justify-content: center;
            align-items: center;
            .mobilebuttons{
                display: flex;
                justify-content: space-evenly;
                button{
                    text-transform: none;
                    color: white;
                    background-color: #212121;
                    background-color:rgba(33, 33, 33, 0.6);
                    border-color: white;
                    border-radius: 4px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    width: 150px;
                    height: 50px;
                    margin-left: 10px;
                    margin-right: 10px;
                    &:hover{
                        color: white;
                        border-color: #1d7874;
                    }
                    a{
                        color: white;
                        text-decoration: none;
                        font-size: 14px;
                        font-weight: 400;
                    }
                }
                
            }
            img{
                width: 80%;
                opacity: 0.3;
                position: absolute;
                
            }
        }
        @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: column;
            /* border: 1px solid white; */
            height: 200px;
            justify-content: center;
            .mobilebuttons{
                display: flex;
                justify-content: space-evenly;
                button{
                    text-transform: none;
                    color: white;
                    background-color: #212121;
                    background-color:rgba(33, 33, 33, 0.6);
                    border-color: white;
                    border-radius: 4px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    width: 150px;
                    height: 50px;
                    margin-left: 10px;
                    margin-right: 10px;
                    &:hover{
                        color: white;
                        border-color: #1d7874;
                    }
                    a{
                        color: white;
                        text-decoration: none;
                        font-size: 14px;
                        font-weight: 400;
                    }
                }
                
            }
            img{
                width: 100%;
                opacity: 0.3;
                position: absolute;
                
            }
        }
    }
    .project{
        margin-bottom: 40px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        height: 500px;
        justify-content: space-evenly;
        align-items: center;
        border-right: 1px solid #705294;
        border-top: 1px solid #705294;
        border-bottom: 1px solid #705294;
        @media screen and (max-width: 1200px) {
            border-bottom: 1px solid #1d7874;
            border-right: none;
            border-top: none;
            flex-direction: column;
            height: 700px;
            padding: 0;
        }
        .projecttext{
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            padding-left: 20px;
            padding-right: 20px;
            width: 700px;
            @media screen and (max-width: 1200px) {
                justify-content: space-between;
                width: 100%;
                padding: 0;

            }
            p{
                @media screen and (max-width: 1200px) {
                    padding-left: 20px;
                    padding-right: 20px;
                }

            }
            h3{
                font-weight: 500;
                line-height: 50px;
                border-bottom: 1px solid #1d7874;
                @media screen and (max-width: 1200px) {
                    text-align: center;
                    
                }
            }
            .techno{

                .technologies{
                    word-spacing: 10px;
                    color: #269c96;
                    margin-top: 5px;
                    @media screen and (max-width: 1200px) {
                        line-height: 22px;
                    }
                }
            }
            .buttons{
                display: flex;
            @media screen and (max-width: 1200px) {
                align-content: center;
                justify-content: space-between;
            }

                button{
                    margin-right: 40px;
                    text-transform: none;
                    color: white;
                    border-color: white;
                    border-radius: 4px;
                    margin-top: 15px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    width: 140px;
                    height: 50px;
                    @media screen and (max-width: 1200px) {
                        /* margin: 0; */
                        display: none;
                    }
                    &:hover{
                        color: white;
                        border-color: #1d7874;
                    }
                    a{
                        color: white;
                        text-decoration: none;
                        font-size: 14px;
                        font-weight: 400;
                    }
                }

            }

        }
        .projectimg{
            padding-left: 20px;
            padding-right: 20px;
            width: 700px;
            a{
                :hover{
                    opacity: 0.5;
                }
            }
            @media screen and (max-width: 1200px) {
                display: none;
            }
            img{
                width: 700px;
                @media screen and (max-width: 1200px) {
                    width: 300px;
                }
            }
        }
    }
    .project2{
        margin-bottom: 40px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        height: 500px;
        justify-content: space-evenly;
        align-items: center;
        border-left: 1px solid #705294;
        border-top: 1px solid #705294;
        border-bottom: 1px solid #705294;
        @media screen and (max-width: 1200px) {
            border-bottom: 1px solid #1d7874;
            border-left: none;
            border-top: none;
            flex-direction: column;
            height: 700px;
            padding: 0;
        }
        .projecttext{
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            padding-left: 20px;
            padding-right: 20px;
            width: 700px;
            @media screen and (max-width: 1200px) {
                justify-content: space-evenly;
                width: 100%;
                padding: 0;

            }
            p{
                @media screen and (max-width: 1200px) {
                    padding-left: 20px;
                    padding-right: 20px;
                }

            }
            h3{
                font-weight: 500;
                line-height: 50px;
                border-bottom: 1px solid #1d7874;
                @media screen and (max-width: 1200px) {
                    text-align: center;
                }
            }
            .technologies{
                word-spacing: 10px;
                color: #269c96;
                margin-top: 5px;
            }
            .buttons{
                display: flex;

                button{
                    margin-right: 40px;
                    text-transform: none;
                    color: white;
                    border-color: white;
                    border-radius: 4px;
                    margin-top: 15px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    width: 140px;
                    height: 50px;
                    @media screen and (max-width: 1200px) {
                        /* margin: 0; */
                        display: none;
                    }
                    &:hover{
                        color: white;
                        border-color: #1d7874;
                    }
                    a{
                        color: white;
                        text-decoration: none;
                        font-size: 14px;
                        font-weight: 400;
                    }
                }

            }

        }
        .projectimg{
            padding-left: 20px;
            padding-right: 20px;
            width: 700px;
            a{
                :hover{
                    opacity: 0.5;
                }
            }
            @media screen and (max-width: 1200px) {
                display: none;
            }
            img{
                width: 700px;
                @media screen and (max-width: 1200px) {
                    width: 300px;
                }
            }
        }
    }
`;