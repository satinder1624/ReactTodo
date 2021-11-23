import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <span>
          <NavLink exact to="/">
            Home
          </NavLink>
        </span>

        <span>
          <NavLink to="/about">About</NavLink>
        </span>

        <span>
          <NavLink to="/todo">Todo</NavLink>
        </span>

        <span>
          <NavLink to="/contact">Contact</NavLink>
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
