import React from "react";
import PropTypes from "prop-types";

class Name extends React.Component {
  render() {
    return (
      <p data-testid="Name">
        {this.props.name} was here / {this.props.name}{" "}
        {this.props.plural ? "étaient" : "était"} ici. ({this.props.date})
      </p>
    );
  }

  static propTypes = {
    date: PropTypes.string,
    name: PropTypes.string,
    plural: PropTypes.bool
  };
}

export default Name;
