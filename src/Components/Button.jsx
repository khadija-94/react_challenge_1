import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faPlus);

function Button(props) {
  return (
    <button className={props.className}>
      {props.icon ? (
        <FontAwesomeIcon style={{ paddingRight: "5px" }} icon={faPlus} />
      ) : (
        ""
      )}
      {props.label}
    </button>
  );
}
export default Button;
