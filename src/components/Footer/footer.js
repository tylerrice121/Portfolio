import * as React from 'react'
import { StyledFooter, GitLogo, LinkLogo } from './FooterElements';

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright &copy; All Rights Reserved Tyler Rice {new Date().getFullYear()}</p>
            <div>
                <GitLogo/>
                <LinkLogo/>
            </div>
        </StyledFooter>
    );
};

export default Footer;