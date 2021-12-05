import React, { Component } from "react";
import FilterOps from "./FilterOps";
import MainCorner from "./MainCorner";
import Roadmap from "./Roadmap";
import Container from "./Container";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter_ops: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
    };
  }

  render() {
    return (
      <div class="light small">
        {this.state.filter_ops.map((f, i) => (
          <FilterOps className="filter-ops" title={f} key={i} />
        ))}
      </div>
    );
  }
}

export default MainPage;
