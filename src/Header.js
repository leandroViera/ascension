import React from "react";

export class Header extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return this.props.children;
  }
}
