"use client";
import React from "react";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import Link from "next/link";

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
