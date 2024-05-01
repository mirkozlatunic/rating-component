import React, { useState } from "react";

import "./Main.css";

const Main = () => {
  const numbers = ["1", "2", "3", "4", "5"];
  const [active, setActive] = useState(false);

  return (
    <div className="rating__content">
      <div className="rating__star">
        <img src="../../icon-star.svg" alt="start" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating__numbers">
        {numbers.map((number, index) => {
          return (
            <div
              className={`${
                active ? "rating__numbers-orange" : "rating__numbers-each"
              }`}
              key={index}
              onClick={() => setActive((number) => !number)}
            >
              {number}
            </div>
          );
        })}
      </div>
      <button type="submit" className="rating__button">
        Submit
      </button>
    </div>
  );
};

export default Main;
