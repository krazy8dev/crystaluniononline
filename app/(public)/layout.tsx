import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Breadcrumb from "@/components/ui/breadcrumb";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
