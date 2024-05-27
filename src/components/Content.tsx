import React from "react";
import Displayer from "../components/Displayer";
import { Api_Key, Populars } from "../modules/ApiLink";

const Content = () => {
  return (
    <div id="forContent" className="container p-0">
      <div className="d-inline-block opacity-75 mb-5 w-100">
        <h1 id="forPopular" className="d-flex float-start fw-bold">
          What's Popular
        </h1>
        <button id="bMore" className="d-flex btn my-2 py-1 fw-bold float-end">
          More
        </button>
      </div>
      <div id="dispContent" className="d-flex flex-wrap">
        <Displayer api={`${Populars}?api_key=${Api_Key}`} />
      </div>
    </div>
  );
};

export default Content;
