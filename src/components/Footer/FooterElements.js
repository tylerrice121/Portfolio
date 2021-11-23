import styled from 'styled-components'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export const StyledFooter = styled.footer `
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: #252934;
    height: 75px;
    @media screen and (max-width: 768px){
        height: 90px;
        flex-direction: column;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    p{
        font-size: small;
        @media screen and (max-width: 768px){
            margin-top: 10px;
            align-self: center;
            font-size: smaller;
        }
    }

`;

export const GitLogo = styled(FaGithub)`
    color: white;
    font-size: 35px;
    margin-left: 20px;
`;
export const LinkLogo = styled(FaLinkedin)`
    color: white;
    font-size: 35px;
    margin-left: 20px;
`;