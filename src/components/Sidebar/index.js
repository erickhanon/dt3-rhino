import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='Construção' onClick={toggle}>Construção</SidebarLink>
          <SidebarLink to='Frog' onClick={toggle}>Sitema Frog</SidebarLink>
          <SidebarLink to='Especificações' onClick={toggle}>Especificações</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to={{
                pathname:
                  "https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-rhino/",
              }}
              target="_blank">Comprar</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
