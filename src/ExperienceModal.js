import React from 'react';
import './styles/experienceModal.css';
import posed, { PoseGroup } from 'react-pose';
import {leadership_list} from "./LeadershipData.js"

const Item = posed.li({
    flip: {
        scale: 1,
        transition: {
            scale: {
                type: 'spring',
                velocity: 5
            },
            default: {
                type: 'spring'
            }
        }
    }
});

export default class ExperienceModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: "visible",
            objects: leadership_list
        };
    };


    showToggle() {
        this.setState({ isVisible: "hidden" });
    }

    rotate(array) {
        var copy_array = array;
        var removed_elem = copy_array.shift();
        copy_array.push(removed_elem);
        return copy_array;
    }

    render() {
        return (
            <div style={{ visibility: this.state.isVisible }} className="main-container">
                <div className="inner-container">
                    <div onClick={this.showToggle.bind(this)}> X </div>
                    <div className="container">
                        <div><img className="side-graphic" src={require("./assets/leadership_gfx.png")} /></div>
                        <div className="carousel-container">
                            <div>
                                <ul className="carousel_list">
                                    <PoseGroup>{this.state.objects.map(item => <Item className="slide" key={item.id}>
                                        <img className="card-img" src={item.logo}/>
                                        <div> {item.name} </div>
                                        <div> {item.position} </div>
                                        <div> {item.date} </div>
                                        <div> {item.descritption} </div>
                                        <div className="skills-list"> {item.skill_list.map((skills)=><div className="skill"> {skills} </div>)} </div>
                                    </Item>)}</PoseGroup>
                                </ul>
                            </div>
                            <div className="nav-buttons">
                                <div onClick={() => this.setState({
                                    items: this.rotate(this.state.objects)
                                })}>Next</div>
                                <div onClick={() => this.setState({
                                    items: this.rotate(this.state.items)
                                })}>Prev</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}