import * as React from 'react'
import { StyledFooter, GitLogo, LinkLogo } from './FooterElements';
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <Link to='https://github.com/tylerrice121' target='_blank'><GitLogo/></Link>
                <Link to='https://www.linkedin.com/in/tyler-rice-1b525595/' target='_blank'><LinkLogo/></Link>
            </div>
            <p>Copyright &copy; All Rights Reserved Tyler Rice {new Date().getFullYear()}</p>
        </StyledFooter>
    );
};

export default Footer;