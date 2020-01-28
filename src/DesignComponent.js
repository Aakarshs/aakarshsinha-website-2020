import React from 'react';
import { leadership_list } from "./data/LeadershipData.js"
import './styles/designComponent.css';
import './styles/ExperienceComponent.css';


export default class DesignComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: "visible",
            objects: leadership_list
        };
    };

    render() {
        return (
            <div className="column-items-design">
                <div className="design-image-container"><img className="design-image" src={require('./assets/'+this.props.data.image+'.png')} /></div>
                <div className="name-description-container-design">
                    <div className="name-component"> {this.props.data.name} </div>
                    <div className="description">  {this.props.data.description} </div>
                </div>
            </div>
        );
    }
}