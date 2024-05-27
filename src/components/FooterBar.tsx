import React from "react";
import "../styles/Styles.css";

const FooterBar = () => {
  return (
    <div id="footBP" className="container-fluid d-flex">
      <div className="py-3">
        <h5 className="fw-bold mb-0">MUVIME</h5>
      </div>
      <div className="py-3 ms-3 fw-bold">
        <p id="footP" className="mb-0">
          <i className="bi bi-c-circle"></i> 2024 Tübitak. All rights reserved.
        </p>
      </div>
      <div className="py-3 ms-auto">
        <ol className="list-inline mb-0">
          <li className="list-inline-item ps-1">
            <a href="#" className="text-decoration-none text-reset">
              Terms of Use
            </a>
          </li>
          <li className="list-inline-item ps-1">
            <a href="#" className="text-decoration-none text-reset">
              API Terms of Use
            </a>
          </li>
          <li className="list-inline-item ps-1">
            <a href="#" className="text-decoration-none text-reset">
              Privacy Policy+
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FooterBar;
