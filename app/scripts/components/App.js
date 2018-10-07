import React from "react";
import Image from "./Image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ink from "react-ink";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.host = "http://localhost:3000";

        this.state = { images: [] };

        this.appStyle = {
            backgroundColor: "#27384c"
        };

        this.toastStyle = {
            fontSize: "1rem"
        };

        this.loadButtonStyle = {
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

        this.imageCount = 3;
    }

    initImages() {
        const images = Array(this.imageCount).fill({ src: "" });
        this.setState({ images });
    }

    async componentDidMount() {
        await this.refreshImages();
    }

    async refreshImages() {
        this.initImages();
        const arr = Array(this.imageCount).fill(this.fetchImage.bind(this));
        const images = await Promise.all(arr.map(f => f()));
        this.setState({ images });
    }

    async fetchImage() {
        try {
            const res = await fetch(`${this.host}/api/images/random`);
            const data = await res.json();
            return {
                id: data.id,
                src: `${this.host}/p/${data.id}`
            };
        } catch (err) {
            throw new Error(err);
        }
    }

    render() {
        return (
            <div className="app" style={this.appStyle}>
                <ToastContainer
                    style={this.toastStyle}
                    autoClose={1500}
                    position="bottom-center"
                />

                <button
                    style={this.loadButtonStyle}
                    onClick={this.refreshImages.bind(this)}
                >
                    <Ink />
                    More LGTM!
                </button>
                {this.state.images.map((image, idx) => (
                    <CopyToClipboard
                        key={idx}
                        text={image.src}
                        onCopy={() => toast("😸Copied!")}
                    >
                        <a>
                            <Image key={idx} src={image.src} />
                        </a>
                    </CopyToClipboard>
                ))}
            </div>
        );
    }
}

export default App;
