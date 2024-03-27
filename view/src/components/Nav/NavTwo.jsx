import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ProfileImage from "./profile-pic.png";
import Logo from "../Logo/Logo";

export default function NavTwo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-2 md:px-6 lg:px-12">
        <Logo />

        {/* hidden for large devices */}
        <div className="lg:hidden mr-4" onClick={toggleMenu}>
          <MenuIcon />
        </div>

        <ul className="hidden lg:flex lg:space-x-12 lg:font-black lg:text-md">
          <NavLink to="/" className="hover:border-black hover:border-b-2 pb-2">
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="hover:border-black hover:border-b-2 pb-2"
          >
            Shop
          </NavLink>
          <NavLink
            to="/products"
            className="hover:border-black hover:border-b-2 pb-2"
          >
            Featured
          </NavLink>
          <NavLink
            to="/products"
            className="hover:border-black hover:border-b-2 pb-2"
          >
            Accessories
          </NavLink>
          <NavLink
            to="/products"
            className="hover:border-black hover:border-b-2 pb-2"
          >
            Deals
          </NavLink>
        </ul>

        <article className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-6">
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
          <FavoriteBorderIcon />
          <img src={ProfileImage} alt="profile picture" className="w-10 h-10" />
        </article>
      </nav>

      {/* Navigation for mobile, small, and medium devices */}
      <div className={`lg:hidden relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <article className="flex items-center mb-12 justify-between">
            <Logo />
            <CloseIcon onClick={closeMenu} />
          </article>

          <ul className="flex flex-col space-y-8 font-black text-md px-8">
            <NavLink
              to="/"
              className="hover:bg-black hover:text-white px-2 py-4"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="hover:bg-black hover:text-white px-2 py-4"
            >
              Shop
            </NavLink>
            <NavLink
              to="/products"
              className="hover:bg-black hover:text-white px-2 py-4"
            >
              Featured
            </NavLink>
            <NavLink
              to="/products"
              className="hover:bg-black hover:text-white px-2 py-4"
            >
              Accessories
            </NavLink>
            <NavLink
              to="/products"
              className="hover:bg-black hover:text-white px-2 py-4"
            >
              Deals
            </NavLink>
          </ul>

          <article className="flex flex-col items-center justify-center space-y-4 my-auto py-6 px-8">
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </article>

          <p className="my-4 text-xs text-center text-black">
            Copyright © 2024
          </p>
        </nav>
      </div>
    </>
  );
}
