import styled from 'styled-components'

export const StyledProjects = styled.section `
    /* border-top: 1px solid #1d7874; */
    min-height: 100vh;
    background-color: #212121;
    padding-bottom: 100px;
    color: white;
    padding-right: 40px;
    padding-left: 40px;
    h1{
        font-weight: 400;
        text-align: center;
        font-size: 28px;
    }

    .project{
        margin-bottom: 40px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        height: 500px;
        justify-content: space-evenly;
        align-items: center;
        border-right: 0.5px solid #705294;
        border-top: 0.5px solid #705294;
        border-bottom: 1px solid #705294;
        .projecttext{
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            padding-left: 20px;
            padding-right: 20px;
            width: 700px;
            h3{
                font-weight: 500;
                line-height: 50px;
                border-bottom: 1px solid #1d7874;
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
        border-left: 0.5px solid #705294;
        border-top: 0.5px solid #705294;
        border-bottom: 1px solid #705294;
        .projecttext{
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            padding-left: 20px;
            padding-right: 20px;
            width: 700px;
            h3{
                font-weight: 500;
                line-height: 50px;
                border-bottom: 1px solid #1d7874;
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
        }
    }
`;