"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Hamburger from "hamburger-react";

import {
  CenterSpaceBetween,
  CenterSpaceAround,
  MaxWidth,
  StyledConnectButton,
  NavLink,
  NavLinkForIcon,
  NavLinkText,
  StyledNav,
  StyledButton,
  PageWrapperDark,
  HeaderBtn,
} from "@/app/styles/styles.js";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 675);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <StyledNav>
      <MaxWidth>
        <CenterSpaceBetween>
          <NextLink href="/" style={{ textDecoration: "none" }}>
            <Image src="/assets/logo.png" width="50" height="60" alt="Logo" />
          </NextLink>

          {/* Hamburger Menu */}
          {isMobile && isOpen && (
            <PageWrapperDark
              style={{
                position: "fixed",
                top: "0",
                right: isOpen ? "0" : "300px",
                height: "100vh",
                width: "300px",
                zIndex: "998",
                transition: "right 0.3s ease-in-out",
                padding: "0",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CenterSpaceAround style={{ flexDirection: "column" }}>
                <NextLink
                  href="/"
                  style={{ textDecoration: "none" }}
                  onClick={handleMenuClose}
                >
                  <NavLink>
                    <NavLinkText>Home</NavLinkText>
                  </NavLink>
                </NextLink>
                <NavLink>
                  <ScrollLink
                    to="roadmap"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuClose}
                  >
                    <NavLinkText>Roadmap</NavLinkText>
                  </ScrollLink>
                </NavLink>
                <NavLink>
                  <ScrollLink
                    to="art"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuClose}
                  >
                    <NavLinkText>Art</NavLinkText>
                  </ScrollLink>
                </NavLink>
                <NavLink>
                  <ScrollLink
                    to="team"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuClose}
                  >
                    <NavLinkText>Team</NavLinkText>
                  </ScrollLink>
                </NavLink>

                <NavLinkForIcon style={{ padding: "0.7rem 0rem" }}>
                  <NextLink href="http://opensea.com" onClick={handleMenuClose}>
                    <Image
                      src="/assets/icons/opensea.svg"
                      width="36"
                      height="36"
                      alt="Opensea"
                    />
                  </NextLink>
                </NavLinkForIcon>
                <NavLinkForIcon style={{ padding: "0.7rem 0rem" }}>
                  <NextLink href="http://discord.com" onClick={handleMenuClose}>
                    <Image
                      src="/assets/icons/discord.svg"
                      width="36"
                      height="36"
                      alt="Discord"
                    />
                  </NextLink>
                </NavLinkForIcon>
              </CenterSpaceAround>
            </PageWrapperDark>
          )}

          {/* Menue */}
          {!isMobile && (
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
          )}

          <HeaderBtn>
            <ConnectKitButton.Custom>
              {({ show }) => {
                return (
                  <StyledConnectButton onClick={show}>
                    Connect
                  </StyledConnectButton>
                );
              }}
            </ConnectKitButton.Custom>

            {/* Hamburger Button - Fixed position */}
            {isMobile && (
              <StyledButton
                style={{ zIndex: "999", margin: "0", padding: "0" }}
              >
                <Hamburger
                  toggled={isOpen}
                  toggle={handleMenuToggle}
                  size={19.2}
                />
              </StyledButton>
            )}
          </HeaderBtn>
        </CenterSpaceBetween>
      </MaxWidth>
    </StyledNav>
  );
}
