import Button from "./Button";
import { FaAngleDown, FaAngleUp, FaLightbulb } from "react-icons/fa";

function ItemsHeader(props) {
  return (
    <div className="items-header dark smooth medium">
      <FaLightbulb />
      <h3>
        {props.items_no} {props.items_title}
      </h3>
      {props.sort_by ? <p>Sort by:</p> : ""}
      <b>{props.sort_option_title}</b>
      {props.sort_by === "asc" ? <FaAngleDown /> : <FaAngleUp />}
      <Button label="Add Feedback" icon="+" className="btn smooth" />
    </div>
  );
}
export default ItemsHeader;
