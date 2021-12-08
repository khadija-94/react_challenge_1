import React from "react";

function MainCorner(props) {
  return (
    <div className="colorful small smooth">
      <p>
        <span style={{ fontWeight: "bold", fontSize: "16px" }}>
          {props.main_title}
        </span>
        <br />
        <small> {props.sub_title}</small>
      </p>
    </div>
  );
}
export default MainCorner;
