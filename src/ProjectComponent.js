import React from 'react';
import { leadership_list } from "./data/LeadershipData.js"
import { design_list } from "./data/DesignData.js"
import './styles/ExperienceComponent.css'
//Users/aakarshsinha/Desktop/Local Desktop/Projects/personal_website/personal_website/src/assets/h.png
export default class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: "visible",
            objects: leadership_list,
            image: `./src/assets/s.png`
        };
    };

    renderSkills(skillList) {
        return (
            skillList.map(item => {
                return (
                    <div className="skill-item">{item}</div>
                )
            })
        )
    }

    renderDescription() {
        return (
            <div className="description-first">
                <div>{this.props.data.description.split("~")[0]}</div>
                {this.props.data.description.split("~").slice(1, this.props.data.description.split("~").length).map((item) => {
                    if (item[0] == "+") {
                        return (<div className="header-element">{item.slice(1,item.length)}</div>)
                    }
                    else {
                        return (
                            <div className="description">
                                <div className="dot"></div>
                                <div>{item}</div>
                            </div>
                        )
                    }

                })}
            </div>
        )
    }

    renderLinks() {
        return (
            <div className="link-outer">
                <div className="outer-link">
                    {this.props.data.link.map((item) => {
                        return (
                            <div className="link">
                                <div> <img className="link-img" src={require('./assets/link.png')} /> </div>
                                <div> <a className="link-text" target="_blank" href={item.url}>{item.name}</a> </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="column-items-design">
                <div className="inner-container-experience">
                {this.props.data.image!="blank"? <div className="design-image-container"><img className="design-image" src={require('./assets/'+this.props.data.image+'.png')} /></div> : null}
                    <div className="name-description-container-design">
                    <div className="name-component">{this.props.data.name} </div>
                    <div className="position">{this.props.data.position} </div>
                    {this.renderLinks()}
                    {this.renderDescription()}
                    <div className="skill-container"> {this.renderSkills(this.props.data.skillList)}</div>
                    </div>
                </div>
            </div>
        );
    }
}