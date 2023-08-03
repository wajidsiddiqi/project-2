/*import { ConnectButton } from '@rainbow-me/rainbowkit';
<div
  style={{
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 12,
  }}
>
  <ConnectButton />
</div>
*/
"use client";
import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import Image from "next/image";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterSpaceAround = styled(Center)`
  justify-content: space-around;
`;

const NavLink = styled.ul`
  padding: 0.4rem 1rem;
  text-decoration: none;
  color: #eef3f1;
  cursor: pointer;
  margin: 0.5rem;
`;

const ConnectButton = styled.button`
  color: #eef3f1;
  background-color: #c62f42;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5rem;
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
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </CenterSpaceAround>

        <ConnectButton>Connect</ConnectButton>
      </CenterSpaceAround>
    </StyledNav>
  );
}
