import * as React from 'react'
import { StyledFooter, GitLogo, LinkLogo } from './FooterElements';

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <GitLogo/>
                <LinkLogo/>
            </div>
            <p>Copyright &copy; All Rights Reserved Tyler Rice {new Date().getFullYear()}</p>
        </StyledFooter>
    );
};

export default Footer;