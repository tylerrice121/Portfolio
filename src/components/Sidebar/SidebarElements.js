import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

export const StyledSidebar = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 30%;
    background: #2b2b2b;
    display: flex;
    border-bottom: 2px solid white;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    nav{
        display: flex;
        align-items: center;
        ul{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            list-style: none;
            padding: 0;
            margin-top: 20px;
            li{
                color: white;
                a{
                    color: inherit;
                    text-decoration: none;
                    line-height: 60px;
                    font-size: 18px;
                    :hover{
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: white;
    font-size: 1.5rem;
`;

export const Icon = styled.div`
    position: absolute;
    top: 27px;
    right: 32px;
    background: transparent;
    cursor: pointer;
    outline: none;
`;
export const Logo = styled.div`
    position: absolute;
    top: 10px;
    left: 20px;
    background: transparent;
    cursor: pointer;
    outline: none;
`;
