import styled from 'styled-components'

export const StyledAbout = styled.div `
    display: flex;
    padding: 75px;
    flex-direction: row;
    min-height: 85vh;
    /* border: 1px solid white; */
    background-color: #1a1c24;
    margin-bottom: 100px;
    justify-content: center;
    color: white;
    .titletext{
        /* border: 1px solid white; */
        width: 600px;;
        
        .textsection{
            height: 500px;
            margin-top: 20px;
        }
    }
    .imgdiv{
        /* border: 1px solid white; */
        display: flex;
        justify-content: center;
        width: 600px;
        img{
            width: 500px;
            align-self: center;
            box-shadow:rgb(26, 28, 36) 20px -20px 0px -3px, rgb(29, 120, 116) 20px -20px;
        }
    }
`;