import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    } 
    `;


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled.img`
padding-top: 20px;
padding-bottom: 5px;
cursor: pointer;
display: flex;
align-items: center;

`;

export const DashIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
}
`;

export const NavMenu = styled.ul`
display: flex;
list-style: none;
align-items: center;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: 'Poppins', sans-serif;
font-weight: 900;

&:hover{
    transition: all 0.05s ease-in-out;
    border-bottom: 3px solid #d52d17;

}
&:active{
    transition: all 0.05s ease-in-out;
    border-bottom: 3px solid #d52d17;

}
`;

export const NavButton = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
}
`;
export const NavButtonLink = styled(LinkR)`
border-radius: 50px;
background: #d52d17;
white-space: nowrap;
padding: 10px 22px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2 ease-in-out;
text-decoration: none;
font-family: 'Poppins', sans-serif;
font-weight: 900;


&:hover {
    transition: all 0.3s ease-in-out;
    background: gray;
    color: white;
}
`;
