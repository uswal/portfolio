import React, { useState } from "react";
import Hamburger from "./hamburger.jsx";
import Collapsed from "./collapsed.jsx";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function expandHamburger() {
    const elem = document.getElementById("collapsed-container");
    const hamBtn = document.getElementById("ham-btn");

    if (!isCollapsed) {
      elem.classList.add("collapsed-container-expand");
      hamBtn.classList.add("ham-rotator-360");

      setIsCollapsed(true);
    } else {
      elem.classList.remove("collapsed-container-expand");
      hamBtn.classList.remove("ham-rotator-360");
      setIsCollapsed(false);
    }
  }

  return (
    <div className="navbar-container">
      <Collapsed />
      <div className="links">
        <button
          className="btn-hamburger ham-rotator-0"
          id="ham-btn"
          onClick={expandHamburger}
        >
          <Hamburger />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
