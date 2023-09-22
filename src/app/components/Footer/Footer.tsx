// import React from "react";
import "./style.css";
function Footer() {
  return (
    <>
      <footer className="custom-footer">
        <div className="container p-4">
          <p>
            &copy; {new Date().getFullYear()} SPAship, All rights reserved{" "}
            {process.env.NEXT_PUBLIC_VERSION}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
