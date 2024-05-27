import React from "react";
import "../styles/Styles.css";

const Description = () => {
  return (
    <div
      id="mContainer"
      className="container d-flex gx-0 justify-content-center"
    >
      <div className="text-center">
        <button
          type="button"
          id="premium"
          className="text-light border-0 rounded-1 px-3 py-2 fw-bold"
        >
          Get Premium
        </button>
        <p className="text-secondary opacity-50 mt-2">The TMDB Advantage</p>
        <h2 id="lead">
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <p>
          The Movie Database (TMDB) is a community built movie and TV database.
          Every piece of data has been added by our amazing community dating
          back to 2008. TMDb's strong international focus and breadth of data is
          largely unmatched and something we're incredibly proud of. Put simply,
          we live and breathe community and that's precisely what makes us
          different.
        </p>
      </div>
    </div>
  );
};

export default Description;
