import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from '../common/components/Title';


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
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