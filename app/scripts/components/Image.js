import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader, MoonLoader } from 'react-spinners';
import { css } from 'react-emotion';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.width = 250;
        if (!!this.props.width) {
            this.width = this.props.width;
        }

        this.height = 250;
        if (!!this.props.height) {
            this.height = this.props.height;
        }

        this.imageStyle = {
            cursor: "pointer",
            objectFit: "cover"
        };
    }

    render() {
        return (
            <div>
                { (() => {
                    if (this.props.src === "") {
                        const style = {
                            width: this.width,
                            height: this.height,
                        };
                        return (
                            <div style={style}>
                                <MoonLoader loading={true} size={80} sizeUnit={"px"} color={'#F5A623'} />
                            </div>
                        )
                    }
                    return <img src={this.props.src} height={this.height} width={this.width} style={this.imageStyle} />
                })()}
            </div>
        );
    }
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number
};

export default Image;