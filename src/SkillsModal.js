import React from 'react';
import './styles/skillsModal.css';
import posed, { PoseGroup } from 'react-pose';

import { leadership_list } from "./data/LeadershipData.js";
import { design_list } from "./data/DesignData.js";
import { project_list } from "./data/ProjectData.js";

import DesignComponent from './DesignComponent'
import ExperienceComponent from './ExperienceComponent'
import ProjectComponent from './ProjectComponent'
import ExperienceModalCards from './ExperienceModalCards.js'

export default class SkillsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: "visible",
            component_to_render: leadership_list,
            show_experience: false
        };
        this.changeComponentToRender = this.changeComponentToRender.bind(this);
    };

    show_experience() {
        this.setState({ isVisible: "hidden" });
    }

    render() {
        return (
            <div>
                <div style={{ visibility: this.state.isVisible }} className="main-container-skills">
                    <div className="inner-container-skills">
                        <div> React </div>
                    </div>
                </div>
            </div>
        );
    }
}