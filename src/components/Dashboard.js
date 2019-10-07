import React from "react";
import { NavLink } from "react-router-dom";

// https://github.com/parcel-bundler/parcel/issues/2863#issue-426218466
const Logo = React.lazy(() => import("./Logo"));

import "./Dashboard.css";

export default function Dashboard({ children }) {
  return <>
    <header className="header">
      <div>
        <Logo />
      </div>

      <nav className="header--nav">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/404">NotFound</NavLink>
      </nav>
    </header>

    <main>{children}</main>

    <footer>
      Copyright © {(new Date).getFullYear()}
    </footer>
  </>
}