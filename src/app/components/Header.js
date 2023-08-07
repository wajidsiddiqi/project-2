"use client";
import React from "react";
import styled from "styled-components";
import Logo from "../Assets/logo.png";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import Opensea from "../Assets/icons/opensea.svg";
import Discord from "../Assets/icons/discord.svg";
import Link from "next/link";

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
  padding: 0.7rem 0rem;
  text-decoration: none;
  color: #eef3f1;
  cursor: pointer;
  font-size: 1.2rem;
`;

const NavLinkForIcon = styled.ul`
  padding: 0rem 0.7rem;
  text-decoration: none;
`;

const NavLinkText = styled.span`
  padding: 0.7rem 1rem;
  border-radius: 5rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #eef3f1;
    color: #c62f42;
  }
`;

const StyledConnectButton = styled.button`
  padding: 0.7rem 1.4rem;
  color: #eef3f1;
  cursor: pointer;
  border-radius: 5rem;
  font-family: inherit;
  background-color: #c62f42;
  border: none;
  font-size: 1.2rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #eef3f1;
    color: #c62f42;
  }
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
        <Image src={Logo} width={"auto"} height={65} alt="Logo" />

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

          <NavLinkForIcon>
            <Link href="http://opensea.com">
              <Image src={Opensea} width={"auto"} height={36} alt="Opensea" />
            </Link>
          </NavLinkForIcon>
          <NavLinkForIcon>
            <Link href="http://discord.com">
              <Image src={Discord} width={"auto"} height={36} alt="Discord" />
            </Link>
          </NavLinkForIcon>
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
