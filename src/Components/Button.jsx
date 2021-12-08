import { FaPlus } from "react-icons/fa";

function Button(props) {
  return (
    <button className={props.className}>
      {props.icon === "+" ? (
        <FaPlus style={{ paddingRight: "5px", height: "0.8em" }} />
      ) : (
        ""
      )}
      {props.label}
    </button>
  );
}
export default Button;
