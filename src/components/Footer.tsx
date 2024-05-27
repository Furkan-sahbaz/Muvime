import React from "react";
import "../styles/Styles.css";

const Footer = () => {
  return (
    <div id="forFoot" className="container-fluid">
      <div className="row mt-5 text-end pe-5 border-0">
        <div className="col border my-5 text-white border-0">
          <h5 className="pb-2">THE BASICS</h5>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              About TMDB
            </a>
          </p>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              Contact Us
            </a>
          </p>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              Support Forums
            </a>
          </p>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              API
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none text-white">
              System Status
            </a>
          </p>
        </div>
        <div className="col border my-5 text-white border-0">
          <h5 className="pb-2">GET INVOLVED</h5>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              Contribution Bible
            </a>
          </p>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              3rd Paty Applications
            </a>
          </p>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              Add New Movie
            </a>
          </p>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              Add New TV Show
            </a>
          </p>
        </div>
        <div className="col border my-5 text-white border-0">
          <h5 className="pb-2">COMMUNITY</h5>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              Guidelines
            </a>
          </p>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              Discussions
            </a>
          </p>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              Leaderboard
            </a>
          </p>
          <p className="my-0">
            <a href="#" className="text-decoration-none text-white">
              Twitter
            </a>
          </p>
        </div>
        <div className="col border my-5 text-white border-0">
          <h5 className="pb-2">SOCIAL</h5>
          <p>
            <button className="bg-0 text-light border-0 ms-2">
              <i className="bi bi-facebook fs-4"></i>
            </button>
            <button className="bg-0 text-light border-0 ms-2">
              <i className="bi bi-instagram fs-4"></i>
            </button>
            <button className="bg-0 text-light border-0 ms-2">
              <i className="bi bi-twitter fs-4"></i>
            </button>
            <button className="bg-0 text-light border-0 ms-2">
              <i className="bi bi-youtube fs-4"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
