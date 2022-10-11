import React, { useState, useEffect } from "react";

function Hamburger() {
  const svgHam = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="logo ham ham-opacity-1"
      id="svg-ham"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
  const svgX = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="logo x"
      id="svg-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
  const [svg, setSvg] = useState(svgHam);
  const [sw, setSw] = useState(false);

  useEffect(() => {
    if (sw) {
      setSvg(svgX);
    } else {
      setSvg(svgHam);
    }
  }, [sw]);
  function toggle() {
    if (sw) {
      setSw(false);
    } else {
      setSw(true);
    }
  }
  return <div onClick={() => toggle()}>{svg}</div>;
}

export default Hamburger;
