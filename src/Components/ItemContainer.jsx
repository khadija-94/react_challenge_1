import React, { Component } from "react";

export default function ItemContainer(props) {
  return (
    <table className={props.className}>
      <tbody>
        <tr>
          <td>^</td>
          <td colSpan="2">{props.title}</td>
        </tr>
        <tr>
          <td>{props.count}</td>
          <td>{props.desc}</td>
          <td>{props.commentsCount}</td>
        </tr>
        <tr>
          <td colSpan="3">{props.type}</td>
        </tr>
      </tbody>
    </table>
  );
}
