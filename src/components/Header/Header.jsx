import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <link to={"/"}>
          <img src={logo} alt="logo React" />
          <span>Reactiva</span>
        </link>
      </div>
      <Nav />
    </header>
  );
};
