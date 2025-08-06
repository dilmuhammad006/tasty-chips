import { NavLink } from "react-router";
import "./navbar.scss";
import { BasketIcon, Logo, SearchIcon } from "../../assets";
const NavbarLayout = () => {
  return (
    <nav className="fc">
      <div className="container fc">
        <div className="logo fc">
          <Logo />
          <span>Potato</span>
        </div>
        <div className="link fc">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>Shop</NavLink>
          <NavLink to={"/"}>Pricing</NavLink>
          <NavLink to={"/"}>Services</NavLink>
        </div>
        <div className="buttons fc">
          <SearchIcon />
          <BasketIcon />
        </div>
      </div>
    </nav>
  );
};

export default NavbarLayout;
