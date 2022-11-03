import React from "react";
import A from "./assets/A.png";
import lower_a from "./assets/lower_a.png";
import k from "./assets/k.png";
import r from "./assets/r.png";
import s from "./assets/s.png";
import h from "./assets/h.png";
import posed, { PoseGroup } from "react-pose";
import "./styles/home.css";
import ExperienceModalCards from "./ExperienceModalCards.js";

const Modal = posed.div({
  enter: {
    left: { y: -1000 },
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },

  exit: {
    y: 1050,
    opacity: 0,
    transition: { duration: 150 }
  }
});

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  show() {
    this.setState({ isVisible: !this.state.isVisible });
  }


  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    return true
  }

  renderHeader() {
    if (this.resize()) {
      console.log("changed to mobile")
    }
    return (
      <div className="header">
        <div className="header-element"> <a className="header-a" target="_blank" href={"http://www.houseofdesign.org"}>HOUSEOFDESIGN</a> </div>
        <div className="header-element"> <a className="header-a" target="_blank" href={"https://www.linkedin.com/in/aakarshsinha/"}>LINKEDIN</a> </div>
        <div className="header-element"> <a className="header-a" target="_blank" href={"https://github.com/Aakarshs"}>GITHUB</a> </div>
      </div>
    );
  }


  renderPhone() {
    return (
      <div className="mobile-modal">
        <div className="mobile-inner-container">
          <img src={require("./assets/home_bg.png")} style={{ height: "65vh", position: "absolute", right: -280, top: -102 }} />
          <div>
            <div className="name">
              <div className="name-text-first"> Aakarsh </div>
              <div className="name-text-second"> Sinha </div>
            </div>

            <div className="description-text">
              Hi there! To expereince this awesome website created by Aakarsh,
                 please use a desktop or a laptop. But you can always
             download Aakarsh's amazing resume.
            </div>

            <div>
              <a className="download-resume-button" href='https://drive.google.com/file/d/1PvzMSNzZi61jjj1Ufw7a1svDeevn4f7O/view?usp=sharing'>Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderPhone()}
        {this.renderHeader()}
        <PoseGroup>
          {this.state.isVisible && [
            // If animating more than one child, each needs a `key`
            <Modal key="modal">
              {this.state.isVisible ? <ExperienceModalCards /> : null}
            </Modal>
          ]}

        </PoseGroup>
        <header className="App-header">
          <img src={require("./assets/home_bg.png")} style={{ height: "90vh", zIndex: -1, position: "absolute", right: 0, top: 0 }} />
          <div className="description-container">
            <div>
              <div className="name">
                <div className="name-text-first"> Aakarsh </div>
                <div className="name-text-second"> Sinha </div>
              </div>

              <div className="description-text">
                Aakarsh is an entrepreneur, a designer, an engineer and a leader.
                How is he all of it? Click the button to find out.
            </div>
              <div className="home-button-container">
                <div className="button" onClick={() => { this.show() }}> Click Here To Find More </div>
                <div className="button-full"><a className="button-url" target="_blank" href='https://drive.google.com/file/d/1eLrUg_NZkWPJTQ3sbSCazf0XCQQHYYaR/view?usp=share_link'>Download Resume</a></div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
