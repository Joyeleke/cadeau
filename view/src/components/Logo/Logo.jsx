import LogoImage from "./cadeau-high-resolution-logo-black.png";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Logo({ size }) {
  return (
    <Link to="/">
      <img
        src={LogoImage}
        alt="company-logo"
        className={`${size === "large" ? "w-48 h-36" : "w-28 h-20"}`}
      />
    </Link>
  );
}
