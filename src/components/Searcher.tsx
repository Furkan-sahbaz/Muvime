import React, { useEffect, useState } from "react";
import { Api_Key, MSURL } from "../modules/ApiLink";
import SearchDp from "./SearchDp";
import { getSearchQuery } from "./searchState";
import searchEventEmitter from "./eventEmitter";

const Searcher = () => {
  const [searchQuery, setSearchQuery] = useState(getSearchQuery());

  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const handleSearchQueryChange = (
      newQuery: React.SetStateAction<string>
    ) => {
      setSearchQuery(newQuery);
    };

    searchEventEmitter.on("searchQueryChanged", handleSearchQueryChange);

    return () => {
      searchEventEmitter.off("searchQueryChanged", handleSearchQueryChange);
    };
  }, []);

  return (
    <div id="forContent" className="container mt-5 p-0">
      <div className="d-inline-block opacity-75 mb-5 w-100">
        <h1 id="forPopular" className="d-flex float-start fw-bold">
          Search Result
        </h1>
        <p id="SearchP" className="d-flex my-2 py-1 fw-bold float-end">
          {loopCount} Results
        </p>
      </div>
      <div id="dispContent" className="d-flex flex-wrap">
        <SearchDp
          api={`${MSURL}?api_key=${Api_Key}&query=${searchQuery}`}
          setLoopCount={setLoopCount}
        />
      </div>
    </div>
  );
};

export default Searcher;
