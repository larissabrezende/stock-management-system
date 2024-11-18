import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Home-removebg-preview.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/products" className="navbar-link">
            Produtos
          </Link>
        </li>
        <li>
          <Link to="/stock-update" className="navbar-link">
            Atualizar Estoque
          </Link>
        </li>
        <li>
          <Link to="/reports" className="navbar-link">
            Relatórios
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
