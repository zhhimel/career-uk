// src/components/Sidebar/Sidebar.jsx
import React from "react";
import SidebarItem from "./SidebarItem";
import { sidebarData } from "./sidebarData";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">Career-UK Admin</div>

      <nav className="sidebar-menu">
        {sidebarData.map((item) => (
          <SidebarItem
            key={item.name}
            name={item.name}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </nav>

      <div className="sidebar-footer">v1.0.0</div>
    </aside>
  );
};

export default Sidebar;
