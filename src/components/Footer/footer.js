import * as React from 'react'
import { StyledFooter } from './FooterElements';

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright &copy; All Rights Reserved Tyler Rice {new Date().getFullYear()}</p>
        </StyledFooter>
    );
};

export default Footer;