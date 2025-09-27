// src/components/Sidebar/sidebarData.js
import { FaHome, FaBriefcase, FaUsers, FaFileAlt, FaCog } from "react-icons/fa";

export const sidebarData = [
  { name: "Dashboard", path: "/", icon: FaHome },
  { name: "Jobs", path: "/jobs", icon: FaBriefcase },
  { name: "Applications", path: "/applications", icon: FaFileAlt },
  { name: "Users", path: "/users", icon: FaUsers },
  { name: "Settings", path: "/settings", icon: FaCog },
];
