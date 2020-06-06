import React from "react";
import PropTypes from "prop-types";
import Loader from "../../images/loader.svg";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.width = 250;
    if (this.props.width) {
      this.width = this.props.width;
    }

    this.height = 250;
    if (this.props.height) {
      this.height = this.props.height;
    }

    this.imageStyle = {
      cursor: "pointer",
      objectFit: "cover",
      border: "5px #ffffff solid",
      width: `${this.width}px`,
      height: `${this.height}px`,
      margin: "7.5px 0 7.5px 15px"
    };

    this.loaderStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    };
  }

  render() {
    return (
      <div>
        {(() => {
          if (this.props.src === "") {
            const style = {
              border: "5px #ffffff solid",
              margin: "7.5px 0 18px 15px",
              width: this.width,
              height: this.height,
              position: "relative"
            };
            return (
              <div style={style}>
                <Loader style={this.loaderStyle} />
              </div>
            );
          }
          return <img src={this.props.src} style={this.imageStyle} />;
        })()}
      </div>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Image;
