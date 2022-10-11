import React from "react";
import Navbar from "../components/navbar/navbar";
import "../css/navbar.css";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <div>
        <div
          className="img-container"
          style={{
            backgroundImage: "url('./contents/sample1.jpg')",
          }}
        >
          <label style={{ fontSize: "200px", color: "white" }}>WELCOME</label>
          <div
            class="content"
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "white",
            }}
          ></div>
        </div>
        <div
          className="img-container"
          style={{
            backgroundImage: "url('./contents/sample2.jpg')",
          }}
        ></div>
        <div
          className="img-container"
          style={{
            backgroundImage: "url('./contents/sample3.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Home;
