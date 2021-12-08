import styled from 'styled-components'

export const StyledProjects = styled.section `
    min-height: 100vh;
    background-color: #212121;
    padding-bottom: 100px;
    color: white;
    button{
        text-transform: none;
        color: white;
        border-color: white;
        margin-top: 15px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        width: 150px;
        height: 55px;
        &:hover{
            color: white;
            border-color: #1d7874;
        }
        a{
            color: white;
            text-decoration: none;
            font-size: 14px;
            font-weight: 300;
        }
    }
`;