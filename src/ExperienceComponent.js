import React from 'react';
import { leadership_list } from "./data/LeadershipData.js"
import { design_list } from "./data/DesignData.js"
import './styles/ExperienceComponent.css'
//Users/aakarshsinha/Desktop/Local Desktop/Projects/personal_website/personal_website/src/assets/h.png
export default class ExperienceComponent extends React.Component {
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
            <div className="column-items">
                <div className="inner-container-experience">
                    <div className="logo"><img className="logo-actual" src={require('./assets/' + this.props.data.logo + '.png')} /></div>
                    <div className="name-component">{this.props.data.name} </div>
                    <div className="position">{this.props.data.position} </div>
                    <div className="date">{this.props.data.date} </div>
                    {this.renderLinks()}
                    {this.renderDescription()}
                    <div className="skill-container"> {this.renderSkills(this.props.data.skillList)}</div>
                </div>
            </div>
        );
    }
}