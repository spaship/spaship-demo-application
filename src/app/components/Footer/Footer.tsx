// import React from "react";
import "./style.css";
function Footer() {
  return (
    <>
      <footer className="custom-footer">
        <div className="container p-4">
          <p>
            &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_VERSION},
            All rights reserved{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
