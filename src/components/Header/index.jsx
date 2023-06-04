import React from "react";
import TaskDrawer from "../TaskDrawer";
import "./header.css";
const Header = () => {
  return (
    <nav>
      <h3>Task Management</h3>
      <TaskDrawer />
    </nav>
  );
};

export default Header;
