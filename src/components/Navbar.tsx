import React from "react";
import "../styles/Styles.css";

const Navbar = () => {
  return (
    <div id="mainav">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <h4 id="logos">
            <a href="http://localhost:3000/" className="nav-link mt-2">
              MUVIME
            </a>
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynav">
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-decoration-none text-reset"
                >
                  Filmler
                </a>
              </li>
              <li className="nav-item nav1">
                <a
                  href="#"
                  className="nav-link text-decoration-none text-reset"
                >
                  Diziler
                </a>
              </li>
              <li className="nav-item nav2">
                <a
                  href="#"
                  className="nav-link text-decoration-none text-reset"
                >
                  Kişiler
                </a>
              </li>
              <li className="nav-item nav2">
                <a
                  href="#"
                  className="nav-link text-decoration-none text-reset"
                >
                  Daha Fazla +
                </a>
              </li>
            </ul>
          </div>
          <select id="lang" className="form-select">
            <option value="Eng">EN</option>
            <option value="Tr">TR</option>
          </select>
          <div id="userThing" className="d-inline mb-2">
            <a
              href="#"
              className="text-decoration-none text-reset d-none d-lg-inline"
            >
              Furkan Şahbaz
            </a>
            <a
              href="#"
              className="text-decoration-none text-reset d-inline ps-4"
            >
              <img
                id="userImage"
                className="rounded-circle float-right"
                src="https://randomuser.me/api/portraits/men/51.jpg"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
