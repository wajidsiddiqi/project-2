"use client";
import React from "react";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";

import {
  CenterSpaceBetween,
  CenterSpaceAround,
  MaxWidth,
  StyledConnectButton,
  NavLink,
  NavLinkForIcon,
  NavLinkText,
  StyledNav,
} from "@/app/styles/styles.js";

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
            <NextLink href="/" style={{ textDecoration: "none" }}>
              <NavLink>
                <NavLinkText>Home</NavLinkText>
              </NavLink>
            </NextLink>
            <NavLink>
              <ScrollLink to="roadmap" smooth={true} duration={500}>
                <NavLinkText>Roadmap</NavLinkText>
              </ScrollLink>
            </NavLink>
            <NavLink>
              <ScrollLink to="art" smooth={true} duration={500}>
                <NavLinkText>Art</NavLinkText>
              </ScrollLink>
            </NavLink>
            <NavLink>
              <ScrollLink to="team" smooth={true} duration={500}>
                <NavLinkText>Team</NavLinkText>
              </ScrollLink>
            </NavLink>

            <NavLinkForIcon>
              <NextLink href="http://opensea.com">
                <Image
                  src="/assets/icons/opensea.svg"
                  width="36"
                  height="36"
                  alt="Opensea"
                />
              </NextLink>
            </NavLinkForIcon>
            <NavLinkForIcon>
              <NextLink href="http://discord.com">
                <Image
                  src="/assets/icons/discord.svg"
                  width="36"
                  height="36"
                  alt="Discord"
                />
              </NextLink>
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
