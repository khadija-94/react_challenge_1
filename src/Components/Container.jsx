import React, { Component } from "react";

export default function Container(Comp) {
  return class extends Component {
    render() {
      return <Comp />;
    }
  };
}
