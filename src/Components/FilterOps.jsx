import React from "react";

function FilterOps(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      value={props.title}
    >
      {props.title}
    </button>
  );
}
export default FilterOps;
