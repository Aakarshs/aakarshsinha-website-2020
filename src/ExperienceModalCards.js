import React, { useLayoutEffect } from 'react';
import './styles/experienceModalcards.css';
import posed, { PoseGroup } from 'react-pose';

import { leadership_list } from "./data/LeadershipData.js";
import { design_list } from "./data/DesignData.js";
import { project_list } from "./data/ProjectData.js";

import DesignComponent from './DesignComponent'
import ExperienceComponent from './ExperienceComponent'
import ProjectComponent from './ProjectComponent'
import SkillsModal from './SkillsModal'

const Item = posed.div({
    flip: {
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



export default class ExperienceModalCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: "visible",
            component_to_render: leadership_list,
            show_skills: false
        };
        this.changeComponentToRender = this.changeComponentToRender.bind(this);
    };


    showToggle() {
        this.setState({ isVisible: "hidden" });
    }


    shuffle(array) {
        var j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }


    createAll() {
        return this.shuffle(leadership_list.concat(project_list.concat(design_list)));
    }


    getAllSkills() {
        var tempArray = new Set();
        var newArray = leadership_list.concat(project_list);
        for (var key in newArray) {
            for (var skill in newArray[key].skillList) {
                tempArray.add(newArray[key].skillList[skill]);
            }
        }
        return (tempArray)
    }

    filterArray(skill) {
        var tempArray = []
        var newArray = leadership_list.concat(project_list);
        for (var key in newArray) {
            if (newArray[key].skillList.includes(skill)) {
                tempArray.push(newArray[key]);
            }
        }
        return (tempArray)
    }


    renderColumns(array_to_map) {
        var mid = array_to_map[0].split
        if (mid == undefined) {
            mid = Math.ceil(array_to_map.length / 2);
        }

        var left_side = array_to_map.slice(0, mid);
        var right_side = array_to_map.slice(mid);

        var first_column = <PoseGroup>{left_side.map(item => {
            if (item.type == "Experiences") return (<Item key={item}><ExperienceComponent data={item} /></Item>);
            if (item.type == "Projects") return (<Item key={item}><ProjectComponent data={item} /></Item>);
            if (item.type == "Designs") return (<Item key={item}><DesignComponent data={item} /></Item>);
        })}</PoseGroup>;

        var second_column = <PoseGroup>{right_side.map(item => {
            if (item.type == "Experiences") return (<Item key={item}><ExperienceComponent data={item} /></Item>);
            if (item.type == "Projects") return (<Item key={item}><ProjectComponent data={item} /></Item>);
            if (item.type == "Designs") return (<Item key={item}><DesignComponent data={item} /></Item>);
        })}</PoseGroup>;

        return (
            <div className="rows">
                <div className="tests">
                    <div className="rows-inner-container-left">
                        {first_column}
                    </div>
                    <div className="rows-inner-container-right">
                        {second_column}
                    </div>
                </div>
            </div>
        )
    }


    showSkillsModal() {
        this.setState({ show_skills: !this.state.show_skills })
    }


    changeComponentToRender(name_of_component) {
        this.setState({ component_to_render: name_of_component });
    }


    renderSkills() {
        return (
            <div style={{ visibility: this.state.isVisible }} className="main-container-skills">
                <div className="inner-container-skills">
                    <img className="cancel-button" onClick={() => this.showSkillsModal()} src={require("./assets/cancel.png")} />

                    <div> Choose a skill </div>
                    <div className="skill-rows">
                        {[...this.getAllSkills()].map(item => {
                            return (<div className="skill-list" onClick={() => { this.changeComponentToRender(this.filterArray(item)); this.showSkillsModal() }}> {item} </div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }


    render() {
        var x = this.renderSkills()
        return (
            <div>
                <div style={{ visibility: this.state.isVisible }} className="main-container">
                    {this.state.show_skills ? x : null}
                    <div className="inner-container">
                        <div className="bg"> </div>
                        <img className="cancel-button" onClick={this.showToggle.bind(this)} src={require("./assets/cancel.png")} />
                        <div className="container">
                            <div className="image-container">
                                {/* <img className="side-graphic" src={require("./assets/leadership_gfx.png")} /> */}
                                <div className="button-container">
                                    <div className="button-container-row">
                                        <div className="type-button" onClick={() => this.changeComponentToRender(leadership_list)}>Experience</div>
                                        <div className="type-button" onClick={() => this.changeComponentToRender(design_list)}>Design</div>
                                        <div className="type-button" onClick={() => this.changeComponentToRender(project_list)}>Projects</div>
                                   
                                   
                                        <div className="type-button" onClick={() => this.changeComponentToRender(this.createAll())}>All</div>
                                        <div className="type-button" onClick={() => this.showSkillsModal()}>Filter</div>
                                    </div>
                                </div>
                            </div>
                            
                                {this.renderColumns(this.state.component_to_render)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}