import React from "react";
import "./style.css";
function Footer() {
  return (
    <>
      <footer className="custom-footer">
        <div className="container p-4">
          <p>&copy; {new Date().getFullYear()} SPAship, All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
