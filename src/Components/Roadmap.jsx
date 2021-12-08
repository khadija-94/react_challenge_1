import React from "react";

function Roadmap(props) {
  return (
    <table className="roadmap">
      <tbody>
        <tr>
          <td colSpan="2" style={{ paddingLeft: "12px" }}>
            <b>Roadmap</b>
          </td>
          <td>
            <a href="#">view</a>
          </td>
        </tr>
        {props.data.map((d) => (
          <tr id={d.id} key={d.id}>
            <td className="bullet" style={{ color: d.color }}></td>
            <td>{d.title}</td>
            <td>{d.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Roadmap;
