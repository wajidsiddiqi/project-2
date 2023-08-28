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
} from "@/app/styles/styles.js";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 945);
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
          <Image src="/assets/logo.png" width="50" height="60" alt="Logo" />

          {/* Hamburger Button - Fixed position */}
          {isMobile && (
            <StyledButton zIndex="997">
              <Hamburger toggled={isOpen} toggle={handleMenuToggle} size={24} />
            </StyledButton>
          )}

          {/* Hamburger Menu */}
          {isMobile && (
            <PageWrapperDark
              style={{
                position: "fixed",
                top: "0",
                left: isOpen ? "0" : "-300px",
                height: "100vh",
                width: "300px",
                zIndex: "998",
                transition: "left 0.3s ease-in-out",
                flexDirection: "row",
              }}
            >
              {/* Your menu content here */}
              {isOpen && (
                <StyledButton
                  zIndex="999"
                  position="fixed"
                  top="20px"
                  left="215px"
                >
                  <Hamburger
                    toggled={isOpen}
                    toggle={handleMenuToggle}
                    size={24}
                  />
                </StyledButton>
              )}

              <CenterSpaceAround
                style={{
                  borderRadius: "5rem",
                  backgroundColor: "#a474c6",
                  boxShadow: "black 0px 3px",
                }}
              >
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

                <NavLinkForIcon>
                  <NextLink href="http://opensea.com" onClick={handleMenuClose}>
                    <Image
                      src="/assets/icons/opensea.svg"
                      width="36"
                      height="36"
                      alt="Opensea"
                    />
                  </NextLink>
                </NavLinkForIcon>
                <NavLinkForIcon>
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
