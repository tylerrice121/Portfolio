import styled from 'styled-components'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export const StyledFooter = styled.footer `
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: gray;
    height: 75px;

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