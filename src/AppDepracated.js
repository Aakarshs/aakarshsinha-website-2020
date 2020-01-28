import React from 'react';
import A from './assets/A.png';
import lower_a from './assets/lower_a.png';
import k from './assets/k.png';
import r from './assets/r.png';
import s from './assets/s.png';
import h from './assets/h.png';
import posed, { PoseGroup } from 'react-pose';
import './styles/home.css';
import ExperienceModalCards from './ExperienceModalCards.js'


export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  show() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    const Box = posed.div({
      draggable: 'y',
      dragEnd: {
        y: 0,
        transition: ({ from, to }) => ({
          type: 'keyframes',
          values: [from, 50, to],
          times: [0, 0.25, 1]
        })
      }
    });
    const Modal = posed.div({
      enter: {
        x: 0,
        opacity: 1,
        delay: 300,
        transition: {
          x: { type: 'spring', stiffness: 1000, damping: 15 },
          default: { duration: 300 }
        }
      },
      exit: {
        x: 50,
        opacity: 0,
        transition: { duration: 150 }
      }
    });
    const Shade = posed.div({
      enter: { opacity: 1 },
      exit: { opacity: 0 }
    });
    const { isVisible } = this.state;
    return (
      <div className="App">
         <ExperienceModalCards/>
          <div className = "background-container">
         <div className ="background-left-container"> </div>
         <div className = "background-right-container"> </div>
         </div>
        <header className="App-header">
          <div className="dot">
            <div onClick={() => { this.show(); }} className="projects" >
              <PoseGroup>
                {isVisible && [
                  <Modal key="modal" className="modal" pose={this.state.isVisible}>
                    {this.state.isVisible}
                    <div style={{ width: 1000, backgroundColor: "red" }}> fwe</div>
                  </Modal>
                ]}
              </PoseGroup>
            </div>
          </div>
          <div className="central_name">
            <Box pose={this.state.isVisible}>
              <div style={{ position: 'absolute', }}>
                <img onClick={this.show.bind(this)} src={A} style={{ height: 100, zIndex: 9, position: 'relative', right: 300, top: 100 }} />
              </div>
            </Box>
            <Box pose={this.state.isVisible}>
              <div style={{ position: 'absolute', }}>
                <img src={lower_a} style={{ height: 100, position: 'relative', zIndex: 8, right: 220, top: 40, }} />
              </div>
            </Box>
            <Box pose={this.state.isVisible}>
              <div style={{ position: 'absolute', }}>
                <img src={k} style={{ height: 100, position: 'relative', zIndex: 7, right: 190, bottom: 0 }} />
              </div>
            </Box>
            <Box pose={this.state.isVisible}>
              <div style={{ position: 'absolute', }}>
                <img src={lower_a} style={{ height: 100, position: 'relative', zIndex: 6, bottom: 40, right: 90 }} />
              </div>
            </Box>
            <Box pose={this.state.isVisible}>
              <div style={{ position: 'absolute', }}>
                <img src={r} style={{ height: 100, position: 'relative', zIndex: 5, bottom: 70, right: 20 }} />
              </div>
            </Box>
            <Box pose={this.state.isVisible}>
              <div style={{ position: 'absolute', }}>
                <img src={s} style={{ height: 100, position: 'relative', zIndex: 4, bottom: 100, left: 50 }} />
              </div>
            </Box>
            <Box pose={this.state.isVisible}>
              <div style={{ position: 'absolute', }}>
                <img src={h} style={{ height: 100, position: 'relative', zIndex: 3, bottom: 130, left: 90 }} />
              </div>
            </Box>
          </div>
        </header>
      </div>
    );
  }
}
