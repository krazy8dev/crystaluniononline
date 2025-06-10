import NavbarAuth from "@/components/auth/navbar";
import Breadcrumb from "@/components/ui/breadcrumb";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarAuth />
      <div className="pt-24 bg-gray-100 h-screen">
        <Breadcrumb />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
