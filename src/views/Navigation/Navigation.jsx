import React from "react";
import "./Style.scss";
import { Link, NavLink } from "react-router-dom";
function Navigation() {
  return (
    <div className="topnav">
      <NavLink to="/" activeClassName="avtive" exact={true}>
        Home
      </NavLink>
      <NavLink to="/todo" activeClassName="avtive">
        Todo
      </NavLink>
      <NavLink to="/about" activeClassName="avtive">
        About
      </NavLink>
    </div>
  );
}

export default Navigation;
