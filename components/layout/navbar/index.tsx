import React from "react";
import Container from "../../shared/container";
import Logo from "../../ui/logo";
import UserMenu from "./user-menu";
import UserButton from "./user-button";
import Mobile from "./mobile";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white py-4 shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          <Logo width={180} height={50} />
          <div className="hidden items-center gap-10 md:flex">
            <UserMenu />
            <UserButton />
          </div>
          <Mobile />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
