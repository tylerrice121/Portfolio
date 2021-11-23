import * as React from 'react'
import { StyledFooter, GitLogo, LinkLogo } from './FooterElements';


const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <a href='https://github.com/tylerrice121' target='_blank'><GitLogo/></a>
                <a href='https://www.linkedin.com/in/tyler-rice-1b525595/' target='_blank'><LinkLogo/></a>
            </div>
            <p>Copyright &copy; All Rights Reserved Tyler Rice {new Date().getFullYear()}</p>
        </StyledFooter>
    );
};

export default Footer;