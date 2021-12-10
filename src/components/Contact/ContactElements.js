import styled from 'styled-components'

export const StyledContact = styled.div `
    min-height: 78vh;
    background-color: #212121;
    display: flex;
    flex-direction: column;
    padding-bottom: 90px;
    color: white;
    @media screen and (max-width: 768px) {
        padding-bottom: 20px;
        
        
    }
    h1{
        font-weight: 400;
        text-align: center;
        font-size: 28px;
    }
    .formsection{
        margin-top: 30px;
        align-self: center;
        border-top: 1px solid #705294;
        border-left: 1px solid #705294;
        border-right: 1px solid #705294;
        width: 750px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 768px) {
            width: 350px;
            padding: 15px;
        }
        .email{
            text-align: center;
            a{
                text-align: center;
                color: white;
                text-decoration: none;
                line-height: 70px;
                justify-self: center;
                align-self: center;
                :hover{
                    border-bottom: 1px solid #1d7874;
                    cursor: pointer;
                }
            }
        }
        .formdiv{
            display: flex;
            justify-content: center;
            @media screen and (max-width: 768px) {
                width: 300px;

            }
            .form{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 400px;
                width: 500px;
                .textfieldlabel{
                    color: white !important;
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    letter-spacing: 0.75px;
                }
                input{
                    color: white;
                    border: white;
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                }
                textarea{
                    color: white;
                    border: white;
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                }
                button{
                    text-transform: none;
                    align-self: center;
                    color: white;
                    border: 0.5px solid white;
                    border-radius: 4px;
                    margin-top: 15px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    width: 140px;
                    height: 45px;
                    letter-spacing: 0.5px;
                    &:hover{
                        color: white;
                        border-color: #1d7874;
                    }
                }
            }
        }
        .success{
            text-align: center;
            margin-top: 40px;
        }
    }
`;