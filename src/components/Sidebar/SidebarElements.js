import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

export const StyledSidebar = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
            list-style: none;
            li{
                margin-right: 3rem;
                color: black;
                a{
                    color: inherit;
                    text-decoration: none;
                    :hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: black;
    font-size: 1.5rem;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`;
