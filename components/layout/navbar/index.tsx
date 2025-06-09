import React from "react";
import Container from "../../shared/container";
import Logo from "../../shared/logo";
import Link from "next/link";
import UserMenu from "./user-menu";
import UserButton from "./user-button";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 border-b border-gray-200 bg-white py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="md:flex items-center gap-10 hidden">
            <UserMenu />
            <UserButton />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
