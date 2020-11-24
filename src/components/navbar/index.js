import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../images/logodt3-branca.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  DashIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
} from "./navbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo src={Logo} alt="logo" />
          <DashIcon onClick={toggle}>
            <FaBars />
          </DashIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="Construção"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Construção
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Frog"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Sistema Frog
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Especificações"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Especificações
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink
              to={{
                pathname:
                  "https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-rhino/",
              }}
              target="_blank"
            >
              Comprar
            </NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
