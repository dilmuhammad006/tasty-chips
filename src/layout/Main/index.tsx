import type { ReactNode } from "react";
import "./main.scss";
import NavbarLayout from "../Navbar";
import FooterLayout from "../Footer";

type Props = {
  children: ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-wrapper">
      <div className="main">
        <NavbarLayout />
        {children}
      </div>
      <FooterLayout />
    </div>
  );
};

export default MainLayout;
