import React from "react";
import "./toolbar.css";
const Toolbar = (props) => {
  return (
    <>
      <input
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
        className="search_bar"
        type="search"
        placeholder="Search task"
      />
    </>
  );
};

export default Toolbar;
