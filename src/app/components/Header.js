"use client";
import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterSpaceAround = styled(Center)`
  justify-content: space-around;
`;

const NavLink = styled.ul`
  padding: 0.7rem 1rem;
  text-decoration: none;
  color: #eef3f1;
  cursor: pointer;
`;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
`;

export default function Header() {
  console.log(logo);
  return (
    <StyledNav>
      <CenterSpaceAround>
        <Center>
          <Image src={logo} width={"auto"} height={50} alt="Logo" />
        </Center>

        <CenterSpaceAround
          style={{ borderRadius: "5rem", backgroundColor: "#c62f42" }}
        >
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Roadmap</NavLink>
          <NavLink>Art</NavLink>
          <NavLink>Team</NavLink>
        </CenterSpaceAround>

        <ConnectButton />
      </CenterSpaceAround>
    </StyledNav>
  );
}
