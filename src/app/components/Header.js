"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import Link from "next/link";

const MaxWidth = styled.div`
  max-width: 1600px;
  margin: auto;
`;

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
    color: #a474c6;
  }
`;

const StyledConnectButton = styled.button`
  padding: 0.7rem 1.4rem;
  color: #eef3f1;
  cursor: pointer;
  border-radius: 5rem;
  font-family: inherit;
  background-color: #a474c6;
  border: none;
  font-size: 1.2rem;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: black 0px 3px;

  &:hover {
    background-color: #eef3f1;
    color: #a474c6;
  }
`;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  padding: 0.5rem 2.5rem;
  z-index: 98;
`;

export default function Header() {
  return (
    <StyledNav>
      <MaxWidth>
        <CenterSpaceBetween>
          <Image src="/assets/logo.png" width="50" height="60" alt="Logo" />

          <CenterSpaceAround
            style={{
              borderRadius: "5rem",
              backgroundColor: "#a474c6",
              boxShadow: "black 0px 3px",
            }}
          >
            <NavLink>
              <NavLinkText>Home</NavLinkText>
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
                <Image
                  src="/assets/icons/opensea.svg"
                  width="36"
                  height="36"
                  alt="Opensea"
                />
              </Link>
            </NavLinkForIcon>
            <NavLinkForIcon>
              <Link href="http://discord.com">
                <Image
                  src="/assets/icons/discord.svg"
                  width="36"
                  height="36"
                  alt="Discord"
                />
              </Link>
            </NavLinkForIcon>
          </CenterSpaceAround>

          <ConnectKitButton.Custom>
            {({ show }) => {
              return (
                <StyledConnectButton onClick={show}>
                  Connect
                </StyledConnectButton>
              );
            }}
          </ConnectKitButton.Custom>
        </CenterSpaceBetween>
      </MaxWidth>
    </StyledNav>
  );
}
