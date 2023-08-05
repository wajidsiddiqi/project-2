"use client";
import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterSpaceAround = styled(Center)`
  justify-content: space-around;
`;

const CenterSpaceBetween = styled(Center)`
  justify-content: space-between;
`;

const NavLink = styled.ul`
  padding: 0.7rem 1rem;
  text-decoration: none;
  color: #eef3f1;
  cursor: pointer;
  font-size: 1.2rem;
`;

const NavLinkText = styled.span`
  &:hover {
    border-bottom: 2px solid #eef3f1;
  }
`;

const StyledConnectButton = styled.button`
  padding: 0.7rem 1rem;
  color: #eef3f1;
  cursor: pointer;
  border-radius: 5rem;
  font-family: inherit;
  background-color: #c62f42;
  border: none;
  font-size: 1.2rem;
`;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  padding: 0.5rem 2.5rem;
`;

export default function Header() {
  return (
    <StyledNav>
      <CenterSpaceBetween>
        <Center>
          <Image src={logo} width={"auto"} height={55} alt="Logo" />
        </Center>

        <CenterSpaceAround
          style={{ borderRadius: "5rem", backgroundColor: "#c62f42" }}
        >
          <NavLink>
            <NavLinkText>Home</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>About</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>Roadmap</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>Art</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>Team</NavLinkText>
          </NavLink>
        </CenterSpaceAround>

        <ConnectKitButton.Custom>
          {({ show }) => {
            return (
              <StyledConnectButton onClick={show}>Connect</StyledConnectButton>
            );
          }}
        </ConnectKitButton.Custom>
      </CenterSpaceBetween>
    </StyledNav>
  );
}
