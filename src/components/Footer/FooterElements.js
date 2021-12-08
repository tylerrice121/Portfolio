import styled from 'styled-components'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export const StyledFooter = styled.footer `
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: #212121;
    height: 75px;
    padding-top: 0;
    .logodiv{
        display: flex;
        width: 100px;
        justify-content: space-between;
    }
    @media screen and (max-width: 768px){
        height: 150px;
        flex-direction: column;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    p{
        font-size: small;
        @media screen and (max-width: 768px){
            margin-top: 10px;
            margin-bottom: 10px;
            align-self: center;
            font-size: smaller;
            text-align: center;
            line-height: 25px;
        }
    }
`;

export const GitLogo = styled(FaGithub)`
    color: white;
    font-size: 35px;
    `;
export const LinkLogo = styled(FaLinkedin)`
    color: white;
    font-size: 35px;
    /* margin-left: 20px; */
`;