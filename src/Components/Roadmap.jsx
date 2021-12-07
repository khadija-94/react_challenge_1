import React from "react";

function Roadmap(props) {
  return (
    <table class="roadmap">
      <tbody>
        <tr>
          <td colspan="2" style={{ "padding-left": "12px" }}>
            <b>Roadmap</b>
          </td>
          <td>
            <a href="#">view</a>
          </td>
        </tr>
        {props.data.map((d) => (
          <tr id={d.id}>
            <td class="bullet" style={{ color: d.color }}></td>
            <td>{d.title}</td>
            <td>{d.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Roadmap;
