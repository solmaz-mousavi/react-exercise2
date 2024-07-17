import React from "react";
import { Link } from "react-router-dom";
import './header.css'

export default function Header() {
  return (
    <>
      <ul className="navbar-container">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/movies">Movies</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/aboutUs">About Us</Link>
        </li>
      </ul>
    </>
  );
}
