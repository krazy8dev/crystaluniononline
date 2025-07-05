import NavbarAuth from "@/components/auth/navbar";
import Breadcrumb from "@/components/ui/breadcrumb";
import AuthWrapper from "@/utils/authWrapper";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <div>
        <NavbarAuth />
        <div className="h-screen md:bg-gray-100 bg-white pt-24">
          <Breadcrumb />
          {children}
        </div>
      </div>
    </AuthWrapper>
  );
};

export default AuthLayout;
