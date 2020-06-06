import Ink from "react-ink";
import PropTypes from "prop-types";
import React from "react";

class LoadButton extends React.Component {
  constructor(props) {
    super(props);

    this.style = {
      backgroundColor: "#ce3026",
      color: "#ffffff",
      display: "block",
      fontFamily: "'Lato', Helvetica, Arial, sans-serif",
      fontSize: "0.8rem",
      fontWeight: "700",
      padding: "10px",
      textAlign: "center",
      width: "100%",
      position: "relative"
    };
  }

  render() {
    return (
      <button style={this.style} onClick={this.props.onClick}>
        <Ink />
        More LGTM!
      </button>
    );
  }
}

LoadButton.propTypes = {
  onClick: PropTypes.func
};

export default LoadButton;
