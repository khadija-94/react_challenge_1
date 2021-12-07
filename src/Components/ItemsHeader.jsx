import Button from "./Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faLightbulb);

function ItemsHeader(props) {
  return (
    <div className="items-header dark smooth medium">
      <FontAwesomeIcon icon={faLightbulb} />
      <h3>6 Suggestions</h3>
      <p>Sort by:</p>
      <i class="fas fa-sort-down"></i>
      <FontAwesomeIcon icon="coffee" />

      <b>Most Upvotes</b>
      <img />
      <Button label="Add Feedback" icon="+" className="btn smooth" />
    </div>
  );
}
export default ItemsHeader;
