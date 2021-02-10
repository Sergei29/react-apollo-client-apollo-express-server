import React from "react";
import { Link } from "react-router-dom";

type Props = { loggedIn: boolean; onLogout: () => void };

const NavBar = ({ loggedIn, onLogout }: Props): JSX.Element =>
  loggedIn ? (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/jobs/new">
          Post Job
        </Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-item" onClick={onLogout}>
          Logout
        </a>
      </div>
    </nav>
  ) : (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );

export default NavBar;
