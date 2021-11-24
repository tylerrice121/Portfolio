import * as React from 'react'
import { StyledFooter, GitLogo, LinkLogo } from './FooterElements';


const Footer = () => {
    return (
        <StyledFooter>
            <div className="logodiv">
                <a href='https://github.com/tylerrice121' target='_blank' rel="noreferrer" aria-label="github"><GitLogo/></a>
                <a href='https://www.linkedin.com/in/tyler-rice-1b525595/' target='_blank' rel="noreferrer" aria-label="linkedin"><LinkLogo/></a>
            </div>
            <p>Copyright &copy; All Rights Reserved Tyler Rice {new Date().getFullYear()}</p>
        </StyledFooter>
    );
};

export default Footer;