import React from "react";
import style from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML"}/>
                    <Skill title={"JS"}/>
                    <Skill title={"CSS"}/>
                  
                </div>
                <span className={style.description}>{}</span>
            </div>
        </div>
    );
};

export default Skills;