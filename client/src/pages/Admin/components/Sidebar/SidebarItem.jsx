// src/components/Sidebar/SidebarItem.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const SidebarItem = ({ name, path, icon: Icon }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "sidebar-item active" : "sidebar-item"
      }
    >
      <Icon className="sidebar-icon" />
      <span className="sidebar-text">{name}</span>
    </NavLink>
  );
};

export default SidebarItem;

