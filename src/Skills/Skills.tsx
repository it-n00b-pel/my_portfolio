import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../../src/common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from '../common/components/Title';


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"HTML"}/>
                    <Skill title={"JS"}/>
                    <Skill title={"CSS"}/>
                    <Skill title={"React"}/>

                </div>
                {/*<span className={style.description}>{}</span>*/}
            </div>
        </div>
    );
};

export default Skills;