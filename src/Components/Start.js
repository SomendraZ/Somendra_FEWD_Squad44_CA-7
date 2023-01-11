import React from "react";
import Arrow from "./Resources/arrow.png";

const Start = () => {
  return (
    <div className="book">
      <div className="move">
        <img
          className="move1 user-select-none"
          src={Arrow}
          alt=""
          height="75rem"
        />
        <img
          className="move2 user-select-none"
          src={Arrow}
          alt=""
          height="75rem"
        />
        <img
          className="move1 user-select-none"
          src={Arrow}
          alt=""
          height="75rem"
        />
      </div>
      <br className="user-select-none" />
      <br className="user-select-none" />
      <h1 className="h1 user-select-none">Seach what you desire...</h1>
      <br className="user-select-none" />
      <br className="user-select-none" />
      <br className="user-select-none" />
      <br className="user-select-none" />
      <h1 className="user-select-none">The place where all your</h1>
      <h1 className="user-select-none">requirments will be fulfilled...</h1>
      <br className="user-select-none" />
      <br className="user-select-none" />
      <br className="user-select-none" />
      <br className="user-select-none" />
      <br className="user-select-none" />
      <br className="br user-select-none" />
    </div>
  );
};

export default Start;
