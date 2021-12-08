import React, { Component } from "react";
import FilterOps from "./FilterOps";
import MainCorner from "./MainCorner";
import Roadmap from "./Roadmap";
import ItemContainer from "./ItemContainer";
import ItemsHeader from "./ItemsHeader";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterResult: [],
      filter_ops: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
      roadmap_leads: [
        { id: "e1", title: "Planned", color: "rgb(232 160 147)", count: 2 },
        { id: "e2", title: "In-Progress", color: "rgb(168 43 216)", count: 3 },
        { id: "e3", title: "Live", color: "rgb(107 186 235)", count: 1 },
      ],
      suggestions: [
        {
          id: "s1",
          title: "Add tags for solutions",
          desc: "Easier to search for solutions based on a specific stack.",
          type: "Enhancement",
          count: 112,
          commentsCount: 2,
        },
        {
          id: "s2",
          title: "Add a dark theme option",
          desc: "It would help people with light sensitivities and who prefer dark mode.",
          type: "Feature",
          count: 99,
          commentsCount: 4,
        },
        {
          id: "s3",
          title: "Q&A within the challenge hubs",
          desc: "Challenge-specific Q&A would make for easy reference.",
          type: "Feature",
          count: 65,
          commentsCount: 1,
        },
        {
          id: "s4",
          title: "Allow image/video upload to feedback",
          desc: "Images and screencasts can enhance comments on solutions",
          type: "Enhancement",
          count: 51,
          commentsCount: 2,
        },
        {
          id: "s5",
          title: "Ability to follow others",
          desc: "Stay updated on comments and solutions other people post",
          type: "Feature",
          count: 42,
          commentsCount: 3,
        },
        {
          id: "s6",
          title: "Preview images not loading",
          desc: "Challenge preview images are missing when you apply a filter.",
          type: "Bug",
          count: 3,
          commentsCount: 0,
        },
      ],
    };

    this.filterOps = this.filterOps.bind(this);
  }
  filterOps(e) {
    e.preventDefault();
    e.target.classList.toggle("clicked-filter-ops");
    var filter_option = e.target.value;
    // var c = document.getElementsByClassName("clicked-filter-ops");
    var results = this.state.suggestions;

    if (filter_option !== "") {
      if (filter_option === "all") {
        this.setState({
          filterResult: results,
        });
      } else {
        results = this.state.suggestions.filter((sug) => {
          console.log(
            Object.keys(sug).find((key) => sug[key] === filter_option)
          );
          return Object.keys(sug).find(
            (key) => sug[key] === filter_option && key === "type"
          );
        });
        if (results) {
          this.setState({
            filterResult: results,
          });
        }
      }
    }
    if (results.length === 0) {
      this.setState({
        filterResult: [0],
      });
    }
  }
  render() {
    let filteredSuggestions = [];

    return (
      <div className="main-container">
        <MainCorner
          style={{ gridArea: "a" }}
          main_title="Frontend Mentor"
          sub_title="Feedback Board"
        />
        <div className="light small smooth" style={{ gridArea: "b" }}>
          {this.state.filter_ops.map((f, i) => (
            <FilterOps
              className="filter-ops"
              title={f}
              key={i}
              onClick={this.filterOps}
            />
          ))}
        </div>

        <div className="light small smooth" style={{ gridArea: "c" }}>
          <Roadmap data={this.state.roadmap_leads} />
        </div>
        <div style={{ gridArea: "d" }}>
          <ItemsHeader
            items_no={this.state.suggestions.length}
            items_title="Suggesstions"
            sort_option_title="Most Upvotes"
            sort_by="asc"
          />
          <div className="items">
            {this.state.filterResult.length !== 0 ? (
              this.state.filterResult[0] === 0 ? (
                <div className="light smooth medium item"> No results! </div>
              ) : (
                this.state.filterResult.map((s) => (
                  <ItemContainer
                    id={s.id}
                    title={s.title}
                    desc={s.desc}
                    count={s.count}
                    commentsCount={s.commentsCount}
                    type={s.type}
                    key={s.id}
                    className="light smooth medium item"
                  />
                ))
              )
            ) : (
              this.state.suggestions.map((s) => (
                <ItemContainer
                  id={s.id}
                  title={s.title}
                  desc={s.desc}
                  count={s.count}
                  commentsCount={s.commentsCount}
                  type={s.type}
                  key={s.id}
                  className="light smooth medium item"
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
