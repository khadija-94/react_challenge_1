import React from "react";
import { FaAngleUp, FaComment } from "react-icons/fa";

export default function ItemContainer(props) {
  return (
    <div className={props.className}>
      <div style={{ gridArea: "bb" }}>
        <b>{props.title}</b>
      </div>
      <div style={{ gridArea: "aa" }} className="count smooth">
        <FaAngleUp className="text-purple" />
        {props.count}
      </div>
      <div style={{ gridArea: "cc" }}>
        <p className="desc">{props.desc}</p>
      </div>
      <div style={{ gridArea: "ee" }} className="comments numbers">
        <FaComment style={{ color: "rgb(203 211 239)" }} />
        {props.commentsCount}
      </div>
      <div style={{ gridArea: "dd" }} className="filter-ops">
        {props.type}
      </div>
    </div>
  );
}
