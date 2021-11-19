import React from "react";
import ReactDOM from "react-dom";
import Coverflow from "react-coverflow";

ReactDOM.render(
  <Coverflow
    width="960"
    height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
  >
    <div
      onClick={() => fn()}
      onKeyDown={() => fn()}
      role="menuitem"
      tabIndex="0"
    >
      <img
        src="image/path"
        alt="title or description"
        style={{
          display: "block",
          width: "100%",
        }}
      />
    </div>
    <img
      src="image/path"
      alt="title or description"
      data-action="http://andyyou.github.io/react-coverflow/"
    />
    <img
      src="image/path"
      alt="title or description"
      data-action="http://andyyou.github.io/react-coverflow/"
    />
  </Coverflow>,

  document.querySelector(".content")
);
